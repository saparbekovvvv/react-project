import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <a className="logo" href="#">
        Bag
      </a>
      <div className="links">
        <a href="home">home</a>
        <a href="feature">feature</a>
        <a href="about">about</a>
        <a href="product">product</a>
        <button>shop now</button>
      </div>
    </div>
  );
}
