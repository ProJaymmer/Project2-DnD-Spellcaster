import { useEffect, useState } from 'react';

const SingleSpell = (props) => {
	const [spell, setSpell] = useState();
	console.log(props);

	const makeApiCall = (spellsUrl) => {
		fetch(spellsUrl)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
			});
	};

	useEffect(() => {
		const spellsUrl = `https://www.dnd5eapi.co/api/spells`;
		makeApiCall(spellsUrl);
	}, []);

	return (
		<div className='SingleSpell'>
			<h1>Selected Spell</h1>
		</div>
	);
};

export default SingleSpell;
