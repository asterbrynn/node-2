import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    toDo: "",
    toDoList: []
  }
  componentDidMount() {
    axios.get("/api/start").then( res => console.log(res))
  }
  handleChange = e => {
    this.setState({
      toDo: e.target.value
    })
  }
  submit = () => {
    let newToDoList = [...this.state.toDoList];
    newToDoList.push(this.state.toDo);
    this.setState({
      toDoList: newToDoList,
      toDo: ""
    })
    axios.post("/api/new-to-do", {toDoList: newToDoList}).then(res => console.log("data"))
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>To-do List</h1>
        <input type="text" onChange={this.handleChange}/>
        <button onClick={this.submit}>Submit</button>
        {this.state.toDoList.map( (toDo, i) => {
          return (
            <h3 key={i}>{toDo}</h3>
          )
        }
        )}
      </div>
    );
  }
}

export default App;
