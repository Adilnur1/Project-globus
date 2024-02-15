import React, { useEffect, useState } from "react";
import logo from "./assets/favicon.png";
import "./homePage.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar } from "@mui/material";
import { useProducts } from "../context/ProductContextProvider";
import { useSearchParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const { categories, getCategories, fetchByParams } = useProducts();
  // useEffect(() => {
  //   getCategories();
  // }, []);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);
  return (
    <nav>
      <div className="container">
        <div className="nav-logo">
          <div className="nav-logo-img">
            <img src={logo} alt="" />
          </div>
          <div className="nav-logo-text">Северяночка</div>
        </div>
        <div className="nav-input">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            className="inp"
          />
          <SearchIcon className="search" />
        </div>
        <div className="nav-icons">
          <div className="i">
            <FavoriteBorderIcon
              sx={{ display: "flex", justifyContent: "center" }}
            />
            <div className="nav-icon-item">Избранное</div>
          </div>
          <div className="i">
            <ShoppingCartIcon
              sx={{ display: "flex", justifyContent: "center" }}
            />
            <div className="nav-icon-item">Корзинка</div>
          </div>
        </div>
        <div>
          <Avatar alt="" src="/static/images/avatar/2.jpg" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
