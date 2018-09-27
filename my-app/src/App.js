import React, { Component } from 'react';
import Ninjas from './Ninja';
import AddNinja from './AddNinja';
import './App.css';

class App extends Component {
  state = {
    ninjas : [
      { name: 'Ryu', age: 30, belt: 'black', id: 1},
      { name: 'Yoshi', age: 33, belt: 'green', id: 2},
      { name: 'Mario', age: 31, belt: 'yellow', id: 3},
    ]
  }
  addNinja = (newNinja) => {
    newNinja.id = Math.random();
    let ninjas = [...this.state.ninjas, newNinja]
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    console.log(id);
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Hi</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
