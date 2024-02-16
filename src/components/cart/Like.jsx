import React, { useEffect } from "react";
import { useLike } from "../context/FavoritesContextProvider";
import { Rating, Stack } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const Like = () => {
  const { like, getLike, deleteProductFromLike } = useLike();
  useEffect(() => {
    getLike();
  }, []);
  console.log(like.products);
  return (
    <div className="like-cont" style={{ height: "500px" }}>
      <div className="list-like">
        {like.products.map((elem) => (
          <div key={elem.item.id} className="cardd">
            <img
              className="card-img"
              src={elem.item.image}
              alt={elem.item.image}
            />
            <div className="card-price">
              <p style={{ fontWeight: "bold", fontSize: "17px" }}>
                {elem.item.name}
              </p>
              <p style={{ color: "green", fontWeight: "bold" }}>
                {elem.item.price} ⃀
              </p>
              <p>{elem.item.category}</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <Stack>
                  <Rating name="half-rating" defaultValue={0} precision={1} />
                </Stack>
                <BookmarkIcon
                  sx={{ color: "green", cursor: "pointer" }}
                  onClick={() => deleteProductFromLike(elem.item.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Like;
