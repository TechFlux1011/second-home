import React from "react";
import { Typography } from "@mui/material"; // Import Typography or other components

import ProductListings from "./ProductListings";

const HomePage = () => {
  return (
    <div>
      <Typography variant="h2" className="home-page-title">
        Welcome to Second Home
      </Typography>
      <ProductListings />
    </div>
  );
};

export default HomePage;
