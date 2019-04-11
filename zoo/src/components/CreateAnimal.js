import React, {Component} from 'react';

export default class CreateAnimal extends Component {
	constructor() {
		super() 
		this.state = {
			species: '',
			imageUrl: '',
			quantity: 0
		}
	}
	handleChange = e => {
		let {value, name} = e.target;
		this.setState({
			[name]: value
		})
	}
	handleClick = () => {
		let newAnimal = this.state;
		this.props.CreateAnimal(newAnimal);
	}
	render() {
		return (
			<div style={{border: '1px solid black', margin: 20}}>
				<input
					onChange={this.handleChange}
					name="species" type="text"
					placeholder="Species"/>
				<input
					onChange={this.handleChange}
					name="imageUrl" type="text"
					placeholder="Image URL"/>
				<input
					onChange={this.handleChange}
					name="quantity" type="text"
					placeholder="Quantity"/>
				<button onClick={this.handleClick}>Create Animal</button>
			</div>
		)
	}
}