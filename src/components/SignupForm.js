// src/components/SignupForm.js

import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useSignupMutation } from "../services/SignupService";

const SignupForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const signupMutation = useSignupMutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signupMutation.mutateAsync(formData);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Sign Up
      </Button>
    </form>
  );
};

export default SignupForm;
