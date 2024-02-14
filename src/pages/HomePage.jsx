import React from "react";
import ProductPage from "./ProductPage";
import img from "../components/homePage/assets/img@2x.png";

const HomePage = () => {
  return (
    <div>
      <div className="header">
        <div className="header-img">
          <img src={img} alt="" />
        </div>
        <div className="header-text">Доставка бесплатно от 1000 ₽</div>
      </div>
      <ProductPage />
    </div>
  );
};

export default HomePage;
