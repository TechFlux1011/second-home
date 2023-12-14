// src/services/SignupService.js

import { useMutation, useQueryClient } from "react-query";

const signup = async (userData) => {
  // Simulate user registration (replace with actual registration logic)
  const response = await fetch("/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Signup failed");
  }

  return response.json();
};

const useSignupMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(signup, {
    onSuccess: (data) => {
      // Update user data in the cache
      queryClient.setQueryData("userDetails", data);
    },
  });
};

export { useSignupMutation };
