import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Slider from "./Slider";
export default function Navbar() {
    return (
        <nav>
            <a href="index.html"><span className="branding">eatiz</span></a>
            <div className="nav-items">
            <a href="#"><span className="nav-item  "> Menu</span></a>
            <a href="#"><span className="nav-item ">About</span></a>
            <a href="#"><span className="nav-item ">Reviews</span></a>
            <a href="#"><span className="nav-item ">Our Cities</span></a>
            </div>
            
            <div className="search-form pops">
                <i class="icon fa-solid fa-magnifying-glass  fa-lg" style={{ color: "#000000" }}></i>
                <input type="text" className="search" placeholder="Search"></input>
            </div>
            <button className="butt pops"><i class="fa-solid fa-bag-shopping fa-xl" style={{ color: "#ffffff" }}></i></button>
        </nav>
    )
}
