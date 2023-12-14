// src/components/ProductPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";

const ProductPageCard = styled(Card)({
  maxWidth: 600,
  margin: "auto",
  marginTop: 32,
});

const ProductImage = styled(CardMedia)({
  height: 300,
  objectFit: "cover",
});

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${productId}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setProduct(response.data);
        setPrice(parseFloat(response.data.price));
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, [productId]);

  return (
    <div>
      {product ? (
        <ProductPageCard>
          <ProductImage
            component="img"
            alt={`${product.title} Photo`}
            height="100%"
            image={`https://source.unsplash.com/600x300/?product${productId}`}
          />
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="h6" color="primary" gutterBottom>
              ${price.toFixed(2)}
            </Typography>
            <Typography variant="body1">{product.body}</Typography>
          </CardContent>
        </ProductPageCard>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductPage;
