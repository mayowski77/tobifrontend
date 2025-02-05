import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation <button class="citation-flag" data-index="3">
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo" aria-label="TobiFrontend Logo">
          <img
            src="https://i.ibb.co/kgb8ngMP/Logo.png" // Updated logo URL
            alt="TobiFrontend Logo"
            className="logo-image circular-logo"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/private-members">Private Members</Link>
          </li>
          <li>
            <Link to="/investor-portal">Investor Portal</Link>
          </li>
        </ul>

        {/* Authentication Buttons */}
        <div className="auth-buttons">
          <Link to="/sign-in">
            <button>Sign In</button>
          </Link>
          <Link to="/register">
            <button className="sign-up-button">Register</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;