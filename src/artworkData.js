// src/artworkData.js

// This is our mock database of artworks.
// In a real application, this data would come from a CMS or an API.
export const artworks = [
  {
    id: 1,
    title: "Celestial Dreams",
    image: "/art/hero.jpg", // Path relative to the `public` folder
    category: "Paintings",
    dimensions: "24x36 inch",
  },
  {
    id: 2,
    title: "Urban Echoes",
    image: "/art/images (1).jfif",
    category: "Paintings",
    dimensions: "30x40 inch",
  },
  {
    id: 3,
    title: "Forest Spirit",
    image: "/art/images (2).jfif",
    category: "Drawings",
    dimensions: "18x24 inch",
  },
  {
    id: 4,
    title: "Ocean's Breath",
    image: "/art/person one.webp",
    category: "Paintings",
    dimensions: "22x28 inch",
  },
  {
    id: 5,
    title: "City in Bloom",
    image: "/art/images hum.jfif",
    category: "Digital",
    dimensions: "N/A",
  },
  {
    id: 6,
    title: "Silent Watcher",
    image: "/art/person.jfif",
    category: "Drawings",
    dimensions: "16x20 inch",
  },
  // Add as many artworks as you have images for
];
