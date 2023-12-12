// src/components/ProductListings.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const ProductListings = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend (to be implemented later)
    // For now, let's mock some data
    const mockProducts = [
      {
        id: 1,
        name: "Shoe",
        price: 49.99,
        sellerId: 1,
        thumbnail: "shoe-thumbnail.jpg",
      },
      {
        id: 2,
        name: "Earring",
        price: 19.99,
        sellerId: 2,
        thumbnail: "earring-thumbnail.png",
      },
      // Add more products as needed
    ];
    setProducts(mockProducts);
  }, []);

  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        Product Listings
      </Typography>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            style={{ textDecoration: "none" }}
          >
            <Card style={{ maxWidth: "250px", margin: "8px" }}>
              <CardMedia
                component="img"
                alt={`${product.name} Thumbnail`}
                height="140"
                image={require(`../assets/${product.thumbnail}`).default}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${product.price}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductListings;
