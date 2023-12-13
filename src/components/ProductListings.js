import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import shoeThumbnail from "../assets/shoe-thumbnail.jpg";
import earringThumbnail from "../assets/earring-thumbnail.png";
import Typography from "@mui/material/Typography";

const ProductListings = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const mockProducts = [
      {
        id: 1,
        name: "Shoe",
        price: 49.99,
        sellerId: 1,
        thumbnail: shoeThumbnail,
      },
      {
        id: 2,
        name: "Earring",
        price: 19.99,
        sellerId: 2,
        thumbnail: earringThumbnail,
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
              <img src={product.thumbnail} alt={`${product.name} Thumbnail`} />
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
