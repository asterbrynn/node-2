let saveToDos = []

module.exports = {
	newToDo: (req, res) => {
		let {toDos} = req.body;
		saveToDos = [...toDos]
		res.send(saveToDos)
	},
	toDos: (req, res) => {
		res.send(saveToDos)
	}
}