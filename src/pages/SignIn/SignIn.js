import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaXTwitter } from "react-icons/fa6"; // Updated imports
import "./SignIn.css";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

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
          <button className="login-link">Register here</button>
        </p>
      </div>
      {/* Sign-In Footer */}
      <footer className="sign-in-footer">
        <div className="footer-links">
          <ul>
            <li>
              <button className="footer-link">FAQs</button>
            </li>
            <li>
              <button className="footer-link">Contact</button>
            </li>
            <li>
              <button className="footer-link">Privacy Policy</button>
            </li>
            <li>
              <button className="footer-link">Terms & Conditions</button>
            </li>
          </ul>
        </div>
        <div className="social-media-icons">
          <button className="social-media-icon x-twitter">
            <FaXTwitter /> {/* Updated Twitter icon */}
          </button>
          <button className="social-media-icon facebook">
            <FaFacebook />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default SignIn;