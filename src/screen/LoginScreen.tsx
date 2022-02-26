import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';
import { types } from '../types/types';

export default function LoginScreen() {
	const navigate = useNavigate();
	const { dispatch } = useContext(AuthContext);
	const handleLogin = () => {
		const action = {
			type: types.login,
			payload: { name: 'Retr0' },
		};

		dispatch(action);
		const lastPath = localStorage.getItem('lastPath') || '/marvel';
		navigate(lastPath, {
			replace: true,
		});
	};
	return (
		<div className='container mt-5'>
			<h1>Login</h1>
			<hr />
			<button
				type='button'
				className='btn btn-outline-primary'
				onClick={handleLogin}
			>
				Start Sesion
			</button>
		</div>
	);
}
