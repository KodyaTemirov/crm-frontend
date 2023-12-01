import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/auth.store';
import { useEffect } from 'react';

export function LogoutPage() {
	const { logout } = useAuthStore();
	console.log('sdasdas');
	useEffect(() => {
		logout(null);
		localStorage.removeItem('authData');
	}, []);

	return <Navigate to='/' />;
}
