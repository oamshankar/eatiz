import React from "react";
import "./App.css";
import Carousel from 'react-bootstrap/Carousel';
export default function Carsoule(props){
    return(
        <Carousel>
            <Carousel.Item>
            <div>
            {props.item2}
            </div>
            </Carousel.Item>
        </Carousel>
    )
}
