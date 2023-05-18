import React from "react";
import "./App.css";
import grilled from "./images/grilled.png"
import Gobi from "./images/Gobi.png"
import star from "./images/star.png"
import Arvind from "./images/Arvind.png"
export default function Template() {
    return (
        <div className="template">
            
            <img className="grilled" src={grilled} />
            <div>
                <div className="template-box">
                <img className="gobi" src={Gobi}/>
                <span className="food-name">Gobi Manchurian</span>
                <span className="template-rating"> <img className="star" src={star} />  4.9</span>
                <div>
                    <span className="review">It has a right balance of slightly spicy, sour & sweet tastes so it tastes amazingly delicious on its own.</span>
                </div>
            </div>
            <div className="review-box">
                <img className="arvind-profile" src={Arvind} />
                <span className="arvind-rating"> <img className="star" src={star} />  4.9</span>
                <p className="arvind-name">Arvind Malhotra</p>
                <div>
                    <span className="review">The wait staff were really attentive and prompt. The ambiance was amazing and the food was given promptly. Really enjoyed the gobi Manchurian which was crisp and mouthful of flavors. The other dishes were also good.</span>
                </div>
            </div>
            </div>
            
            <div className="about-gobi">
                <h3>50% off in your First order </h3>
                <h2>Gobi manchurian Ribs Lamb and mutton Rosemary Herb</h2>
                <span className="prev-price">$59</span>
                <span className="new-price">$29</span>
                <div><a href="#"><button className="explore-menu">ADD TO BAG</button></a></div>
            </div>
        </div>
    )
}