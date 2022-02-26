import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

interface PublicRouteProps {
	children: JSX.Element;
}
export default function PublicRoute({ children }: PublicRouteProps) {
	const { user } = useContext(AuthContext);
	return user.logged ? <Navigate to='/marvel' /> : children;
}
