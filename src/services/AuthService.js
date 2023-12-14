// src/services/AuthService.js

import { useMutation, useQueryClient } from "react-query";

const login = async (credentials) => {
  // Simulate authentication (replace with actual authentication logic)
  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
};

const logout = async () => {
  // Simulate logout (replace with actual logout logic)
  const response = await fetch("/api/logout");

  if (!response.ok) {
    throw new Error("Logout failed");
  }
};

const useLoginMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(login, {
    onSuccess: (data) => {
      // Update user data in the cache
      queryClient.setQueryData("userDetails", data);
    },
  });
};

const useLogoutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(logout, {
    onSuccess: () => {
      // Remove user data from the cache
      queryClient.setQueryData("userDetails", null);
    },
  });
};

export { useLoginMutation, useLogoutMutation };
