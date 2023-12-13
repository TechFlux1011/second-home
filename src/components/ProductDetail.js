// ProductDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { useAuth } from "../AuthContext";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    // Fetch the product details based on the productId
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${productId}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const handleAddToCart = () => {
    // Implement the logic to add the product to the cart
    console.log(`Product ${productId} added to the cart!`);
  };

  return (
    <div>
      <h2>Product Details</h2>
      {product ? (
        <div>
          <h3>{product.title}</h3>
          <p>{product.body}</p>
          {user && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          )}
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetail;
