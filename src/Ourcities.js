import React from "react";
import "./App.css";
export default function Ourcities(props) {
    return (
        <div className="city">
            <h2 className="city-title">We're currently in these cities</h2>
            <div className="city-grid">
                {props.item}
            </div>
        </div>

    )
}