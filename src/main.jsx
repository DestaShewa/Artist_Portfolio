// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Make sure this line has .jsx
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
