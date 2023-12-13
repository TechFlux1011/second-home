// src/components/ProductListings.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductListings = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const fetchStockImage = async () => {
    try {
      const response = await axios.get("https://source.unsplash.com/random");
      return response.config.url;
    } catch (error) {
      console.error("Error fetching stock image:", error);
      // Provide a fallback image URL in case of an error
      return "https://via.placeholder.com/150";
    }
  };

  return (
    <div>
      <h2 className="product-listing-title">Product Listings</h2>
      <div className="product-tiles">
        {products &&
          products.map(async (product) => {
            const stockImage = await fetchStockImage();

            return (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                style={{ textDecoration: "none" }}
              >
                <div className="product-tile">
                  <img
                    src={stockImage}
                    alt={`${product.title} Thumbnail`}
                    className="product-thumbnail"
                  />
                  <div className="product-info">
                    <h3>{product.title}</h3>
                    <p>{product.body}</p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ProductListings;
