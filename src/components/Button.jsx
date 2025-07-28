// src/components/Button.jsx

import React from "react";
import { Link } from "react-router-dom";

// The Button component accepts props for customization
const Button = ({ to, children, primary = false }) => {
  // Base classes for all buttons
  const baseClasses =
    "px-8 py-3 font-semibold rounded-md shadow-md transition-transform transform hover:scale-105";

  // Classes for a primary button (solid background)
  const primaryClasses = "bg-blue-600 text-white hover:bg-blue-700";

  // Classes for a secondary button (outline)
  const secondaryClasses =
    "bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-800";

  // Determine which style to apply based on the 'primary' prop
  const buttonClasses = `${baseClasses} ${
    primary ? primaryClasses : secondaryClasses
  }`;

  return (
    <Link to={to} className={buttonClasses}>
      {children}
    </Link>
  );
};

export default Button;
