import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./FeaturedProperties.css";

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      image: "https://i.postimg.cc/gkztrPcZ/room10.png",
      title: "Luxury Studio Apartment",
      location: "Ikoyi",
      price: 250,
      type: "1-Bed Apartment",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/jqQksjTT/room11.png",
      title: "Modern Studio Apartment",
      location: "Victoria Island",
      price: 300,
      type: "1-Bed Apartment",
    },
    {
      id: 3,
      image: "https://i.postimg.cc/RVgsHbqb/room8.png",
      title: "Beachfront Studio Apartment",
      location: "Ikoyi",
      price: 350,
      type: "1-Bed Apartment",
    },
    {
      id: 4,
      image: "https://i.postimg.cc/9Qzxtt7X/room9.png",
      title: "Cozy Studio Apartment",
      location: "Victoria Island",
      price: 200,
      type: "1-Bed Apartment",
    },
    {
      id: 5,
      image: "https://i.postimg.cc/rmZvft3k/room7.png",
      title: "Spacious Studio Apartment",
      location: "Ikoyi",
      price: 320,
      type: "1-Bed Apartment",
    },
    {
      id: 6,
      image: "https://i.postimg.cc/sXgkPJnm/room5.png",
      title: "Elegant Studio Apartment",
      location: "Victoria Island",
      price: 340,
      type: "1-Bed Apartment",
    },
  ];

  return (
    <div className="property-grid">
      {properties.map((property) => (
        <div key={property.id} className="property-card">
          {/* Property Image */}
          <div className="property-image">
            <img src={property.image} alt={property.title} />
          </div>
          {/* Property Details */}
          <div className="property-details">
            <h3 className="property-title">{property.title}</h3>
            <p className="property-location">{property.location}</p>
            <p className="property-price">${property.price}/night</p>
            <p className="property-type">{property.type}</p>
            {/* Use a button styled as a link */}
            <Link to={`/property/${property.id}`} aria-label={`View details for ${property.title}`}>
              <button className="view-details-button">View Details</button>
            </Link>
          </div>
        </div>
      ))}
      {/* Empty placeholders for missing grid items */}
      {[...Array(3)].map((_, index) => (
        <div key={`placeholder-${index}`} className="property-card placeholder"></div>
      ))}
    </div>
  );
};

export default FeaturedProperties;