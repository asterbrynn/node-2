const axios = require('axios');

let people;

axios.get('https://swapi.co/api/people')
	.then(response => {
		people = response.data.results;
	})
	.catch(err => console.log("error: ", err));

module.exports = {
	get: (req, res) => {
		res.send(people);
	}
}