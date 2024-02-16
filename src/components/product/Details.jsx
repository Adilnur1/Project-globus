import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useState } from "react";

const Details = (props) => {
  const style = {
    position: "absolute",
    top: "20%",
    left: "30%",
    width: 700,
    display: "flex",
    boxShadow: 24,
    bgcolor: "background.paper",
    p: 4,
    alignItems: "center",
    border: 0,
  };
  const { elem, open, handleClose } = props;
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={handleClose}
      sx={{ cursor: "pointer" }}
    >
      <Box sx={style}>
        <div>
          <img
            width={300}
            height={350}
            src={elem.image}
            alt={elem.image}
            onClick={handleClose}
          />
        </div>
        <div style={{ margin: "30px" }}>
          <h1>{elem.name}</h1>
          <p style={{ marginTop: "10px", fontSize: "20px" }}>{elem.category}</p>
          <strong style={{ color: "green", fontSize: "20px" }}>
            {elem.price} ⃀
          </strong>
          <p></p>
          <div style={{ display: "flex" }}>
            <TextField
              onChange={handleChange}
              label={"Оставьте комментарий"}
              value={newComment}
            />
            <Button onClick={handleSubmit} variant="contained" color="success">
              Send
            </Button>
          </div>

          {comments.map((comment, index) => (
            <p key={index} className="comment">
              {comment}
            </p>
          ))}
        </div>
      </Box>
    </Modal>
  );
};

export default Details;
