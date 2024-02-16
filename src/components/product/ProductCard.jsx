import React, { useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import { Link, useNavigate } from "react-router-dom";
import "./Product.css";
import { Button, Rating } from "@mui/material";
import { Stack } from "@mui/system";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useAuth } from "../context/AuthContextProvider";
import { ADMIN } from "../../helpers/const";
import Details from "./Details";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ProductCard = ({ elem }) => {
  const { user } = useAuth();
  const { deleteProduct } = useProducts();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const buttonStyle = {
    color: liked ? "red" : "lightgray",
    padding: "10px",
    cursor: "pointer",
  };
  return (
    <div className="card">
      <img className="card-img" src={elem.image} alt="" />
      <img
        className="card-img"
        onClick={handleOpen}
        src={elem.image}
        alt={elem.image}
      />
      <div className="card-price">
        <p style={{ fontWeight: "bold", fontSize: "17px" }}>{elem.name}</p>
        <p style={{ color: "green", fontWeight: "bold" }}>{elem.price} ⃀</p>
        <p>{elem.category}</p>
        <Stack>
          <Rating name="half-rating" defaultValue={0} precision={1} />
        </Stack>
        <div>
          {user.email === ADMIN ? (
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
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <AddShoppingCartIcon sx={{ color: "green" }} />
              <FavoriteIcon style={buttonStyle} onClick={handleLikeClick} />
            </div>
          )}
        </div>
      </div>
      <Details open={open} handleClose={handleClose} elem={elem} />
    </div>
  );
};

export default ProductCard;
