// src/pages/Home.jsx

import React from "react";
import Button from "../components/Button.jsx"; // Import our new Button component

const Home = () => {
  return (
    // The main container for the hero section
    // h-[calc(100vh-100px)] calculates the height to fill the viewport minus the header's approximate height
    <div
      className="relative h-[calc(100vh-104px)] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/art/istockphoto-1134512518-612x612 art bg.webp')",
      }} // Sets the background image
    >
      {/* Dark Overlay */}
      {/* 'absolute inset-0' makes this div cover the parent completely */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero Content */}
      {/* 'relative' ensures this content appears on top of the overlay */}
      <div className="relative text-center text-white p-4">
        {/* Animated Intro Text */}
        {/* 'animate-fade-in-down' would be a custom animation we'd add later */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
          Art That Speaks
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Explore a curated collection of paintings and drawings that capture
          the essence of modern expressionism.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center space-x-4">
          <Button to="/gallery" primary>
            View Gallery
          </Button>
          <Button to="/contact">Contact the Artist</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
