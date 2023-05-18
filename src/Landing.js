import React from "react"
import food2 from "./images/food2.png";
import food3 from "./images/food3.png";
import food4 from "./images/food4.png";
import food5 from "./images/food5.png";
import star from "./images/star.png";
import "./App.css"

export default function Landing() {
    return (
        <main>
            <div className="landing">
                <div className="welcome">
                    <h1>Eat Today</h1>
                    <h2>Live another day</h2>
                    <p>Our creative, food and beverage program combines satisfying staples with imaginative twists. From boozy drag show brunches, special occasions and everything in between, The OG has something for everyone.</p>

                    <div className="location-form">
                        <input type="text" className="location" placeholder=" Mumbai, India" />
                        <i class=" icon2 fa-solid fa-location-crosshairs fa-beat-fade fa-xl" style={{ color: "#fe5722" }}></i>
                    </div>
                    <div className="options">
                        <a href="#"><button className="delivery">DELIVERY</button></a>
                        <span className="or">or</span>
                        <a href="#"><button className="pick">PICK UP</button></a>
                    </div>
                </div>

                <div className="welcome-food">
                    <img className="food2" src={food2} />
                    <img className="food3" src={food3} />
                    <img className="food4" src={food4} />
                    <div className="box">
                        <img className="food5" src={food5} />
                        <span className="foodname">Sweetrice Thai</span>
                        <span className="rating"> <img className="star" src={star} />  4.8</span>
                        <div>
                            <span className="review">Worth tasting I would say! Thai food becomes love when you try it on the tongue. You’d want more and more once you taste a Thai dish.</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )

}