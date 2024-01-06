import React, { useState } from "react";
import "./slider.css";
import bagOne from "./bags-slider/images.jpeg";
import bagTwo from "./bags-slider/images (1).jpeg";
import bagThree from "./bags-slider/images (2).jpeg";
import bagFour from "./bags-slider/images (3).jpeg";
import bag1 from "./bags-slider/image.png";
import bag2 from "./bags-slider/Rectangle 45.png";
import bag3 from "./bags-slider/laptop-backpack-for-men-womenschool-backpacks-for-college-travel-backpack-with-usb-port-1graypouch-ch17aysuauu-removebg 1.png";
import bag4 from "./bags-slider/product-image-826191689_540x-removebg 1.png";
import first from "./bags-slider/first.jpg";
import second from "./bags-slider/second.webp";
import third from "./bags-slider/3.jpeg";
import fourth from "./bags-slider/fourth.webp";
import m1 from "./bags-slider/m1.webp";
import m2 from "./bags-slider/m2.jpg";
import m3 from "./bags-slider/m3.png";
import m4 from "./bags-slider/m4.jpeg";

const Pagination = ({ currentPage, onPageChange }) => {
  const labels = [
    "water resistant",
    "charging system",
    "artificial leather",
    "modern clothes",
  ];

  return (
    <div className="pagination">
      {labels.map((label, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={currentPage === index + 1 ? "active" : ""}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default function Slider() {
  const images = [
    bagOne,
    bagTwo,
    bagThree,
    bagFour,
    bag1,
    bag2,
    bag3,
    bag4,
    first,
    second,
    third,
    fourth,
    m1,
    m2,
    m3,
    m4,
  ];

  const itemsPerPage = 4;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(images.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div id="Slider">
      <div className="container">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        <div className="slider"></div>
        <div className="bags-slider">
          {currentItems.map((image, index) => (
            <img key={index} src={image} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}
