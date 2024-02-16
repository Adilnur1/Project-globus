import React, { useEffect, useState } from "react";
import logo from "./assets/favicon.png";
import "./homePage.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { ADMIN } from "../../helpers/const";
import { useAuth } from "../context/AuthContextProvider";
import { useCart } from "../context/CartContextProvider";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [badgeCount, setBadgeCount] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const { user, handleLogOut } = useAuth();
  const { addProductToCart, getProductsCountInCart } = useCart();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  useEffect(() => {
    setBadgeCount(getProductsCountInCart());
  }, [addProductToCart]);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <nav>
      <div className="container">
        <div className="nav-logo">
          <div className="nav-logo-img">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
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
        {user.email === ADMIN ? (
          <Link className="link" to={"/admin"}>
            <Typography sx={{ textAlign: "center" }}>ADMIN</Typography>
          </Link>
        ) : null}
        <div className="nav-icons">
          <div className="i">
            <FavoriteBorderIcon
              className="icon-css"
              sx={{ display: "flex", justifyContent: "center" }}
            />
            <div className="nav-icon-item">Избранное</div>
          </div>
          <div className="i">
            <Link to={"/cart"}>
              <Badge badgeContent={badgeCount} color="success">
                <ShoppingCartIcon
                  className="icon-css"
                  sx={{ display: "flex", justifyContent: "center" }}
                />
              </Badge>
              <div className="nav-icon-item">Корзинка</div>
            </Link>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ marginRight: "10px" }}>
            {user ? `Hello, ${user.email.split("@")[0]}` : "Hello, Guest"}
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {user ? (
                  <>
                    <Avatar
                      sx={{ bgcolor: "green" }}
                      alt={
                        user.email.charAt(0).toUpperCase() + user.email.slice(1)
                      }
                      src="/static/images/avatar/2.jpg"
                    />
                  </>
                ) : (
                  <>
                    <Avatar
                      sx={{ bgcolor: "green" }}
                      alt={user.email}
                      src="/static/images/avatar/2.jpg"
                    />
                  </>
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user ? (
                <MenuItem onClick={handleLogOut}>
                  <Typography>LogOut</Typography>
                </MenuItem>
              ) : (
                <Link to={"/auth"}>
                  <MenuItem>
                    <Typography textAlign={"center"}>LogIn</Typography>
                  </MenuItem>
                </Link>
              )}
            </Menu>
          </Box>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
