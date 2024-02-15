import React from "react";
import AddProduct from "../components/product/AddProduct";
import AddCategory from "../components/product/AddCategory";

const AdminPage = () => {
  return (
    <div>
      <p>admin page</p>
      <AddProduct />
      <AddCategory />
    </div>
  );
};

export default AdminPage;
