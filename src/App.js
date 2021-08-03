import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/CardList';
import Searchbox from './components/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: ''
     
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
      this.setState({ monsters: users})

    })
  }

  onSearchChange = (event) => {
    console.log(event)
    this.setState({searchfield:event.target.value})
  }

  render() {
    const { monsters, searchfield } = this.state;

    const filteredMonsters = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
    ))
    return (
      <div className="App">
        <h1 className ='tc'>Monsters Roledex</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <CardList monsters ={filteredMonsters}/>
      </div>
    );
  }
  
}

export default App;
