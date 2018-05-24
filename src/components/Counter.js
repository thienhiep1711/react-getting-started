import React, { Component } from 'react';
const Result = (props) => {
  return (
    <div>{props.counter}</div>
  )
};

class Button extends React.Component {
  render () {
    return (
      <button onClick={() =>this.props.onClickFunction(this.props.incrementValue)}>+{this.props.incrementValue}</button>
    )
  }
}

class Counter extends Component {
  state = {counter:0};

  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
      counter:prevState.counter + incrementValue
    }))
  }

  render() {
    return (
      <div>
        <Button incrementValue={1} onClickFunction={this.incrementCounter}></Button>
        <Button incrementValue={20} onClickFunction={this.incrementCounter}></Button>
        <Button incrementValue={50} onClickFunction={this.incrementCounter}></Button>
        <Button incrementValue={100} onClickFunction={this.incrementCounter}></Button>
        <Button incrementValue={200} onClickFunction={this.incrementCounter}></Button>
        <Result counter={this.state.counter}></Result>
      </div>
    );
  }
}

export default Counter;
