import React, { useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import "./Product.css";
import { Button, Rating } from "@mui/material";
import { Stack } from "@mui/system";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Details from "./Details";

const ProductCard = ({ elem }) => {
 

  const navigate = useNavigate();
  const { deleteProduct } = useProducts();
  return (
    <div className="card">
      <img className="card-img" onClick={heandelOpen} src={elem.image} alt="" />
      <div className="card-price">
        <p style={{ fontWeight: "bold", fontSize: "17px" }}>{elem.name}</p>
        <p style={{ color: "green", fontWeight: "bold" }}>{elem.price} ⃀</p>
        <Stack>
          <Rating name="half-rating" defaultValue={0} precision={1} />
        </Stack>
        <div>
          <div className="btn-group">
            <Button
              variant="outlined"
              color="error"
              onClick={() => deleteProduct(elem.id)}
            >
              DELETE
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate(`/edit/${elem.id}`)}
            >
              EDIT
            </Button>
            <AddShoppingCartIcon sx={{ color: "green" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
