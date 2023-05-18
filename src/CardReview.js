import React from "react";
import "./App.css";
import star from "./images/star.png"
export default function CardReview(props) {
    return (
         <div className="review-card">
                <img className="card-profile" src={props.item.img} />
                <span className="card-rating"> <img className="star" src={star} />{props.item.rating}</span>
                <p className="card-name">{props.item.name}</p>
                <h6 className="card-location">{props.item.location}</h6>
                <div>
                    <span className="card-review">{props.item.review}</span>
                </div>
            </div>
    );
}