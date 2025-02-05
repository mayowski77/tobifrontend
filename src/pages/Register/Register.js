import React, { useState } from "react";
import { FaGoogle, FaApple, FaFacebook, FaXTwitter } from "react-icons/fa6"; // Updated imports <button class="citation-flag" data-index="2">
import "./Register.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="register-container">
      {/* Main Register Form */}
      <div className="register-card">
        <h2 className="form-title">Register</h2>
        <form className="register-form">
          {/* Full Name Field */}
          <input
            type="text"
            placeholder="Enter your full name"
            className="form-input"
            required
          />

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

          {/* Confirm Password Field */}
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm your password"
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

          {/* Sign-Up Button */}
          <button type="submit" className="register-button">
            Register
          </button>
        </form>

        {/* Social Login */}
        <div className="social-login">
          <p>Or register with:</p>
          <div className="social-icons">
            <button className="social-icon google">
              <FaGoogle /> Google
            </button>
            <button className="social-icon apple">
              <FaApple /> Apple
            </button>
            <button className="social-icon facebook">
              <FaFacebook /> Facebook
            </button>
          </div>
        </div>

        {/* Sign-In Link */}
        <p className="sign-in-link">
          Already have an account?{" "}
          <button className="login-link">Sign In here</button>
        </p>
      </div>

      {/* Register Footer */}
      <footer className="register-footer">
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

export default Register;