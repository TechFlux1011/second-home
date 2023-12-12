// src/components/HomePage.js
import React from "react";
import ProductListings from "./ProductListings";

const HomePage = () => {
  return (
    <div>
      <h2 className="home-page-title">Welcome to Second Home</h2>
      <ProductListings />
    </div>
  );
};

export default HomePage;
