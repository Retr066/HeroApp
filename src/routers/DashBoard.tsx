import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/UI/Navbar';
import DCSreen from '../screen/DCSreen';
import HeroScren from '../screen/HeroScren';

import MarvelScreen from '../screen/MarvelScreen';
import SearchSreen from '../screen/SearchSreen';

export default function DashBoard() {
	return (
		<>
			<Navbar />
			<div className='container'>
				<Routes>
					<Route path='/' element={<MarvelScreen />} />
					<Route path='/marvel' element={<MarvelScreen />} />
					<Route path='/DC' element={<DCSreen />} />
					<Route path='/hero/:heroId' element={<HeroScren />} />
					<Route path='/search' element={<SearchSreen />} />
				</Routes>
			</div>
		</>
	);
}
