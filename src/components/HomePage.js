// src/components/HomePage.js

import React from "react";
import { Button } from "@mui/material";
import { useAuth } from "../AuthContext";
import { useLoginMutation, useLogoutMutation } from "../services/AuthService";

const HomePage = () => {
  const { user } = useAuth();
  const loginMutation = useLoginMutation();
  const logoutMutation = useLogoutMutation();

  const handleLogin = async () => {
    try {
      const credentials = {
        username: "example_user",
        password: "example_password",
      };
      await loginMutation.mutateAsync(credentials);
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
    </div>
  );
};

export default HomePage;
