import s from './Login.module.css';
import { useEffect } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/auth.store';
import axios from 'axios';

export function LoginPage() {
	const { login, isAuth } = useAuthStore();
	const navigate = useNavigate();

	const [messageApi, contextHolder] = message.useMessage();
	const onFinish = async values => {
		try {
			const reqBody = {
				username: values.username,
				password: values.password,
			};

			const response = await axios.post(
				'https://dummyjson.com/auth/login',
				reqBody
			);

			if (response.status !== 200) {
				throw new Error('Ошибка при получении данных');
			}

			await login(response.data);
			navigate('/dashboard');
		} catch (e) {
			messageApi.open({
				type: 'error',
				content: e.message,
			});
		}
	};

	useEffect(() => {
		if (isAuth) {
			navigate('/dashboard');
		}
	}, []);
	return (
		<>
			{contextHolder}
			<div className={s.bg}></div>
			<div className={s.login}>
				<div className={s.container}>
					<div className={s.content}>
						<h1 className={s.title}>
							<TypeAnimation
								sequence={[
									'App for student!',
									1000,
									'App for teacher!',
									1000,
									'App for manager!',
									1000,
								]}
								speed={50}
								cursor={false}
								repeat={Infinity}
							/>
						</h1>
						<p className={s.description}>
							CRM for managing the learning center
						</p>
						<Button type='primary' shape='round'>
							Read More
						</Button>
					</div>
				</div>
				<div className={s.authForm}>
					<Form
						name='normal_login'
						className='login-form'
						initialValues={{ remember: true }}
						onFinish={onFinish}
					>
						<h2 className={s.hello}>Hello Again! {isAuth}</h2>
						<p className={s.welcome}>Welcome Back </p>
						<Form.Item
							name='username'
							rules={[
								{ required: true, message: 'Please input your Username!' },
							]}
						>
							<Input
								prefix={<UserOutlined className='site-form-item-icon' />}
								placeholder='Username'
							/>
						</Form.Item>
						<Form.Item
							name='password'
							rules={[
								{ required: true, message: 'Please input your Password!' },
							]}
						>
							<Input
								prefix={<LockOutlined className='site-form-item-icon' />}
								type='password'
								placeholder='Password'
							/>
						</Form.Item>
						<Form.Item>
							<Form.Item name='remember' valuePropName='checked' noStyle>
								<Checkbox>Remember me</Checkbox>
							</Form.Item>

							<a className='login-form-forgot' href=''>
								Forgot password
							</a>
						</Form.Item>

						<Form.Item>
							<Button
								type='primary'
								htmlType='submit'
								className='login-form-button'
							>
								Log in
							</Button>
							Or <a href=''>register now!</a>
						</Form.Item>
					</Form>
				</div>
			</div>
		</>
	);
}
