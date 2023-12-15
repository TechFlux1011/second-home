// App.js or your root component

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query"; // Import QueryClient and QueryClientProvider
import HomePage from "./components/HomePage";
import ProductListings from "./components/ProductListings";

const queryClient = new QueryClient(); // Create an instance of QueryClient

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productlistings" element={<ProductListings />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
