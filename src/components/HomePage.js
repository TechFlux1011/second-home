// src/components/HomePage.js

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useAuth } from "../AuthContext";
import { useLoginMutation, useLogoutMutation } from "../services/AuthService";

const HomePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const loginMutation = useLoginMutation();
  const logoutMutation = useLogoutMutation();

  const handleLogin = async () => {
    try {
      const credentials = {
        username: "example_user",
        password: "example_password",
      };
      await loginMutation.mutateAsync(credentials);

      // Redirect to product listings page after successful login
      navigate("/productlistings");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.username}!</p>
          <Button variant="outlined" color="primary" onClick={handleLogout}>
            Log Out
          </Button>
        </>
      ) : (
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Log In
        </Button>
      )}
      <Link to="/productlistings">Go to Product Listings</Link>
    </div>
  );
};

export default HomePage;
