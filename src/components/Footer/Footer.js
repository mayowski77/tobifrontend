import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Quick Links Section */}
          <div className="footer-section">
  <h4>Useful Links</h4>
  <ul className="footer-links">
    <li>
      <a href="/about" className="footer-link">About Us</a>
    </li>
    <li>
      <a href="/faq" className="footer-link">FAQs</a>
    </li>
    <li>
      <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
    </li>
    <li>
      <a href="/contact-us" className="footer-link">Contact Us</a>
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
                aria-label="Subscribe to our newsletter"
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