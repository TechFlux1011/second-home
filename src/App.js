// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductListings from "./components/ProductListings";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-listings" element={<ProductListings />} />
        {/* ... other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
