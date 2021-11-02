import { useEffect } from 'react';
import React, { useState } from 'react';
import SingleSpell from './SingleSpell';

const SpellList = (props) => {
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

	const handleSpellClick = (spell) => {
		console.log(spell);
		setSelectedSpell(spell.url);
	};

	const spellListHtml = spellList.map((spell) => {
		return (
			<ul>
				<li
					key={spell.index}
					onClick={() => {
						handleSpellClick(spell);
					}}>
					{spell.name}
				</li>
			</ul>
		);
	});

	return (
		<div className='SpellList'>
			<h1>Spell List</h1>
			<div className='SpellListHtml'>{spellListHtml}</div>
			<div className='SingleSpellHtml'>
				<SingleSpell selectedSpell={selectedSpell} />
			</div>
		</div>
	);
};
export default SpellList;
