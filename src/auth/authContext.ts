import { createContext } from 'react';
import { PropUser } from '../interfaces/user.interface';

export type AuthContextProps = {
	user: PropUser;
	dispatch: any;
};

export const AuthContext = createContext({} as AuthContextProps);
