// src/components/HomePage.js

import React from "react";
import { Button, Avatar, Typography } from "@mui/material";
import { useAuth } from "../AuthContext";
import { useLoginMutation, useLogoutMutation } from "../services/AuthService";

const HomePage = () => {
  const { user } = useAuth();
  const loginMutation = useLoginMutation();
  const logoutMutation = useLogoutMutation();

  const handleLogin = async () => {
    try {
      const credentials = {
        // Your login logic here
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
          <Avatar
            alt="User Avatar"
            src={user.photoURL}
            sx={{ width: 60, height: 60, marginRight: 2 }}
          />
          <Typography variant="h6" component="div" sx={{ marginRight: 2 }}>
            Welcome, {user.displayName}!
          </Typography>
          <Button variant="outlined" color="primary" onClick={handleLogout}>
            Log Out
          </Button>
        </>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          sx={{ borderRadius: 20 }}
        >
          Log In with Google
        </Button>
      )}
    </div>
  );
};

export default HomePage;
