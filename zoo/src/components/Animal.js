import React, {Component} from 'react';
import EditAnimal from './EditAnimal';

export default class Animal extends Component {
	constructor() {
		super()
		this.state = {
			edit: false
		}
	}

	toggleEdit = () => {
		this.setState({
			edit: !this.state.edit
		})
	}

	render() {
		let {animal} = this.props;
		return(
			this.state.edit 
			? <EditAnimal animal={animal} updateAnimal={this.props.updateAnimal}/>
			: <div style={{border: "1px solid black", margin: 20}}>
				<img src={animal.imageUrl} alt=""
					style={{width: 200, margin: 20}}/>
				<p>species: {animal.species}</p>
				<p>qty: {animal.quantity}</p>
				<button onClick={this.toggleEdit}
					style={{marginBottom: 20}}>Edit</button>
			</div>
		)
	}
}