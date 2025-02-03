import React from "react";
import "./FeaturedProperties.css";

const PropertyCard = ({ name, location, price, rating, imageUrl }) => {
  return (
    <div className="property-card">
      <img className="property-image" src={imageUrl} alt={name} loading="lazy" />
      <div className="property-details">
        <h3 className="property-title">{name}</h3>
        <p className="property-location">{location}</p>
        <p className="property-price">{price}</p>
        <div className="property-rating">{rating}</div>
      </div>
      <button className="view-details-button">View Details</button>
    </div>
  );
};

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      name: "Luxury Apartment in Ikoyi",
      location: "Ikoyi, Lagos",
      price: "$150",
      rating: "★ 4.7 (200 reviews)",
      imageUrl: "https://i.ibb.co/Y467Cvc2/room6.png"
    },
    {
      id: 2,
      name: "Penthouse in Victoria Island",
      location: "Victoria Island, Lagos",
      price: "$150",
      rating: "★ 4.7 (150 reviews)",
      imageUrl: "https://i.ibb.co/vvXy57h6/room4.png"
    },
    {
      id: 3,
      name: "Beach View Villa",
      location: "Lekki, Lagos",
      price: "$150",
      rating: "★ 4.8 (100 reviews)",
      imageUrl: "https://i.ibb.co/F46z2M9q/room5.png"
    },
    {
      id: 4,
      name: "Island Oasis Villa",
      location: "Victoria Island, Lagos",
      price: "$150",
      rating: "★ 4.6 (120 reviews)",
      imageUrl: "https://i.ibb.co/5XV69Tm6/room3.png"
    },
    {
      id: 5,
      name: "Parkview Estate",
      location: "Ikoyi, Lagos",
      price: "$150",
      rating: "★ 4.9 (80 reviews)",
      imageUrl: "https://i.ibb.co/MxdXJRt5/apt2.png"
    },
    {
      id: 6,
      name: "Lagoon View Manor",
      location: "Ikoyi, Lagos",
      price: "$150",
      rating: "★ 4.8 (150 reviews)",
      imageUrl: "https://i.ibb.co/8DnZMcWq/apartment1.png"
    }
  ];

  return (
    <section className="featured-properties">
      <h2 className="section-title">Featured Properties</h2>
      <div className="property-grid">
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;