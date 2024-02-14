import React, { useEffect } from "react";
import { useProducts } from "../context/ProductContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, getProducts } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.map((elem) => (
        <ProductCard key={elem.id} elem={elem} />
      ))}
    </div>
  );
};

export default ProductList;
