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
	let mySpellsDescriptionHtml = '';
	if (props.mySpells[0]) {
		mySpellsDescriptionHtml = props.mySpells.desc;
	}
	return (
		<>
			<div className='MySpells'>
				<h1>My Spells</h1>
				<section>{mySpellsHtml}</section>
			</div>
			<div className='MySpellsDescription'>
				<h1>Spell Description</h1>
				{mySpellsDescriptionHtml}
			</div>
		</>
	);
};

export default MySpells;
