import { useEffect, useState } from 'react';

const SingleSpell = (props) => {
	const [spell, setSpell] = useState('');
	console.log(props);

	const makeApiCall = () => {
		fetch(`https://www.dnd5eapi.co${props.selectedSpell}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setSpell(data);
			});
	};

	useEffect(() => {
		makeApiCall();
	}, [props.selectedSpell]);

	let spellDetailHtml = '';
	if (spell.name) {
		spellDetailHtml = (
			<div className='SpellDescription'>
				<p>
					<span className='SpellName'>{spell.name}: </span>
					{spell.desc}
					<br />
				</p>
				<button onClick={() => props.addSpellToList(spell)}>
					Add to Your Spells
				</button>
			</div>
		);
	}

	return (
		<div className='SingleSpell'>
			<h1>Selected Spell</h1>
			{spellDetailHtml}
		</div>
	);
};

export default SingleSpell;
