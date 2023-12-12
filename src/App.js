// src/App.js
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom"; // Replace 'Switch' with 'Routes'
import HomePage from "./components/HomePage"; // Import HomePage
import ProductPage from "./components/ProductPage"; // Import ProductPage
import "./App.css";
// import images from "url:./assets/earring-thumbnail";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
