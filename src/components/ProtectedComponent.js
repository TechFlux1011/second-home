// ProtectedComponent.js
import React from "react";
import { useAuth } from "../AuthContext"; // Adjust the path accordingly

const ProtectedComponent = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect or handle unauthorized access
    return <div>You are not authorized to access this page.</div>;
  }

  // Your protected component logic here

  return <div>Protected Component</div>;
};

export default ProtectedComponent;
