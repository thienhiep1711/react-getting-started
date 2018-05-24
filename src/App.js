import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter'
import CardName from './components/SearchUser'


class App extends Component {
 
  render() {
    return (
      <div className="App">
       <Counter></Counter>
       <CardName></CardName>
      </div>
    );
  }
}

export default App;
