// src/components/Header.jsx

import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo or Artist Name */}
        <a href="/" className="text-2xl font-bold text-gray-800">
          Marta .K
        </a>

        {/* Navigation Links */}
        <nav className="space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-500"
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-500"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-500"
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
