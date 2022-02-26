import { PropUser } from '../interfaces/user.interface';
import { types } from '../types/types';

interface PropState {
	state: PropUser;
}
interface PropsAction {
	type: string;
	payload?: PropUser;
}

export const authReducer = (state: PropState, action: PropsAction): any => {
	console.log(action);
	switch (action.type) {
		case types.login:
			return {
				...action.payload,
				logged: true,
			};
		case types.logout:
			return {
				logged: false,
			};

		default:
			return state;
	}
};
