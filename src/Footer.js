import React from "react";
import "./App.css";
import mastercard from "./images/mastercard.png"
import rupay from "./images/rupay.png"
import visa from "./images/visa.png"
import americanexpress from "./images/americanexpress.png"
export default function Footer() {
    return (
        <footer>
            <div className="Parts">
            <div className="Part1">
                <h3>eatiz</h3>
                <div className="Part1-text">The content of this site is copyright-protected and is the property of eatiz.</div>
                <div>
                <i class="logo-card fa-brands fa-square-facebook fa-2xl" style={{color: "#808080"}}></i>
                <i class="logo-card fa-brands fa-square-instagram fa-2xl" style={{color: "#808080"}}></i>
                <i class="logo-card fa-brands fa-square-twitter fa-2xl" style={{color: "#808080"}}></i>
                <i class="logo-card fa-brands fa-linkedin fa-2xl" style={{color: "#808080"}}></i>
            </div>
            </div>
            <div className="Part2">
                <div className="footer-item">
                    <h6>Support</h6>
                    <p>Account</p>
                    <p>Support Center</p>
                    <p>Feedback</p>
                    <p>Accebility</p>
                </div>
                <div className="footer-item">
                    <h6>Our Menu</h6>
                    <p>Special</p>
                    <p>Popular</p>
                    <p>Categories</p>
                </div>
                <div className="footer-item">
                    <h6>Useful Links</h6>
                    <p>Payment & Tax</p>
                    <p>Trems of Service</p>
                    <p>Privacy Policy</p>
                    <p>About Us</p>
                </div>
                <div className="footer-item">
                    <h6>Get in touch</h6>
                    <p>supportredhair@gmail.com</p>
                    <p>+91 88888 99999</p>
                </div>
            </div>
            </div>
            <div className="Part3">
            <span> &copy; 2023 Redhair. All rightd reserved. </span>
            <div className="atmCard">
            <img className= 'atm-card' src={rupay}/>
            <img className= 'atm-card' src={mastercard}/>
            <img className= 'atm-card' src={visa} />
            <img className= 'atm-card' src={americanexpress} />
            </div>
            </div>
            
        </footer>
    )
}