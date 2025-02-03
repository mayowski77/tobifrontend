import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <a href="/" className="logo" aria-label="TobiFrontend Logo">
          <img
            src="https://i.ibb.co/kgb8ngMP/Logo.png" // Updated logo URL <button class="citation-flag" data-index="1">
            alt="TobiFrontend Logo"
            className="logo-image circular-logo"
          />
        </a>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/private-members">Private Members</a>
          </li>
          <li>
            <a href="/investor-portal">Investor Portal</a>
          </li>
        </ul>

        {/* Authentication Buttons */}
        <div className="auth-buttons">
          <button>Sign In</button>
          <button className="sign-up-button">Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;