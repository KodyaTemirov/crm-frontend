import s from './Layout.module.css';
import { Sidebar } from './Sidebar/Sidebar';
import { Layout as LayoutAntd } from 'antd';
const { Content, Footer } = LayoutAntd;
import { Outlet } from 'react-router-dom';
import { useAuthStore } from '../stores/auth.store';
import { useState } from 'react';

export const Layout = () => {
	const { isAuth } = useAuthStore();

	return (
		<>
			<LayoutAntd className={s.layout} hasSider>
				{isAuth && <Sidebar />}
				<LayoutAntd>
					<Content>
						<Outlet />
					</Content>
					{isAuth && (
						<Footer
							style={{
								textAlign: 'center',
							}}
						>
							EdSys ©2023 System for managing the learning center
						</Footer>
					)}
				</LayoutAntd>
			</LayoutAntd>
		</>
	);
};
