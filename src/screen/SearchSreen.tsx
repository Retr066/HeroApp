import { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import HeroCard from '../components/hero/HeroCard';
import { initialStateSearch } from '../data/initialStateSearch';
import useForm from '../hooks/useForm';
import { getHeroByName } from '../utils/getHeroByName';
import { PropHeroe } from '../interfaces/heroes.interface';

export default function SearchSreen() {
	const [heroesList, setHeroesList] = useState<PropHeroe[]>([]);
	const navigate = useNavigate();
	const location = useLocation();

	const { q = '' } = queryString.parse(location.search);

	const [formValues, handleInputChange] = useForm(
		Object.assign(initialStateSearch, { search: q })
	);

	const { search } = formValues;

	const handleSearch = useCallback(() => {
		navigate(`?q=${search}`);
	}, [search, navigate]);

	useEffect(() => {
		handleSearch();
		const heroesFiletedEffect = getHeroByName(search);
		setHeroesList(heroesFiletedEffect);
	}, [search, handleSearch]);

	return (
		<>
			<h1>Search Hero</h1>
			<hr />
			<div className='row'>
				<div className='col-12'>
					<form>
						<input
							type='text'
							name='search'
							onChange={handleInputChange}
							value={search}
							className='form-control'
							placeholder='Search heroes..'
							autoComplete='off'
						/>
					</form>
				</div>
			</div>
			<div className='row'>
				<h1>Resultados</h1>
				<hr />
				{q === '' ? (
					<div className='alert alert-info'>Search hero...</div>
				) : (
					heroesList.length === 0 && (
						<div className='alert alert-danger'>No Result: {q}</div>
					)
				)}
				{heroesList.map(hero => (
					<HeroCard key={hero.id} {...hero} />
				))}
			</div>
		</>
	);
}
