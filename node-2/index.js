const express = require('express');
let app = express();
const port = 6969;

const UserCtrl = require('./controllers/User');
const SwapiCtrl = require('./controllers/Swapi')

app.use(express.json());

app.get('/api/users', UserCtrl.get);
app.get('/api/users/:id', UserCtrl.getUserByID);
app.post('/api/users', UserCtrl.create)
app.put('/api/users/:id', UserCtrl.update)
app.delete('/api/users/:id', UserCtrl.delete)

app.get('/api/swapi', SwapiCtrl.get)

app.listen(6969, () => {
	console.log("listening on the best port, port", port)
})
