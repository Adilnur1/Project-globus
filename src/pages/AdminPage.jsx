import React, { useState } from "react";
import AddProduct from "../components/product/AddProduct";
import AddCategory from "../components/product/AddCategory";
import { Button } from "@mui/material";

const AdminPage = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <div>
      <Button onClick={handleOpen}>Добавить категорию</Button>
      <AddProduct />
      <AddCategory open={open} handleClose={handleClose} />
    </div>
  );
};

export default AdminPage;
