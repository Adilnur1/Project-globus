import React from "react";
import ProductList from "../components/product/ProductList";
import SideBar from "../components/product/SideBar";

const ProductPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div>
        <SideBar />
      </div>
      <ProductList />
    </div>
  );
};

export default ProductPage;
