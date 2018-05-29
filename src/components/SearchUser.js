
import React, { Component } from 'react';
import axios from 'axios';

const Card = (props) =>  {
    return (
        <div className="item-card">
            <div className="item-card__img">
                <img width="75" src={props.avatar_url} alt=""/>
            </div>
            <div className="item-card__detail">
                <strong>{props.name}</strong>
                <span>{props.location}</span>
            </div>
        </div>
    )
}

const CardItem  = (props) => {
    return (
        <div>
            {props.cards.map(card =>  <Card key={card.id} {...card}/>)}
        </div>
    );
}

class Form extends Component {
    state = {userName:''}
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Event:Form Submit", this.setState.userName);
        axios.get(`https://api.github.com/users/${this.state.userName}`).then(resp => {
          this.props.onSubmit(resp.data);
          this.setState({userName:''})
        })
       
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.userName} className="form-control" placeholder="Github User" onChange={(event) => this.setState({userName:event.target.value})}/>
                <button type="submit" className="btn btn-success">Add Card</button>
            </form>
        );
    }
}

class CardName extends Component {
    state= {
        cards:[ 
           
        ]
    }
    addNewCard = (cardInfo) => {
        this.setState(prevState => ({
            cards:prevState.cards.concat(cardInfo)
        }))
    }
    render() {
        return (
            <div className="card-wrap">
                <Form onSubmit={this.addNewCard}></Form>
                <CardItem cards={this.state.cards}></CardItem>
            </div>
        );
    }
}

export default CardName;