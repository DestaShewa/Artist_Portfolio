// src/components/Footer.jsx

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t mt-auto">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600">
        <p>© {currentYear} Marta .K. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://www.instagram.com/des_ami17/"
            className="hover:text-blue-500"
          >
            Instagram
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=61578217797539"
            className="hover:text-blue-500"
          >
            Facebook
          </a>
          <a href="https://x.com/desta6757" className="hover:text-blue-500">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
