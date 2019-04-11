const express = require("express");
const app = express();
const port = 6969;
const toDoCtrl = require('./toDoCtrl')

app.use(express.json())

app.get("/api/start", toDoCtrl.toDos);
app.post("/api/new-to-do", toDoCtrl.newToDo)

app.listen(port, () => console.log(`server running on the best port, port ${port}`));