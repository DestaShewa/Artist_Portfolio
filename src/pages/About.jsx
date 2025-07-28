// src/pages/About.jsx

import React from "react";

const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          {/* Artist's Photo */}
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="/art/premium_photo-1674814950019-b29545fea7a7 girl.avif" // The photo you placed in the /public folder
              alt="Photo of the artist"
              className="rounded-lg shadow-xl"
            />
          </div>

          {/* Artist's Biography and Information */}
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About the Artist
            </h2>
            <p className="mt-6 text-gray-700">
              Welcome to my world of color and form. I am a contemporary artist
              driven by the interplay of light, shadow, and emotion. My work
              seeks to explore the boundaries between reality and abstraction,
              capturing fleeting moments and transforming them into lasting
              visual narratives.
            </p>
            <p className="mt-4 text-gray-700">
              With a background in fine arts and a passion for experimental
              techniques, I have spent over a decade honing my craft. Each piece
              is a journey, a dialogue between the canvas and my own
              experiences. Thank you for joining me on this journey.
            </p>

            {/* Exhibition History Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-800">
                Exhibition History
              </h3>
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold">2024:</span> "Echoes of a
                  Dream" - The Modern Art Gallery, New York
                </li>
                <li>
                  <span className="font-semibold">2022:</span> "Urban
                  Landscapes" - City Arts Center, London
                </li>
                <li>
                  <span className="font-semibold">2020:</span> "Solo Debut:
                  Beginnings" - The Local Collective, San Francisco
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
