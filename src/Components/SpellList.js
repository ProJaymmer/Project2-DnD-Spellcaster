import { useEffect } from 'react';
import React, { useState } from 'react';
import SingleSpell from './SingleSpell';
import SearchBar from './SearchBar';

const SpellList = (props) => {
	// const [spellList, setSpellList] = useState([]);
	// const [selectedSpell, setSelectedSpell] = useState('');
	const [searchQuery, setSearchQuery] = useState('');
	const [tempQuery, setTempQuery] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		setSearchQuery(tempQuery);
	};

	const handleOnChange = (event) => {
		event.preventDefault();
		setTempQuery(event.target.value);
	};

	console.log(searchQuery);

	// const makeApiCall = (spellsUrl) => {
	// 	fetch(spellsUrl)
	// 		.then((response) => {
	// 			return response.json();
	// 		})
	// 		.then((data) => {
	// 			console.log(data);
	// 			setSpellList(data.results);
	// 			setSelectedSpell(data.results[0].url);
	// 		});
	// };

	useEffect(() => {
		const returnedSpells = props.spellList.map((spell) => {
			// if (searchQuery !== '') {
			if (spell.name.includes(searchQuery)) {
				console.log(returnedSpells);
			}
			// }
		});
	}, [searchQuery]);

	const handleSpellClick = (spell) => {
		console.log(spell);
		props.setSelectedSpell(spell.url);
	};

	const spellListHtml = props.spellList.map((spell) => {
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

	// const filterSpellList = spellList.filter((searchQuery) => {
	// 		const spellName = spell.name.toLowerCase();
	// 		return spellName.includes(query);
	// 	});
	// };

	// const returnedSpells = props.spellList.map((spell) => {
	// 	if (searchQuery !== '') {
	// 		if (spell.name.includes(searchQuery)) {
	// 			console.log(returnedSpells);
	// 		}
	// 	}
	// });

	return (
		<>
			<div className='SpellList'>
				<h1>Spell List</h1>
				<SearchBar
					handleSubmit={handleSubmit}
					handleOnChange={handleOnChange}
					setTempQuery={setTempQuery}
					tempQuery={tempQuery}
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
				/>
				<div className='SpellListHtml'>{spellListHtml}</div>
			</div>
			<div className='SingleSpellHtml'>
				<SingleSpell
					selectedSpell={props.selectedSpell}
					addSpellToList={props.addSpellToList}
				/>
			</div>
		</>
	);
};
export default SpellList;
