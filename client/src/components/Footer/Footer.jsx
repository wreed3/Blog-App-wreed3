import React from "react";
import "../Footer/Footer.css";
import "../Navbar/Navbar.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer-bar">
        <div className="footer-content">
          <div>&copy; 2022 Alex and Will (ft. Mason), INC. All rights reserved</div>
        </div>
        <div className="links">
          <div className="nav-link">
            <a href="/" className="nav-link1">
              Home
            </a>
            <a href="/" className="nav-link2">
              About
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
