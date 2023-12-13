// ProductListings.js
import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductDetail from "./ProductDetail";

const ProductListings = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h2 className="product-listing-title">Product Listings</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-tiles">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              style={{ textDecoration: "none" }}
            >
              <div className="product-tile" key={product.id}>
                <img
                  src={product.image || "https://via.placeholder.com/150"}
                  alt={`${product.title} Thumbnail`}
                  className="product-thumbnail"
                />
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <p>{product.body}</p>
                  <div className="profile-info">
                    {product.profile && product.profile.thumbnail ? (
                      <>
                        <img
                          src={product.profile.thumbnail}
                          alt={`${product.profile.name} Thumbnail`}
                          className="profile-thumbnail"
                        />
                        <p>{product.profile.name}</p>
                        <p>{product.profile.email}</p>
                      </>
                    ) : (
                      <p>No profile data available</p>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Render the ProductDetail component based on the route */}
      <ProductDetail />
    </div>
  );
};

export default ProductListings;
