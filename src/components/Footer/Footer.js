import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Grid Layout */}
        <div className="footer-grid">
          {/* Quick Links Section */}
          <div className="footer-section quick-links">
            <h4 className="footer-heading">Quick Links</h4>
            <div>
              <button className="footer-link">About Us</button>
              <button className="footer-link">Contact</button>
              <button className="footer-link">FAQs</button>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="footer-section social-media">
            <h4 className="footer-heading">Social Media</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="footer-section contact-info">
            <h4 className="footer-heading">Contact</h4>
            <p>
              <a href="mailto:contact@tobi.com" className="footer-link">
                contact@tobi.com
              </a>
            </p>
            <p>+234 123 456 7890</p>
          </div>

          {/* Newsletter Section */}
          <div className="footer-section newsletter">
            <h4 className="footer-heading">Newsletter</h4>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright">
          <p>© 2025 TOBI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;