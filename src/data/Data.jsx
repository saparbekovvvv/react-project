import React, { useState } from "react";
import "./data.css";
import dataImg from "./data-img/image (8).png";

export default function Data() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    subscribe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      address: "",
      subscribe: false,
    });
  };

  return (
    <div className="Data">
      <div className="container">
        <div className="data-block">
          <img src={dataImg} alt="" />
          <div className="data-content">
            <h1>
              Lorem ipsum dolor sit amet <br />
              adipiscing elit.
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="name-email">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="address">
                <input
                  className="inp"
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
                <div className="btn">
                  <input
                    type="checkbox"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleInputChange}
                  />
                  <span>Lorem ipsum dolor sit amet.</span>
                  <button type="submit">Join now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
