import { Link } from 'react-router-dom';
import { PropHeroe } from '../../interfaces/heroes.interface';
import './css/HeroCard.css';

export default function HeroCard({
	id,
	superhero,
	publisher,
	alter_ego,
	first_appearance,
	characters,
}: PropHeroe) {
	return (
		<div className='col animate__animated animate__fadeIn'>
			<Link to={`/hero/${id}`} className='my-card'>
				<img
					src={`assets/${id}.jpg`}
					className='img img-responsive'
					alt={superhero}
				/>
				<div className='profile-name'>{superhero}</div>
				<div className='profile-position'>{alter_ego}</div>
				<div className='profile-overview'>
					<div className='profile-overview'>
						<div className='row'>
							<div className='col-ms-4'>
								<h3>{publisher}</h3>
								<p>
									Primera aparición: <br />
									{first_appearance}
								</p>
								{alter_ego !== characters && <p>{characters}</p>}
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}
