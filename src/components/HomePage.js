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
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2" fontWeight="bold" mb={1} color="#FFA07A">
          Second Home
        </Typography>
        <Typography variant="subtitle1" mb={3} color="#FFD700">
          The dating app for clothes ❤️
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" mb={3}>
        <Button variant="contained" color="primary" mr={2}>
          Sign In
        </Button>
        <Button variant="outlined" color="primary">
          Sign Up
        </Button>
      </Box>
      <Button variant="outlined" color="primary">
        My Account
      </Button>
      <ProductListings />
    </Box>
  );
};

export default HomePage;
