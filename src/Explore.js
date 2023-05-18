import React from "react";
import "./App.css"
import food6 from "./images/food6.png"
export default function Explore(){
    return(
        <div className="explore">
        <img src={food6}/>
            <div className="explore-content">
                <h5>Our popular dishes</h5>
                <h3>100+</h3>
                <h2>Our delicious food</h2>
                <p>Hello, we're eatiz, your new premium food service. We know that you're always busy. No time for cooking. So, let us take care of that, we're really good at it, we promise!</p>
                <a href="#"><button className="explore-menu">EXPLORE MENU</button></a>
            </div>
        </div>
    )
}