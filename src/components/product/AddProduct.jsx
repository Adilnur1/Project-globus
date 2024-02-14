import React, { useState } from "react";
import { useProducts } from "../context/ProductContextProvider";

const AddProduct = () => {
  const { addProduct } = useProducts();
  const [product, setProduct] = useState({
    image: "",
    name: "",
    price: "",
  });

  const handleInput = (e) => {
    if (e.target.name === "price") {
      const obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      const obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };
  const handleClick = () => {
    addProduct(product);
  };

  return (
    <div>
      <p>ADMIN PAGE</p>
      <input
        type="text"
        name="image"
        placeholder="Image"
        onChange={handleInput}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleInput}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        onChange={handleInput}
      />
      <button onClick={handleClick}>Добавить продукт</button>
    </div>
  );
};

export default AddProduct;
