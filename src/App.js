import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';
import Form from './Form.js';
import Results from './Results.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			currentItem: '',
			userName: '',
			// Create a variable to hold items that are in the Firebase database, for printing to page.
			items: []
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.removeItem = this.removeItem.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleConfirm = (event) => {
		// Prevent referesh when submit(Add Item) button is pressed
		event.preventDefault();
		if (this.state.currentItem && this.state.userName) {
			this.handleSubmit();
		} else {
			alert('Please enter your name and item');
		}
	};

	handleSubmit() {
		// Create a space in Firebase database to store users' items, using .ref into 'items'
		const itemsRef = firebase.database().ref('items');
		// Grab input info (item and username) from state to send to Firebase database
		const item = {
			item: this.state.currentItem,
			user: this.state.userName
		};
		// Create a copy of object and push to Firebase database
		itemsRef.push(item);
		// Clear out inputs
		this.setState({
			currentItem: '',
			userName: ''
		});
	}

	componentDidMount() {
		const itemsRef = firebase.database().ref('items');
		// Create a listener and a callback on items referenced inside of the database
		itemsRef.on('value', (snap) => {
			let items = snap.val();
			// Instantiate a new array and populate it with results coming back from our 'value' listener
			let newState = [];
			// Loop over each key, push result into an object inside newState array
			for (let item in items) {
				// Update the state with list of items from the database
				newState.push({
					id: item,
					item: items[item].item,
					user: items[item].user
				});
			}
			this.setState({
				items: newState
			});
		});
	}

	// Create method to remove items from page
	removeItem(itemId) {
		const itemRef = firebase.database().ref(`/items/${itemId}`);
		itemRef.remove();
	}

	render() {
		return (
			<div className="app">
				<header>
						<h1>What We Be Bringing!</h1>
				</header>
				<Form
					onSubmit={this.handleSubmit}
					onChange={this.handleChange}
					onClick={this.handleConfirm}
					nameValue={this.state.userName}
					itemValue={this.state.currentItem}
				/>
				<Results items={this.state.items} removeItem={this.removeItem} />
			</div>
		);
	}
}

export default App;
