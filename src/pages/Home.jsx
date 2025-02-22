// src/Home.jsx
import React from 'react';
import './Home.css';  // Import the CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Foodie Point</h1>
        <p>Your go-to platform for food lovers! Discover delicious recipes, restaurants, and more.</p>
        <div className="button-container">
          <a href="/login" className="home-btn">Login</a>
          <a href="/register" className="home-btn">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
