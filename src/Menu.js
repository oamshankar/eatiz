import React from "react";
import "./App.css";
import Card from 'react-bootstrap/Card';
import star from "./images/star.png"
export default function Menu(props) {
  return (
    <Card className="menu">
      <Card.Img variant="top" className="dish-img" src={props.item1.img} />
      <Card.Body>
        <div className="top-line">
          <Card.Title className="dish">{props.item1.dishName}</Card.Title>
          <span className="menu-rating"> <img className="star" src={star} /> {props.item1.rating}/5</span>
        </div>
        <Card.Text className="amount">
          ${props.item1.price *1/10}
        </Card.Text>
        <p className="des-crp">{props.item1.description}</p>
      </Card.Body>
    </Card>
  )
}