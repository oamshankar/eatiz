import React from "react";
import "./App.css";
import eatizd from "./images/eatizmob.png"
import appstore from "./images/appstore.png"
import googleplay from "./images/googleplay.png"
export default function Download(){
    return(
        <div className="download">
            <img className="mobile" src={eatizd}/>
            <div className="explore-content">
                <h5>Find and get the best food easily</h5>
                <h3>Download the eatiz App</h3>
                <p>Download the eatiz App and order your food online to get the fastest delivery.</p>
                <img className="app-store" src={appstore}/>
                <img className="app-store" src={googleplay} />
            </div>
        </div>
    )
}