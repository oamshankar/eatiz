import React from "react"
import './App.css';
import Navbar from "./Navbar";
import Landing from "./Landing";
import Attribute from "./Attribute";
import Explore from "./Explore";
import Menu from "./Menu";
import data1 from "./data1";
import data2 from "./data2";
import data3 from "./data3";
import Slider from "./Slider";
import Template from "./Template";
import Reviews from "./Reviews";
import CardReview from "./CardReview";
import dataReview from "./dataReview";
import dataReview2 from "./dataReview2";
import Cities from "./Cities";
import dataCity from "./dataCity";
import Ourcities from "./Ourcities";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import Download from "./Download";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  /*for slider*/
  const slide1 = data1.map(item1 => {
    return (
      < Menu
        key={item1.id}
        item1={item1}
      />
    )
  })
  const slide2 = data2.map(item1 => {
    return (
      < Menu
        key={item1.id}
        item1={item1}
      />
    )
  })
  const slide3 = data3.map(item1 => {
    return (
      < Menu
        key={item1.id}
        item1={item1}
      />
    )
  })
  /*for review */
  const page1 = dataReview.map(item => {
    return (
      <CardReview
        key={item.id}
        item={item}
      />
    )
  })
  const page2 = dataReview2.map(item => {
    return (
      <CardReview
        key={item.id}
        item={item}
      />
    )
  })
  /* For City */
  const cities = dataCity.map(item => {
    return (
      <Cities
        id={item.id}
        item={item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Landing />
      <Attribute />
      <Explore />
      <Slider
        item2={slide1}
        item3={slide2}
        item4={slide3}
      />
      <Template/>
      <Reviews
        item2={page1}
        item3={page2}
      />
      <Download/>
      <Ourcities
        item={cities}
      />
      <Newsletter />
      <Footer />
    </div>
  )
} 