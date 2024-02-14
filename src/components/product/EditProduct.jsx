import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContextProvider";

const EditProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct, editProduct } = useProducts();
  const [product, setProduct] = useState({
    image: "",
    name: "",
    price: "",
  });
  const handleInput = (e) => {
    if (e.target.name === "price") {
      const obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      const obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  };
  const handleClick = () => {
    editProduct(id, product);
  };
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);
  return (
    <div>
      <input
        value={product.image}
        type="text"
        name="image"
        placeholder="Image"
        onChange={handleInput}
      />
      <input
        value={product.name}
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleInput}
      />
      <input
        value={product.price}
        type="number"
        name="price"
        placeholder="Price"
        onChange={handleInput}
      />
      <button onClick={handleClick}>Сохранить изменения</button>
    </div>
  );
};

export default EditProduct;
