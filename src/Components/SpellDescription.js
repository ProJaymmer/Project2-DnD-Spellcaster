const SpellDescription = (props) => {
	console.log(props.selectedSpell.desc);
	const spellDescriptionHtml = props.selectedSpell.desc;
	console.log(spellDescriptionHtml);

	return (
		<div className='MySpellsBottom'>
			<h1>Spell Description</h1>
			<section className='MySpellsDescription'>{spellDescriptionHtml}</section>
		</div>
	);
};

export default SpellDescription;
