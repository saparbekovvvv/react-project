import React from "react";
import { GoArrowRight } from "react-icons/go";

import "./product.css";
import productOne from "./img-product/image.png";
import productTwo from "./img-product/image (1).png";
import productThree from "./img-product/image (2).png";
import productFour from "./img-product/image (3).png";
import productFive from "./img-product/image (4).png";
import productSix from "./img-product/image (5).png";
import productSeven from "./img-product/image (6).png";
import productEight from "./img-product/image (7).png";

export default function Product() {
  const productImages = [
    productOne,
    productTwo,
    productThree,
    productFour,
    productFive,
    productSix,
    productSeven,
    productEight,
  ];

  const blockColors = [
    "#FFE1E8",
    "#FFE1E8",
    "#F9DCFF",
    "#FFDEE7",
    "#ECF1FF",
    "#FADADE",
    "#D9E6FE",
    "#EBF4BF",
  ];

  return (
    <div className="product">
      <div className="Product container">
        <h1>Our Available Products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <br />
          eiusmod tempor incididunt ut labore et dolore.
        </p>
        <div className="product-content">
          {blockColors.map((color, index) => (
            <div
              key={index}
              className="color-block"
              style={{ backgroundColor: color }}
            >
              <img src={productImages[index]} alt={`Product ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="see-more-button">
          See more{" "}
          <span>
            <GoArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
}
