import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "./styles/splide.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import Product from "./pages/Product";
import Resources from "./pages/Resources";
import Lessons from "./pages/Lessons";
import Discover from "./pages/Discover";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <MobileNav />
            </>
          }
        />
        <Route path="/about" element={<Navbar />} />
        <Route path="/products" element={<Product />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/discover" element={<Discover />} />
        <Route element={<Navbar />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
