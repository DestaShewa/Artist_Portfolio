// src/components/Container.jsx

import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  );
};

export default Container;
