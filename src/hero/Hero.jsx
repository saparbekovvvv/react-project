import React from "react";
import imgHero from "./hero-image/image.png";
import "./hero.css";

export default function Hero(props) {
  return (
    <div className="container">
      <div className="hero-content">
        <div className="Hero">
          <h3>{props.first}</h3>
          <h1>
            Look Stylish <br />
            Be <span>{props.second}</span>
          </h1>
          <p>
            Before starting this business you should have ideas <br />
            about the market and products to Compete with the <br />
            Existing Businesses.
          </p>
          <button>{props.third}</button>
        </div>
        <img src={imgHero} alt="" />
      </div>
    </div>
  );
}
