// Home.js
import React from "react";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const Home = () => {
  // Configure Firebase with your own credentials
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
  };

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const analytics = getAnalytics(app);

  // Google sign-in function
  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      await firebase.auth().signInWithPopup(provider);
      console.log("Successfully signed in with Google");
      // You can redirect or perform additional actions after successful sign-in
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>

      {/* ... (existing content) */}

      {/* Sign In with Social Media */}
      <div>
        <h2>Sign In with Social Media</h2>
        <button type="button" onClick={signInWithGoogle}>
          Sign In with Google
        </button>
        {/* Add buttons for other social media providers as needed */}
      </div>

      {/* Link to Registration Page */}
      <div>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>.
        </p>
      </div>
    </div>
  );
};

export default Home;
