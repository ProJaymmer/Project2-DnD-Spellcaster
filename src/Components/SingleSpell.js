import { useEffect, useState } from 'react';

const SingleSpell = (props) => {
	const [spell, setSpell] = useState();
	console.log(props);

	const makeApiCall = () => {
		fetch(`https://www.dnd5eapi.co${props.selectedSpell}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
			});
	};

	useEffect(() => {
		makeApiCall();
	}, [props.name]);

	return (
		<div className='SingleSpell'>
			<h1>Selected Spell</h1>
		</div>
	);
};

export default SingleSpell;
