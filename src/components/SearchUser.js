
import React, { Component } from 'react';

const Card = (props) =>  {
    return (
        <div className="item-card">
            <div className="item-card__img">
                <img width="75" src={props.avartar_url} alt=""/>
            </div>
            <div className="item-card__detail">
                <strong>{props.name}</strong>
                <span>{props.github_email}</span>
            </div>
        </div>
    )
}

let data =[ 
    {
        avartar_url:"https://avatars0.githubusercontent.com/u/8624099?s=400&u=4ce23cbdc1fd7fa14588efe8f21a996684444480&v=4",
        name:"Nguyễn Hiệp",
        github_email:"octocat@github.com",
    },
    {
        avartar_url:"https://avatars0.githubusercontent.com/u/8624099?s=400&u=4ce23cbdc1fd7fa14588efe8f21a996684444480&v=4",
        name:"John",
        github_email:"john@github.com",
    },
]
const CardItem  = (props) => {
    return (
        <div>
            {props.cards.map(card =>  <Card {...card}/>)}
        </div>
    );
}

class CardName extends Component {
    render() {
        return (
            <div>
                <CardItem cards={data}></CardItem>
            </div>
        );
    }
}


export default CardName;