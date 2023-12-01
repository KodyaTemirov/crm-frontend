import { create } from 'zustand';

const authData = localStorage.getItem('authData');
const userData = authData ? JSON.parse(authData).user : null;

export const useAuthStore = create(set => ({
	isAuth: authData ? true : false,
	user: userData,
	login: userData =>
		set(() => {
			const newState = {
				isAuth: true,
				user: userData,
			};

			localStorage.setItem('authData', JSON.stringify(newState));
			return newState;
		}),
	logout: () =>
		set(() => ({
			isAuth: false,
			user: null,
		})),
}));
