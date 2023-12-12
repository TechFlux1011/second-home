// src/components/UserProfile.js
import React, { useEffect, useState } from "react";

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from the backend (to be implemented later)
    // For now, let's mock some data
    const mockUser = {
      id: userId,
      username: "john_doe",
      email: "john@example.com",
    };
    setUser(mockUser);
  }, [userId]);

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
};

export default UserProfile;
