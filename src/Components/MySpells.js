const MySpells = (props) => {
	console.log(props);

	let mySpellsHtml = '';
	if (props.mySpells[0]) {
		mySpellsHtml = props.mySpells.map((spell) => {
			return (
				<div>
					<ul>
						<li>{spell.name}</li>
					</ul>
				</div>
			);
		});
	}
	return (
		<div className='MySpells'>
			<h1>My Spells</h1>
			<section>{mySpellsHtml}</section>
		</div>
	);
};

export default MySpells;
