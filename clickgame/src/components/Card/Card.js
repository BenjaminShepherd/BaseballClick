import React from "react";
import "./Card.css";

//this function renders the cards to the DOM 
const Card = props => (
  <div className="card img-container hover">
    <img alt={props.name} src={props.image} id={props.id}
      onClick={() => props.shuffleScoreCard(props.id)} className='shuffleScore' />
  </div>
);

export default Card;