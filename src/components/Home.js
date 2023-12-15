// Home.js
import React from "react";
import { Link } from "react-router-dom";
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"; // Update the import here
import { getAnalytics } from "firebase/analytics";

const Home = () => {
  // Configure Firebase with your own credentials
  const firebaseConfig = {
    apiKey: "AIzaSyDKqeqce0HSnhZxCgr686Di0abVg__gRtU",
    authDomain: "second-home-faf97.firebaseapp.com",
    databaseURL: "https://second-home-faf97-default-rtdb.firebaseio.com",
    projectId: "second-home-faf97",
    storageBucket: "second-home-faf97.appspot.com",
    messagingSenderId: "776546997812",
    appId: "1:776546997812:web:6bf6cdd82634a31a5fdc61",
    measurementId: "G-8LDN5EFM7N",
  };

  // Initialize Firebase
  if (!getApps().length) {
    initializeApp(firebaseConfig);
  }

  const app =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

  const analytics = getAnalytics(app);
  const auth = getAuth(app); // Initialize the auth module

  // Google sign-in function
  const signInWithGoogle = async () => {
    // Use the auth module here
    const provider = new auth.GoogleAuthProvider();

    try {
      await auth.signInWithPopup(provider);
      console.log("Successfully signed in with Google");
      // You can redirect or perform additional actions after successful sign-in
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>

      {/* Existing content */}

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
