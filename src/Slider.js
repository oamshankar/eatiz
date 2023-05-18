import React from "react";
import "./App.css"
import Carousel from 'react-bootstrap/Carousel';
export default function Slider(props) {
    return (
        <Carousel>
            <Carousel.Item >
                <div className="slider">{props.item2}</div>

            </Carousel.Item>
            <Carousel.Item>
            <div className="slider">{props.item3}</div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="slider">{props.item4}</div>

            </Carousel.Item> 
        </Carousel>

    )
}