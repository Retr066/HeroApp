import React, { useEffect, useMemo, useReducer } from 'react';
import { PropUser } from '../interfaces/user.interface';
import { AuthContext } from './authContext';
import { authReducer } from './authReducer';

const init = (): PropUser => {
	let initialState: PropUser;
	const storedText = localStorage.getItem('user');
	if (storedText !== null) {
		initialState = JSON.parse(storedText);
		return initialState;
	}
	return { logged: false };
};

interface Props {
	children: JSX.Element | JSX.Element[];
}

function AuthProvider({ children }: Props) {
	const [user, dispatch] = useReducer(authReducer, {}, init);

	const contextValue = useMemo(() => ({ user, dispatch }), [user, dispatch]);
	useEffect(() => {
		if (!user) return;
		localStorage.setItem('user', JSON.stringify(user));
	}, [user]);

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
}

export default AuthProvider;
