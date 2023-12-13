// src/components/ProductPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = ({ product }) => {
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product details from the backend (to be implemented later)
    // For now, let's use the passed product data
    setLoading(false);
  }, [product]);

  return (
    <div>
      {loading ? (
        <p>Loading product details...</p>
      ) : (
        <div>
          {product ? (
            <>
              <h2>{product.title}</h2>
              <img
                src={
                  product.profile?.thumbnail ||
                  "https://via.placeholder.com/150"
                }
                alt={`${product.title} Thumbnail`}
              />
              <p>{product.body}</p>
              {/* Add other product details */}
            </>
          ) : (
            <p>Product not found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
