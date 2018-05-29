import React, { Component } from 'react';
import _ from 'lodash';

const Stars = (props) => {
    return (
        <div className="col-5 star-wrap">
            {_.range(props.numberOfStar).map(i => 
                <i className="fa fa-star" key={i}></i>
            )}
        </div>
    )
}

const Button = (props) => {
    let button;
    switch (props.answerIsCorrect) {
        case true:
        button = 
            <button className="btn btn-success" onClick={props.acceptAnswer}>
                <i className="fa fa-check"></i>
            </button>;
            break;
        case false:
        button = 
            <button className="btn btn-danger">
                <i className="fa fa-clock-o"></i>
            </button>;
            break;
        default:
        button = 
            <button className="btn" disabled={props.selectedNumber.length === 0} onClick={props.checkAnswer}>=</button>;
            break;
    }
    return (
        <div className="col-3">
           {button}
           <button className="btn btn-warning" onClick={props.redraw}>
                <i className="fa fa-refresh"></i> {props.redraws}
            </button>
        </div>
    )
}

const Answer = (props) => {
    return (
        <div className="col-4 button-wrap">
            {props.selectedNumber.map((number,i) => 
                <button key={i} className="button-score" onClick={()=> props.unselectNumber(number)}>{number}</button>
            )}
        </div>
    )
}

const Numbers = (props) => {
   
    const numberClassName = (number) => {
        if(props.selectedNumber.indexOf(number) >= 0) {
            return "selected"
        }
        if(props.usedNumbers.indexOf(number) >= 0) {
            return "used"
        }
    }
    return (
        <div className="col-12 text-center button-wrap">
           {Numbers.list.map((number,i) => 
                <button key={i} className={'button-score ' + numberClassName(number)} onClick={() => props.selectNumber(number)}>{number}</button>
            )}
            
        </div>
    )
}


const DoneFrame = (props) => {
    return (
        <div className="text-center">
            <h2>{props.doneStatus}</h2>
        </div>
    )
}

Numbers.list = _.range(1,10);

class Game extends Component {

   static randomNumber = () => 1+ Math.floor(Math.random()* 9);
    state = {
        selectedNumber: [],
        randomNumberOfStar:Game.randomNumber(),
        answerIsCorrect:null,
        usedNumbers:[],
        redraws:5,
        doneStatus:null
    }

    selectNumber = (clickNumber) => {
        if(this.state.selectedNumber.indexOf(clickNumber) >= 0) {
            return;
        }
        this.setState(prevState  => ({
            answerIsCorrect:null,
            selectedNumber:prevState.selectedNumber.concat(clickNumber)
        }))
    }

    unselectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            answerIsCorrect:null,
            selectedNumber:prevState.selectedNumber.filter(number => number !== clickedNumber)
        }))
    }

    checkAnswer = () => {
        this.setState(prevState => ({
            answerIsCorrect: prevState.randomNumberOfStar === prevState.selectedNumber.reduce((acc,n) => acc + n, 0)
        }))
    }

    acceptAnswer = () => {
        this.setState(prevState => ({
            usedNumbers:prevState.usedNumbers.concat(prevState.selectedNumber),
            selectedNumber:[],
            answerIsCorrect:null,
            randomNumberOfStar:  1 + Math.floor(Math.random()*9),
        }))
    }

    redraw = () => {
        if(this.state.redraws === 0) {
            return;
        }
        this.setState(prevState => ({
            randomNumberOfStar: Game.randomNumber(),
            answerIsCorrect:null,
            selectedNumber:[],
            redraws:prevState.redraws - 1,
        }))
    }


    render() {
        const {selectedNumber, randomNumberOfStar, answerIsCorrect ,usedNumbers,redraws, doneStatus} = this.state;
        return (
            <div className="row">
               <h3 className="col-12">Play Game</h3>
               <Stars numberOfStar={randomNumberOfStar}></Stars>
               <Button selectedNumber={selectedNumber}
                    redraws={redraws}
                    checkAnswer={this.checkAnswer}
                    acceptAnswer={this.acceptAnswer}
                    answerIsCorrect={answerIsCorrect}
                    redraw={this.redraw}
                   

               ></Button>
               <Answer selectedNumber={selectedNumber} unselectNumber={this.unselectNumber}></Answer>
              
               {doneStatus ? 
               <DoneFrame doneStatus={doneStatus}></DoneFrame> : <Numbers selectedNumber={selectedNumber}
               selectNumber = {this.selectNumber}
               usedNumbers={usedNumbers}></Numbers>}
            </div>
        );
    }
}


class GameInterface extends Component {
    render() {
        return (
            <div>
                <Game></Game>
            </div>

        );
    }
}

export default GameInterface;