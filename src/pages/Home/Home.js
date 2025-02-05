import React from "react";
import Hero from "../../components/Hero/Hero";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import Footer from "../../components/Footer/Footer"; // Import the Footer component

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Properties Section */}
      <FeaturedProperties />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;