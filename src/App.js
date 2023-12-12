// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductListings from "./components/ProductListings";
import ProductPage from "./components/ProductPage";
import "App.css";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to Second Home</h1>
        <Switch>
          <Route path="/product/:productId" component={ProductPage} />
          <Route path="/" component={ProductListings} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
