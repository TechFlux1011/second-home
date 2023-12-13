// src/components/ProductListings.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";

const DarkBackground = styled("div")({
  backgroundColor: "#121212", // Dark background color
  minHeight: "100vh", // Set the minimum height to fill the viewport
  padding: "16px",
});

const GreenNeonLight = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: "8px",
  border: "2px solid #00ff00",
  opacity: 0,
  transition: "opacity 0.3s",
  pointerEvents: "none", // Prevent the light from blocking interactions
});

const ProductListingCard = styled(Card)({
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 255, 0, 0.4)",
  },
  position: "relative", // Ensure proper positioning of the GreenNeonLight
  "&:hover $neonLight": {
    opacity: 1,
  },
});

const NeonLight = styled("div")({
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 255, 0, 0.1)",
  position: "absolute",
  borderRadius: "8px",
});

const ProductImage = styled(CardMedia)({
  flex: 1,
  width: "100%",
  objectFit: "cover",
  borderRadius: "8px",
});

const CardContentContainer = styled(CardContent)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  opacity: 0,
  transition: "opacity 0.3s",
  "&:hover": {
    opacity: 1,
  },
});

const Text = styled(Typography)({
  color: "#fff",
});

const generateRandomPrice = () => {
  return (Math.random() * (100 - 10) + 10).toFixed(2);
};

const ProductListings = () => {
  const [products, setProducts] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        const imagePromises = data.map((product) =>
          fetchStockImage(product.id)
        );
        return Promise.all(imagePromises);
      })
      .then((urls) => setImageUrls(urls))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const fetchStockImage = async (productId) => {
    try {
      const response = await axios.get(
        `https://source.unsplash.com/300x200/?product${productId}`
      );
      return response.config.url;
    } catch (error) {
      console.error("Error fetching stock image:", error);
      // Provide a fallback image URL in case of an error
      return "https://via.placeholder.com/150";
    }
  };

  return (
    <DarkBackground>
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <ProductListingCard>
                <ProductImage
                  component="img"
                  alt={`${product.title} Thumbnail`}
                  height="100%"
                  image={imageUrls[index]}
                />
                <NeonLight className="neonLight" />
                <CardContentContainer>
                  <Text variant="h6">{product.title}</Text>
                  <Text variant="body2">${generateRandomPrice()}</Text>
                </CardContentContainer>
              </ProductListingCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </DarkBackground>
  );
};

export default ProductListings;
