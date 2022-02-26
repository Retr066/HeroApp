import { Routes, Route, BrowserRouter } from 'react-router-dom';

import LoginScreen from '../screen/LoginScreen';
import DashBoard from './DashBoard';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/login'
					element={
						<PublicRoute>
							<LoginScreen />
						</PublicRoute>
					}
				/>

				<Route
					path='/*'
					element={
						<PrivateRoute>
							<DashBoard />
						</PrivateRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}
