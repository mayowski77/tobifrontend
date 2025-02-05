import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation <button class="citation-flag" data-index="3">
import "./FeaturedProperties.css";

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      image: "https://i.ibb.co/N2VRXb4Y/Anaconda-Cut-1-Bedroom-Apartment.png",
      title: "Luxury Studio Apartment",
      location: "Ikoyi",
      price: 250,
      type: "1-Bed Apartment",
    },
    {
      id: 2,
      image: "https://i.ibb.co/vvXy57h6/room4.png",
      title: "Modern Studio Apartment",
      location: "Victoria Island",
      price: 300,
      type: "1-Bed Apartment",
    },
    {
      id: 3,
      image: "https://i.ibb.co/F46z2M9q/room5.png",
      title: "Beachfront Studio Apartment",
      location: "Ikoyi",
      price: 350,
      type: "1-Bed Apartment",
    },
    {
      id: 4,
      image: "https://i.ibb.co/5XV69Tm6/room3.png",
      title: "Cozy Studio Apartment",
      location: "Victoria Island",
      price: 200,
      type: "1-Bed Apartment",
    },
    {
      id: 5,
      image: "https://i.ibb.co/MxdXJRt5/apt2.png",
      title: "Spacious Studio Apartment",
      location: "Ikoyi",
      price: 320,
      type: "1-Bed Apartment",
    },
    {
      id: 6,
      image: "https://i.ibb.co/8DnZMcWq/apartment1.png",
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
            <Link to={`/property/${property.id}`}>
              <button className="view-details-button">View Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProperties;