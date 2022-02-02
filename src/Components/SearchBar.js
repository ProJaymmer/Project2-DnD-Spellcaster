import { useState } from 'react';

const SearchBar = (props) => {
	//Handle submit funcion that on submit, setSearchquery = to value of input. Take that state and use it in filter.spell list.

	// const [tempQuery, setTempQuery] = useState('');

	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	props.setSearchQuery(tempQuery);
	// };

	// const handleOnChange = (event) => {
	// 	event.preventDefault();
	// 	setTempQuery(event.target.value);
	// };
	// console.log(props.searchQuery);

	return (
		<form onSubmit={props.handleSubmit} action='/' method='get'>
			<label htmlFor='header-search'>
				<span className='visually-hidden'>Search for Spell</span>
			</label>
			<input
				type='text'
				id='header-search'
				placeholder='Search for Spell'
				name='spell'
				value={props.tempQuery}
				onChange={props.handleOnChange}
			/>
			<button type='submit'>Search</button>
		</form>
	);
};

export default SearchBar;
