import { useContext } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export default function Navbar() {
	const navigate = useNavigate();
	const { user, dispatch } = useContext(AuthContext);
	const handleLogout = () => {
		dispatch({
			type: types.logout,
		});
		navigate('/login', {
			replace: true,
		});
	};

	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					AppHeroes
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon' />
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<NavLink
								className={({ isActive }) =>
									isActive ? 'nav-link active' : 'nav-link'
								}
								to='/marvel'
							>
								Marvel
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								className={({ isActive }) =>
									isActive ? 'nav-link active' : 'nav-link'
								}
								to='/DC'
							>
								DC
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								className={({ isActive }) =>
									isActive ? 'nav-link active' : 'nav-link'
								}
								to='/search'
							>
								search
							</NavLink>
						</li>
					</ul>
					<div className='d-flex'>
						<span className='nav-link active nav-link text-info'>{user.name}</span>
						<button
							className='btn btn-outline-warning'
							onClick={handleLogout}
							type='button'
						>
							Logout
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
