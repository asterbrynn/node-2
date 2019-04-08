let id = 1;

let users = [
	{
	  "id": id++,
	  "first_name": "Raul",
	  "last_name": "Wynter",
	  "email": "rwynter0@google.com"
	},
	{
	  "id": id++,
	  "first_name": "Demetri",
	  "last_name": "Dakin",
	  "email": "ddakin1@google.com"
	},
	{
	  "id": id++,
	  "first_name": "Lira",
	  "last_name": "Collishaw",
	  "email": "lcollishaw2@google.com"
	},
	{
	  "id": id++,
	  "first_name": "Jennette",
	  "last_name": "O'Brollachain",
	  "email": "jobrollachain3@msn.com"
	},
	{
	  "id": id++,
	  "first_name": "Annaliese",
	  "last_name": "Marishenko",
	  "email": "amarishenko4@msn.com"
	},
	{
	  "id": id++,
	  "first_name": "Delano",
	  "last_name": "Millins",
	  "email": "dmillins5@yahoo.com"
	},
	{
	  "id": id++,
	  "first_name": "Allister",
	  "last_name": "Rizzetti",
	  "email": "arizzetti6@yahoo.com"
	},
	{
	  "id": id++,
	  "first_name": "Yul",
	  "last_name": "Slite",
	  "email": "yslite7@yahoo.com"
	},
	{
	  "id": id++,
	  "first_name": "Stu",
	  "last_name": "Liveing",
	  "email": "sliveing8@devmountain.com"
	},
	{
	  "id": id++,
	  "first_name": "Carla",
	  "last_name": "Gisbye",
	  "email": "cgisbye9@devmountain.com"
	}
  ]

module.exports = {
	get: (req, res) => {
		let {first_name} = req.query;
		if (first_name) {
			return res.send(users.filter(user => user.first_name === first_name));
		}
		res.send(users);
	},
	getUserByID: (req, res) => {
		let {id} = req.params;
		res.send(users.find(user => +user.id === +id));
	},
	create: (req, res) => {
		console.log(11111, req.body)
		let user = req.body;
		user.id = id++;
		users.push(user);
		res.send(users);
	},
	update: (req, res) => {
		let {id} = req.params;
		let userData = req.body;
		let index = users.findIndex(user => +user.id === +id);
		users.splice(index, 1, userData);
		res.send(users);
	},
	delete: (req, res) => {
		let {id} = req.params;
		let index = users.findIndex(user => +user.id === +id);
		users.splice(index, 1);
		res.send(users);
	}
}