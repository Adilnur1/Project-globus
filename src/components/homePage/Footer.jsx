import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./assets/logo (2)000000000.png";
import instagram from "./assets/Union.png";
import wk from "./assets/Vector.png";
import facebook from "./assets/Subtract.png";
import ok from "./assets/Vector(1).png";
import phone from "./assets/Vector 188 (Stroke).png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="" />
        </div>
        <div className="footer-menu">
          <div className="footer-div">О компании</div>
          <div className="footer-div">Контакты</div>
          <div className="footer-div">Ваканции</div>
          <div className="footer-div">Статьи</div>
          <div className="footer-div">
            Политика обработки персональных данных
          </div>
        </div>
        <div className="footer-icons">
          <div className="ftr">
            <div className="footer-item2">
              <img class="xs" src={instagram} alt="" />
              <img class="xs" src={wk} alt="" />
              <img class="xs" src={facebook} alt="" />
              <img class="xs" src={ok} alt="" />
            </div>
          </div>
          <div className="footer-phone">
            <div className="footer-item">
              <img src={phone} alt="" />
            </div>
            <div className="footer-item">8 800 777 33 33</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
