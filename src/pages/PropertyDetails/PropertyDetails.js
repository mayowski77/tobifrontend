import React from "react";
import { useParams, Link } from "react-router-dom";
import "./PropertyDetails.css";

const PropertyDetails = () => {
  const { id } = useParams();

  // Static list of all 6 properties (matches FeaturedProperties)
  const properties = [
    {
      id: 1,
      image: "https://i.ibb.co/N2VRXb4Y/Anaconda-Cut-1-Bedroom-Apartment.png",
      title: "Luxury Studio Apartment",
      location: "Ikoyi",
      price: 250,
      type: "1-Bed Apartment",
      amenities: ["Wi-Fi", "Pool"],
    },
    {
      id: 2,
      image: "https://i.ibb.co/vvXy57h6/room4.png",
      title: "Modern Studio Apartment",
      location: "Victoria Island",
      price: 300,
      type: "1-Bed Apartment",
      amenities: ["Private Beach", "Parking"],
    },
    {
      id: 3,
      image: "https://i.ibb.co/F46z2M9q/room5.png",
      title: "Beachfront Studio Apartment",
      location: "Ikoyi",
      price: 350,
      type: "1-Bed Apartment",
      amenities: ["Wi-Fi", "Gym"],
    },
    {
      id: 4,
      image: "https://i.ibb.co/5XV69Tm6/room3.png",
      title: "Cozy Studio Apartment",
      location: "Victoria Island",
      price: 200,
      type: "1-Bed Apartment",
      amenities: ["Parking", "Pet-Friendly"],
    },
    {
      id: 5,
      image: "https://i.ibb.co/MxdXJRt5/apt2.png",
      title: "Spacious Studio Apartment",
      location: "Ikoyi",
      price: 320,
      type: "1-Bed Apartment",
      amenities: ["Wi-Fi", "Spa"],
    },
    {
      id: 6,
      image: "https://i.ibb.co/8DnZMcWq/apartment1.png",
      title: "Elegant Studio Apartment",
      location: "Victoria Island",
      price: 340,
      type: "1-Bed Apartment",
      amenities: ["Private Pool", "Parking"],
    },
  ];

  // Find the property with the matching ID
  const property = properties.find((p) => p.id === Number(id));

  // Handle case where property is not found
  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="property-details-container">
      {/* Header Section */}
      <header className="property-header">
        <div className="header-content">
          {/* Logo linking to Home Screen */}
          <Link to="/" className="logo">
            <img
              src="https://i.ibb.co/kgb8ngMP/Logo.png"
              alt="TOBI Logo"
              className="logo-image"
            />
          </Link>
          <div className="icons">
            {/* Heart Icon */}
            <button
              className="icon-heart"
              onClick={() => alert("Heart clicked")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
            {/* User Icon */}
            <button
              className="icon-user"
              onClick={() => alert("User clicked")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="property-content">
        {/* Image Gallery */}
        <div className="image-gallery">
          {/* Main Image */}
          <img src={property.image} alt={property.title} className="main-image" />

          {/* Thumbnails */}
          <div className="thumbnails">
            {Array(4).fill(null).map((_, index) => (
              <button
                key={`thumbnail-${property.id}-${index}`}
                className="thumbnail"
              >
                <img
                  src={`https://via.placeholder.com/200x150?text=Thumbnail+${index + 1}`}
                  alt={`Thumbnail ${index + 1}`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Property Details */}
        <div className="property-info">
          <h1 className="property-title">{property.title}</h1>
          <div className="property-meta">
            <p className="property-location">{property.location}</p>
          </div>

          {/* Amenities Section */}
          <div className="amenities-section">
            <h2 className="section-title">Key Amenities</h2>
            <div className="amenities-list">
              {property.amenities.map((amenity, index) => (
                <div key={`amenity-${property.id}-${index}`} className="amenity-item">
                  {amenity}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="booking-section">
          <div className="price-display">
            <span className="price">${property.price}</span>
            <span className="per-night">per night</span>
          </div>
          <div className="date-selection">
            <label htmlFor="check-in">Check-in:</label>
            <input type="date" id="check-in" />
            <label htmlFor="check-out">Check-out:</label>
            <input type="date" id="check-out" />
          </div>
          <button className="book-now-button">Book Now</button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="property-footer">
        <div className="footer-links">
          <ul>
            <li>
              <button
                className="footer-link"
                onClick={() => alert("FAQs clicked")}
              >
                FAQs
              </button>
            </li>
            <li>
              <button
                className="footer-link"
                onClick={() => alert("Contact clicked")}
              >
                Contact
              </button>
            </li>
            <li>
              <button
                className="footer-link"
                onClick={() => alert("Privacy Policy clicked")}
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                className="footer-link"
                onClick={() => alert("Terms & Conditions clicked")}
              >
                Terms & Conditions
              </button>
            </li>
          </ul>
        </div>
        <div className="social-media-icons">
          <button
            className="social-media-icon x-twitter"
            onClick={() => window.open("https://twitter.com", "_blank")}
          >
            𝕏
          </button>
          <button
            className="social-media-icon facebook"
            onClick={() => window.open("https://facebook.com", "_blank")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#4267b2"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default PropertyDetails;