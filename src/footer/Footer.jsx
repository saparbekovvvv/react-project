import React from "react";
import "./footer.css";
import logo from "./footer-img/logo.png";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="text-section">
            <img src={logo} alt="Company Logo" />
            <p>
              Lorem ipsum dolor sit amet <br />
              consectetur adipiscing <br />
              sed do eiusmod.
            </p>
          </div>
          <div className="category-section">
            <h1>Special Categories</h1>
            <span>Water Resistant</span>
            <span>Charging System</span>
            <span>Artificial Leather</span>
          </div>
          <div className="contact-section">
            <h1>Contact Us</h1>
            <span>(808) 555-0111</span>
            <span>michelle.rivera@example.com</span>
            <span>
              <a
                href="http://www.codehow.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://www.codehow.com
              </a>
            </span>
          </div>
          <div className="newsletter-section">
            <h1>Newsletter</h1>
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
