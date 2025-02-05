import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Quick Links Section */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <button className="footer-link">Home</button>
              </li>
              <li>
                <button className="footer-link">Properties</button>
              </li>
              <li>
                <button className="footer-link">Contact</button>
              </li>
              <li>
                <button className="footer-link">Terms & Conditions</button>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription Section */}
          <div className="footer-section newsletter-section">
            <h4>Subscribe to Our Newsletter</h4>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="newsletter-button">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TOBI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;