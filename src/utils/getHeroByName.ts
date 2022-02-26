import { heroes } from '../data/heroes';

export const getHeroByName = (name: string = '') => {
	if (name.length === 0) {
		return [];
	}

	const lowerName = name.toLowerCase();
	return heroes.filter(hero => hero.superhero.toLowerCase().includes(lowerName));
};
