import React, { useState } from "react";
import "./more.css";
import moreImg from "./more-image/Image.png";

export default function More() {
  const [showMoreInfo, showMore] = useState(false);

  const seeMoreClick = () => {
    showMore(!showMoreInfo);
  };

  return (
    <div className="more">
      <div className="More container">
        <img src={moreImg} alt="" />
        <div className="more-content">
          <h1>Creative bag only for you.</h1>
          <p>
            The Creative Bag Company, Wells, Somerset. <br />
            The Creative Bag Company We make <br />
            Sparkly Personalised
          </p>
          {showMoreInfo && (
            <span>
              Creative Bag is your one stop shop for all of your packaging
              needs. From bags to boxes to gift wrap and tissue, you are sure to
              find what you need.
            </span>
          )}
          <button onClick={seeMoreClick}>
            {showMoreInfo ? "Hide" : "See more"}
          </button>
        </div>
      </div>
    </div>
  );
}
