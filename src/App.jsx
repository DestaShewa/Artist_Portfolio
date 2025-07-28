// src/App.jsx

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Container from "./components/Container.jsx";

// This component defines the shared layout for all pages
const MainLayout = () => {
  return (
    // 'flex-col' and 'min-h-screen' make the footer stick to the bottom
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      {/* 'flex-grow' allows this main section to fill available space */}
      <main className="flex-grow">
        <Container>
          {/* The Outlet is where the current page's component will be rendered */}
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

// This is the main App component that sets up the routing
function App() {
  return (
    <Router>
      <Routes>
        {/* Define a parent route that uses our MainLayout */}
        <Route path="/" element={<MainLayout />}>
          {/* These are the child routes that will be rendered inside the Outlet */}
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
