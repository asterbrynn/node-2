const express = require("express");
const app = express();
app.use(express.json());

const AnimalCtrl = require('./controllers/Animals')
app.get('/api/animals', AnimalCtrl.get)

const port = 8008;
app.listen(port, () => console.log(`listening on port ${port}`));