// src/components/HomePage.js

import React from "react";
import { Button, Avatar, Typography, Box } from "@mui/material";
import { useAuth } from "../AuthContext";
import { useLoginMutation, useLogoutMutation } from "../services/AuthService";

const stockPhotoUrl = "https://example.com/stock-photo.jpg"; // Replace with your stock photo URL

const HomePage = () => {
  const { user } = useAuth();
  const loginMutation = useLoginMutation();
  const logoutMutation = useLogoutMutation();

  const handleLogin = async () => {
    try {
      // Assuming your authentication service provides user data in this format
      const googleUserData = {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        // Add more user data as needed
      };

      // Call a service to create or update the user profile with Google data
      await createUserProfile(googleUserData);

      // Define credentials or use it as needed in your authentication logic
      const credentials = {
        // Define your credentials properties here
      };

      // Continue with your authentication logic
      await loginMutation.mutateAsync(credentials);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleGuestLogin = async () => {
    try {
      // Logic for guest login (if applicable)
    } catch (error) {
      console.error("Guest login error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const createUserProfile = async (userData) => {
    // Call a service to create or update the user profile with Google data
    // Example: await createOrUpdateUserProfileService(userData);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: `url(${stockPhotoUrl}) center/cover no-repeat fixed`,
      }}
    >
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
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              sx={{ borderRadius: 20, marginBottom: 2 }}
            >
              Log In with Google
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleGuestLogin}
              sx={{ borderRadius: 20 }}
            >
              Guest Login
            </Button>
          </>
        )}
      </div>
    </Box>
  );
};

export default HomePage;
