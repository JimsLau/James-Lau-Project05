import React from 'react';

const Form = (props) => {
	return (
		<form className="add-item" onSubmit={props.onSubmit}>
			<input
				type="text"
				name="userName"
				placeholder="What do people call you?"
				onChange={props.onChange}
				value={props.nameValue}
			/>
			<input
				type="text"
				name="currentItem"
				placeholder="What will you be bringin' ?"
				onChange={props.onChange}
				value={props.itemValue}
			/>
			<button>Add Item!</button>
		</form>
	);
};

export default Form;
