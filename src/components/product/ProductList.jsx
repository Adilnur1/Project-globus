import React, { useEffect } from "react";
import { useProducts } from "../context/ProductContextProvider";
import ProductCard from "./ProductCard";
import "./Product.css";

const ProductList = () => {
  const { products, getProducts } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="list">
      {products.map((elem) => (
        <ProductCard key={elem.id} elem={elem} />
      ))}
    </div>
  );
};

export default ProductList;
