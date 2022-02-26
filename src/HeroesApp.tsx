import AuthProvider from './auth/AuthProvider';
import AppRouter from './routers/AppRouter';

function HeroesApp() {
	return (
		<AuthProvider>
			<AppRouter />
		</AuthProvider>
	);
}

export default HeroesApp;
