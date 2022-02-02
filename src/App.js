import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import SpellList from './Components/SpellList';
import MySpells from './Components/MySpells';
import DnDLogo from './Components/DnDLogo';

function App() {
	const [mySpells, setMySpells] = useState([]);
	const [spellList, setSpellList] = useState([]);
	const [selectedSpell, setSelectedSpell] = useState('');

	const makeApiCall = (spellsUrl) => {
		fetch(spellsUrl)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setSpellList(data.results);
				setSelectedSpell(data.results[0].url);
			});
	};

	useEffect(() => {
		const spellsUrl = 'https://www.dnd5eapi.co/api/spells';
		makeApiCall(spellsUrl);
	}, []);

	const addSpellToList = (spell) => {
		setMySpells([...mySpells, spell]);
	};

	return (
		<div className='App'>
			<nav>
				<Link to='/'>
					<DnDLogo />
				</Link>
				<Link to='/spell-list'>Spell List</Link>
				<Link to='/my-spells'>My Spells</Link>
			</nav>
			<Route
				path='/spell-list'
				exact
				render={() => (
					<SpellList
						spellList={spellList}
						setSpellList={setSpellList}
						selectedSpell={selectedSpell}
						setSelectedSpell={setSelectedSpell}
						addSpellToList={addSpellToList}
					/>
				)}
			/>
			<Routes>
				<Route
					path='/my-spells'
					exact
					render={() => <MySpells mySpells={mySpells} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
