import { useState } from 'react';
import SpellDescription from './SpellDescription';

const MySpells = (props) => {
	console.log(props);
	const [selectedSpell, setSelectedSpell] = useState([]);

	const handleSpellClick = (spell) => {
		console.log(spell);
		setSelectedSpell(spell);
	};

	let mySpellsHtml = '';
	if (props.mySpells[0]) {
		mySpellsHtml = props.mySpells.map((spell) => {
			return (
				<div>
					<ul>
						<li
							onClick={() => {
								handleSpellClick(spell);
							}}>
							{spell.name}
						</li>
					</ul>
				</div>
			);
		});
	}

	return (
		<>
			<div className='MySpellsTop'>
				<h1>My Spells</h1>
				<section>{mySpellsHtml}</section>
			</div>
			<SpellDescription selectedSpell={selectedSpell} />
		</>
	);
};

export default MySpells;
