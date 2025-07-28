// src/pages/Gallery.jsx

import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { artworks } from "../artworkData.js"; // Import our mock data

// Import the styles for the lightbox
import "react-photo-view/dist/react-photo-view.css";

const Gallery = () => {
  return (
    <div className="py-10">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Artwork Gallery
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Click on any image to view it in full screen.
        </p>
      </div>

      {/* The PhotoProvider component wraps the gallery to enable the lightbox functionality */}
      <PhotoProvider>
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {artworks.map((art) => (
            // Each artwork is a "card"
            <div
              key={art.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              {/* The PhotoView component makes the image clickable for the lightbox */}
              <PhotoView src={art.image}>
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </PhotoView>

              {/* Information Overlay */}
              {/* This overlay appears at the bottom and fades in on hover */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold">{art.title}</h3>
                <p className="text-gray-300 text-sm">{art.category}</p>
              </div>
            </div>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
};

export default Gallery;
