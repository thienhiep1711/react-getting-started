import React, { Component } from 'react';
import './css/styles.css';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
// import Counter from './components/Counter'
import CardName from './components/SearchUser'
import GameInterface from './components/GameInterface'


class App extends Component {
 
  render() {
    return (
      <div className="App container" >
       {/* <Counter></Counter> */}
       <CardName></CardName>
       <GameInterface></GameInterface>
      </div>
    );
  }
}

export default App;
