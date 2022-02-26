import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../utils/getHeroById';

export default function HeroScren() {
	const { heroId } = useParams();
	const navigate = useNavigate();

	const hero = useMemo(() => getHeroById(heroId), [heroId]);
	if (!hero) {
		return <Navigate to='/' />;
	}
	const { id, alter_ego, superhero, characters, first_appearance, publisher } =
		hero;
	const imagePath = `/assets/${id}.jpg`;
	const handleReturn = () => {
		navigate(-1);
	};
	return (
		<div className='row mt-5 '>
			<div className='col-4'>
				<img
					src={imagePath}
					alt={superhero}
					className='img-thumbnail animate__animated animate__fadeInLeft'
				/>
			</div>
			<div className='col-8 animate__animated animate__fadeIn'>
				<h3>{hero.superhero}</h3>
				<ul className='list-group '>
					<li className='list-group-item'>
						<b>Alter Ego: </b>
						{alter_ego}
					</li>
					<li className='list-group-item'>
						<b>Publisher: </b>
						{publisher}
					</li>
					<li className='list-group-item'>
						<b>First Appearence: </b>
						{first_appearance}
					</li>
					{alter_ego !== characters && (
						<li className='list-group-item'>
							<b>Characters: </b>
							{characters}
						</li>
					)}
				</ul>
				<hr />
				<button
					type='button'
					className='btn btn-outline-info'
					onClick={handleReturn}
				>
					Return
				</button>
			</div>
		</div>
	);
}
