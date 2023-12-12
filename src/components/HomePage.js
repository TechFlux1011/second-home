// src/components/HomePage.js
import React from "react";
import { Typography, Container } from "@mui/material";
import ProductListings from "./ProductListings";

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Second Home
      </Typography>
      <ProductListings />
    </Container>
  );
};

export default HomePage;
