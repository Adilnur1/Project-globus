import React from "react";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import NotFoundPage from "../pages/NotFoundPage";
import CartPage from "../pages/CartPage";
import AuthPage from "../pages/AuthPage";
import EditPage from "../pages/EditPage";
import AdminPage from "../pages/AdminPage";
import { Route, Routes } from "react-router-dom";
import Details from "../components/product/Details";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "/products", element: <ProductPage /> },
    { id: 3, link: "*", element: <NotFoundPage /> },
    { id: 4, link: "/cart", element: <CartPage /> },
    { id: 5, link: "/auth", element: <AuthPage /> },
    { id: 6, link: "/edit/:id", element: <EditPage /> },
    { id: 7, link: "/admin", element: <AdminPage /> },
    { id: 8, link: "/detail/:id", element: <Details /> },
  ];
  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((elem) => (
          <Route path={elem.link} key={elem.id} element={elem.element} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;
