import './App.css';
// import { useEffect } from 'react';
import react, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import SpellList from './Components/SpellList';
import MySpells from './Components/MySpells';

function App() {
	const [mySpells, setMySpells] = useState([]);

	const addSpellToList = (spell) => {
		setMySpells([...mySpells, spell]);
	};

	return (
		<div className='App'>
			<nav>
				<Link to='/'>Spell List</Link>
				<Link to='/my-spells'>My Spells</Link>
			</nav>
			<Route
				path='/'
				exact
				render={() => <SpellList addSpellToList={addSpellToList} />}
			/>
			<Route path='/my-spells' render={() => <MySpells />} />
		</div>
	);
}

export default App;