import { Route, Routes, useNavigate } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { LoginPage, StatPage, ProfilePage } from './pages';
import { LogoutPage } from './pages/Logout/Logout';
import { RequireAuth } from './hoc/RequireAuth';
import { useAuthStore } from './stores/auth.store';
import { useEffect } from 'react';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<LoginPage />} />
					<Route path='/register' element={<LoginPage />} />

					<Route
						path='dashboard'
						element={
							<RequireAuth>
								<ProfilePage />
							</RequireAuth>
						}
					/>

					<Route
						path='stat'
						element={
							<RequireAuth>
								<ProfilePage />
							</RequireAuth>
						}
					/>
					<Route
						path='logout'
						element={
							<RequireAuth>
								<LogoutPage />
							</RequireAuth>
						}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
