import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import CategorySelect from "./CategorySelect";
import { Button, TextField, Typography } from "@mui/material";

const AddProduct = () => {
  const { addProduct, categories, getCategories } = useProducts();
  const [product, setProduct] = useState({
    image: "",
    name: "",
    price: "",
  });
  useEffect(() => {
    getCategories();
  }, []);
  console.log(categories);

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
    <div className="addProduct">
      <Typography>ADMIN PAGE</Typography>
      <TextField
        type="text"
        name="image"
        placeholder="Картина"
        onChange={handleInput}
      />
      <CategorySelect categories={categories} handleInput={handleInput} />
      <TextField
        type="text"
        name="name"
        placeholder="Название"
        onChange={handleInput}
      />
      <TextField
        type="number"
        name="price"
        placeholder="Цена"
        onChange={handleInput}
      />
      <Button onClick={handleClick}>Добавить продукт</Button>
    </div>
  );
};

export default AddProduct;
