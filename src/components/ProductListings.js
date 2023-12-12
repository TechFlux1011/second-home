// src/components/ProductListings.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        thumbnail: "earring-thumbnail.jpg",
      },
      // Add more products as needed
    ];
    setProducts(mockProducts);
  }, []);

  return (
    <div>
      <h2 className="product-listing-title">Product Listings</h2>
      <div className="product-tiles">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            style={{ textDecoration: "none" }}
          >
            <div className="product-tile">
              <img
                src={require(`../assets/${product.thumbnail}`).default}
                alt={`${product.name} Thumbnail`}
              />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductListings;
