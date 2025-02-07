import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaXTwitter } from "react-icons/fa6"; // Updated imports
import "./SignIn.css";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Function to handle navigation
  const handleNavigation = (url) => {
    window.location.href = url; // Redirect to the specified URL
  };

  return (
    <div className="sign-in-container">
      {/* Main Sign-In Form */}
      <div className="sign-in-card">
        <h2 className="form-title">Sign In</h2>
        <form className="sign-in-form">
          {/* Email Field */}
          <input
            type="email"
            placeholder="Enter your email"
            className="form-input"
            required
          />
          {/* Password Field */}
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="form-input"
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {/* Sign-In Button */}
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
        {/* Social Login */}
        <div className="social-login">
          <p>Or sign in with:</p>
          <div className="social-icons">
            <button className="social-icon google">
              <FaGoogle /> Google
            </button>
            <button className="social-icon facebook">
              <FaFacebook /> Facebook
            </button>
          </div>
        </div>
        {/* Register Link */}
        <p className="register-link">
          Don't have an account?{" "}
          <button
            className="login-link"
            aria-label="Register for a new account"
            onClick={() => handleNavigation("/register")}
          >
            Register here
          </button>
        </p>
      </div>
      {/* Sign-In Footer */}
      <footer className="sign-in-footer">
        <div className="footer-links">
          <ul>
            <li>
              <button
                className="footer-link"
                aria-label="Frequently Asked Questions"
                onClick={() => handleNavigation("/faqs")}
              >
                FAQs
              </button>
            </li>
            <li>
              <button
                className="footer-link"
                aria-label="Contact Us"
                onClick={() => handleNavigation("/contact")}
              >
                Contact
              </button>
            </li>
            <li>
              <button
                className="footer-link"
                aria-label="Privacy Policy"
                onClick={() => handleNavigation("/privacy-policy")}
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                className="footer-link"
                aria-label="Terms and Conditions"
                onClick={() => handleNavigation("/terms")}
              >
                Terms & Conditions
              </button>
            </li>
          </ul>
        </div>
        <div className="social-media-icons">
          <button
            className="social-media-icon x-twitter"
            aria-label="Follow us on X (formerly Twitter)"
            onClick={() => window.open("https://twitter.com", "_blank")}
          >
            <FaXTwitter /> {/* Updated Twitter icon */}
          </button>
          <button
            className="social-media-icon facebook"
            aria-label="Follow us on Facebook"
            onClick={() => window.open("https://facebook.com", "_blank")}
          >
            <FaFacebook />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default SignIn;