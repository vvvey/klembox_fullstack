import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import Store from "./pages/Store";
import Resources from "./pages/Resources";
import Discover from "./pages/Discover";
import ProductDetailWithRouter from "./pages/ProductDetailWithRouter";

// Custom Pages
const NotFound = () => {
  return (
    <>
      <div className="margint60">
        <div className="_10container">
          <h3 className="heading-14">Not Found</h3>
          <p style={{ textAlign: "center" }}>
            Page you're looking for doesn't exists!
          </p>
        </div>
      </div>
      <div className="bottomspace" />
    </>
  );
};

const ComingSoon = () => {
  return (
    <>
      <div className="margint60">
        <div className="_10container">
          <h3 className="heading-14">Coming Soon...</h3>
        </div>
      </div>
      <div className="bottomspace" />
    </>
  );
};

// Routes
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
        <Route path="/products" element={<Store />} />
        <Route
          path="/products/:short_code"
          element={<ProductDetailWithRouter />}
        />

        <Route path="/discover" element={<Discover />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:short_code" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
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
