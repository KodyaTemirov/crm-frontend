import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../stores/auth.store';

const RequireAuth = ({ children }) => {
	const { isAuth } = useAuthStore();
	if (!isAuth) {
		return <Navigate to='/' />;
	} else return children;
};

export { RequireAuth };
