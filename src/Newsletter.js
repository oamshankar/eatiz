import React from "react";
import "./App.css";
export default function Newsletter(){
    return(
        <div className="newsletter">
            <div className="joining"><h2>Join our membership and get discount up to 50%</h2></div>
            <form className="enter">
            <input type="text" className="email-letter" placeholder="Enter your email here"/>
            <button className="sign-in">SIGN IN</button>
            </form>
            <a href="#" className="newmember">I'm new member?</a>
            
        </div>
    )
}