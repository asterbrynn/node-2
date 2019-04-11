import React, {Component} from 'react'

export default class EditAnimal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			species: props.animal.species,
			imageUrl: props.animal.imageUrl,
			quantity: props.animal.quantity
		}
	}
	handleChange = e => {
		let {value, name} = e.target;
		this.setState({
			[name]: value
		})
	}
	handleClick = () => {
		let animal = {...this.props.animal, ...this.state};
		this.props.updateAnimal(animal);
	}
	render() {
		return (
			<div style={{border: '1px solid black', margin: 20,
							display: 'flex', flexDirection:"column"}}>
				<input
					onChange={this.handleChange}
					name="species" type="text"
					value= {this.state.species}
					placeholder="Species"/>
				<input
					onChange={this.handleChange}
					name="imageUrl" type="text"
					value= {this.state.imageUrl}
					placeholder="Image URL"/>
				<input
					onChange={this.handleChange}
					name="quantity" type="text"
					value= {this.state.quantity}
					placeholder="Quantity"/>
				<button onClick={this.handleClick}>Edit Animal</button>
			</div>
		)
	}
}