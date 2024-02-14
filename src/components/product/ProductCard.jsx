import React from "react";
import { useProducts } from "../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ elem }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();
  return (
    <div>
      <img src={elem.image} alt="" width="300px" />
      <p>{elem.name}</p>
      <p>{elem.price}</p>
      <div>
        <button onClick={() => deleteProduct(elem.id)}>DELETE</button>
        <button onClick={() => navigate(`/edit/${elem.id}`)}>EDIT</button>
      </div>
    </div>
  );
};

export default ProductCard;
