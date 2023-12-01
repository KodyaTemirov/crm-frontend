import { useState } from 'react';
import s from './Sidebar.module.css';
import cn from 'classnames';
import { Layout, Menu } from 'antd';
import Items from '../../helpers/menu';
const { Sider } = Layout;
import { Link } from 'react-router-dom';

export const Sidebar = ({ className, ...props }) => {
	const [collapsed, setCollapsed] = useState(false);
	return (
		<Sider
			collapsible
			width={220}
			collapsed={collapsed}
			className={s.sidebar}
			onCollapse={value => setCollapsed(value)}
			theme='light'
		>
			<div className={s.logo}>
				<Link to='/dashboard'>EdSys</Link>
			</div>
			<Menu defaultSelectedKeys={['1']} mode='inline' items={Items} />
		</Sider>
	);
};
