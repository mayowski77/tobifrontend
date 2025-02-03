import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Find Your Perfect Stay</h1>
        <p className="hero-subtitle">
          Discover luxury accommodations tailored to your needs.
        </p>
        <form className="search-form">
          {/* Location Dropdown */}
          <select className="search-input location-dropdown">
            <option value="">Select Location</option>
            <option value="ikoyi">Ikoyi</option>
            <option value="victoria-island">Victoria Island</option>
          </select>

          {/* Guests Dropdown */}
          <select className="search-input guests-select">
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4+ Guests</option>
          </select>

          {/* Search Button */}
          <button type="submit" className="search-button primary-button">
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;