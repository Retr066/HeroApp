import { useMemo } from 'react';
import { getHeroByPublisher } from '../../utils/getHeroByPublisher';
import HeroCard from './HeroCard';

export default function HeroList({ publisher }: { publisher: string }) {
	const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);
	return (
		<>
			<h1>Hero List - {publisher}</h1>
			<div className='row rows-cols-1 row-cols-md-3  g-3 animate__animated animate__fadeIn animate__faster'>
				{heroes.map(hero => (
					<HeroCard key={hero.id} {...hero} />
				))}
			</div>
		</>
	);
}
