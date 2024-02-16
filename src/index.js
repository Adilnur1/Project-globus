import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./components/context/AuthContextProvider";
import ProductContextProvider from "./components/context/ProductContextProvider";
import CartContextProvider from "./components/context/CartContextProvider";
import App from "./App";
import FavoritesContextProvider from "./components/context/FavoritesContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ProductContextProvider>
        <CartContextProvider>
          <FavoritesContextProvider>
            <App />
          </FavoritesContextProvider>
        </CartContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
