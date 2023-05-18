import React from "react";
import "./App.css";
import Card from 'react-bootstrap/Card';
import twitter from "./images/twitter.png"
export default function Cities(props) {
    return (

            <Card style={{ width: '13rem' ,height:"23rem" }}className="city-card">
                <Card.Img className="city-img" src={props.item.img} />
                <Card.Body>
                    <Card.Title>{props.item.cityName}</Card.Title>
                    <Card.Text>
                        <img className="twitter-img" src={twitter} />
                        <span className="twitter-city">{props.item.cityTwitter}</span>
                    </Card.Text>
                </Card.Body>
            </Card>

    );
}