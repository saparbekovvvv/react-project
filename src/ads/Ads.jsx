import React from "react";
import "./ads.css";
import addOne from "./ads-logo/Company logo.png";
import addTwo from "./ads-logo/Company logo (1).png";
import addThree from "./ads-logo/Company logo (2).png";
import addFour from "./ads-logo/Company logo (3).png";

export default function Ads() {
  return (
    <div className="Ads">
      <div className="container">
        <div className="ads-content">
          <img src={addOne} alt="" />
          <img src={addTwo} alt="" />
          <img src={addThree} alt="" />
          <img src={addFour} alt="" />
        </div>
      </div>
    </div>
  );
}
