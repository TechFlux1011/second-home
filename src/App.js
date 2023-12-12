// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/product/:productId" component={ProductPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
