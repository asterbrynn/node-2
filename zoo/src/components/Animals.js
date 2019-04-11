import React, {Component} from 'react';
import axios from 'axios';
import Animal from './Animal';
import CreateAnimal from './CreateAnimal';

export default class Animals extends Component {
	constructor() {
		super();
		this.state = {
			animals: []
		}
	}

	componentDidMount() {
		axios.get('/api/animals').then(res => {
			this.setState({
				animals: res.data
			})
		}).catch(err => console.log('we have a problem lol', err))
	}

	createAnimal = newAnimal => {
		axios.post('/api/animals', newAnimal).then(res => {
			this.setState({
				animals: res.data
			})
		}).catch(err => console.log('we have a problem lol', err))
	}
	updateAnimal = animal => {
		axios.put(`/api/animals/${animal.id}`, animal).then(res => {
			this.setState({
				animals: res.data
			})
		}).catch(err => console.log('we have a problem lol', err))
	}
	
	render() {
		return (
			<div>
				<CreateAnimal CreateAnimal = {this.createAnimal}/>
				{this.state.animals.map(animal => {
					return <Animal key={animal.id}
						animal={animal}
						updateAnimal = {this.updateAnimal}/>
				})}
			</div>
		)
	}
}