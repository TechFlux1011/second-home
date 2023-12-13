import React from "react";
import { Typography, Button, Box } from "@mui/material"; // Import Typography, Button, and other components

import ProductListings from "./ProductListings";

const HomePage = () => {
  return (
    <Box
      textAlign="center"
      color="#fff"
      bgcolor="#121212"
      minHeight="100vh"
      p={4}
    >
      <Typography
        variant="h2"
        className="home-page-title"
        fontWeight="bold"
        mb={3}
      >
        Welcome to Second Home
      </Typography>
      <Button variant="contained" color="primary" mr={2}>
        Sign In
      </Button>
      <Button variant="outlined" color="primary" mr={2}>
        Sign Up
      </Button>
      <Button variant="outlined" color="primary">
        My Account
      </Button>
      <ProductListings />
    </Box>
  );
};

export default HomePage;
