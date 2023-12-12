// src/components/ProductPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from the backend (to be implemented later)
    // For now, let's mock some data
    const mockProduct = {
      id: productId,
      name: "Shoe",
      price: 49.99,
      description: "High-quality shoe description goes here.",
      sellerId: 1,
    };
    setProduct(mockProduct);
  }, [productId]);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <p>{product.description}</p>
          {/* Add product photo */}
          <p>Seller: {product.sellerId}</p>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductPage;
