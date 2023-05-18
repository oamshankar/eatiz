import React from "react";
import "./App.css";
import foodicon from "./images/foodicon.png"
import delicon from "./images/delicon.png"
import offer from "./images/offer.png"
import Card from 'react-bootstrap/Card';
export default function Attribute(){
    return(
        <div className="attribute">
            <Card body className="att-card" >
                <img className="iconn" src= {foodicon} />
                <span className="heading">Fastest Delivery</span>
                <div>
                    <p className="line">Tired enough and do not want to cook? Call us. Hot, tasty food will reach you in no time.</p>
                </div>
            </Card>
            <Card body className="att-card" >
                <img className="iconn" src={delicon}/>
                <span className="heading">So Much to Choose From</span>
                <div>
                    <p className="line">From swanky upscales to the cosiest hidden gems serving the most incredible food.</p>
                </div>
            </Card>
            <Card body className="att-card" >
                <img className="iconn" src= {offer}/>
                <span className="heading">Best Offer in Town!</span>
                <div>
                    <p className="line">Grab 50% OFF & free delivery. Welcoming you with your favourite delicates. </p>
                </div>
            </Card>
        </div>
    )
}