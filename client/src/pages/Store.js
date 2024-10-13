import React from "react";
import Product from "./ProductDetailWithRouter";
import ProductsList from "../components/ProductsList";

const Store = () => {
  return (
    <>
      <div className="margint60">
        <div className="_10container">
          <h3 className="heading-14">Explore Our Kits</h3>
        </div>

        <ProductsList />
      </div>
      <div className="bottomspace" />
    </>
  );
};

export default Store;
