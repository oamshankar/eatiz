import React from "react";
import "./App.css";
import Carousel from 'react-bootstrap/Carousel';
export default function Reviews(props) {
  return (
    <Carousel fade className="review-block">
      <Carousel.Item className="review-item">
        <h2 className="review-head">Our customers literally can't live without us!</h2>
        <div className="review-slider">{props.item2}</div>
      </Carousel.Item>
      <Carousel.Item className="review-item">
        <h2 className="review-head">They love us, and you would too </h2>
        <div className="review-slider">{props.item3}</div>
      </Carousel.Item>

    </Carousel>

  );
}