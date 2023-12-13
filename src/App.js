// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext"; // Update this import

import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedComponent from "./components/ProtectedComponent";

const App = () => {
  const { isAuthenticated } = useAuth(); // Update this line

  return (
    <AuthProvider>
      {" "}
      {/* Wrap your app with AuthProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {isAuthenticated && (
            <Route path="/protected" element={<ProtectedComponent />} />
          )}
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
