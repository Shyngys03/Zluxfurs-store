import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2 className="footer-logo">Zluxfurs</h2>
        <p className="footer-description">
          Zluxfurs: Where Every Piece Tells a Story. Crafted for Your Unique
          Style, Powered by Zluxfurs's Engagement Design Framework.
        </p>
      </div>
      <div className="footer-right">
        <ul className="footer-links">
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#career">Career</a>
          </li>
          <li>
            <a href="#privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="#terms">Terms Of Services</a>
          </li>
          <li>
            <a href="#gdpr">GDPR</a>
          </li>
          <li>
            <a href="#faqs">FAQs</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#capabilities">Capabilities</a>
          </li>
          <li>
            <a href="#resources">Resources</a>
          </li>
          <li>
            <a href="#partnership">Partnership</a>
          </li>
          <li>
            <a href="#integration">Integration</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
