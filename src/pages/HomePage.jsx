import React from "react";
import ProductPage from "./ProductPage";
import img from "../components/homePage/assets/img@2x.png";
import card1 from "../components/homePage/assets/banner-hover.png";
import card2 from "../components/homePage/assets/banner.png";
import infoImg from "../components/homePage/assets/image 1.png";
import infoImg2 from "../components/homePage/assets/image 2.png";
import infoImg3 from "../components/homePage/assets/image 3.png";
import PaginationControlled from "../components/product/PaginationControlled";

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

      <div className="discount-card">
        <div className="discount-card-text">Специальные предложения</div>
        <div className="discount-card-cards">
          <div className="discount-card-cards-item">
            <img src={card1} alt="" />
          </div>
          <div className="discount-card-cards-item">
            <img src={card2} alt="" />
          </div>
        </div>
      </div>
      <div className="map">
        <div className="map-text">Наши магазины</div>
        <div className="map-btns">
          <button class="map-btn1">п.Щельяюр</button>
          <button class="map-btn2">д.Вертеп</button>
          <button class="map-btn3">с.Краснобор</button>
          <button class="map-btn4">д.Диюр</button>
        </div>
        <div class="map-place">
          <div
            class="yandex"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <a
              href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontZize: "12px",
                position: "absolute",
                top: "0px",
              }}
            >
              Яндекс Карты
            </a>
            <a
              href="https://yandex.ru/maps/geo/771290125/?ll=72.039239%2C42.544484&utm_medium=mapframe&utm_source=maps&z=7"
              style={{
                color: "#eee",
                fontZize: "12px",
                position: "absolute",
                top: "14px",
              }}
            >
              Бишкек — Яндекс Карты
            </a>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=72.039239%2C42.544484&mode=poi&poi%5Bpoint%5D=74.603691%2C42.875950&poi%5Buri%5D=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgk3NzEyOTAxMjUSItCa0YvRgNCz0YvQt9GB0YLQsNC9LCDQkdC40YjQutC10LoiCg0YNZVCFf6AK0I%2C&z=7"
              width="1150"
              height="400"
              frameborder="1"
              allowfullscreen="true"
              style={{ position: "relative" }}
            ></iframe>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="info-text">Статьи</div>
        <div className="info-cards-title">
          <div className="info-card1">
            <div class="info-img">
              <img class="rrr" src={infoImg} alt="" />
              <div class="info-date">05.03.2021</div>
              <div class="info-words">
                Режим использования масок и <br />
                перчаток на территории магазинов
              </div>
              <div class="info-words2">
                Подробная информация о режимах <br />
                использования масок и перчаток на <br />
                территории магазинов "ЛЕНТА". Информация <br />
                обновляется каждый будний день.
              </div>
              <div class="info-btn">
                <button class="button">Подробнее</button>
              </div>
            </div>
          </div>
          <div className="info-card2">
            <div class="info-img">
              <img class="rrr" src={infoImg2} alt="" />
              <div class="info-date">05.03.2021</div>
              <div class="info-wordss">Весеннее настроение для каждой</div>
              <div class="info-words2">
                8 Марта – это не просто Международный <br />
                женский день, это ещё <br /> день тюльпанов, приятных сюрпризов{" "}
                <br /> и праздничных тёплых пожеланий.
              </div>
              <div class="info-btn">
                <button class="buttonn">Подробнее</button>
              </div>
            </div>
          </div>
          <div className="info-card3">
            <div class="info-img">
              <img class="rrr" src={infoImg3} alt="" />
              <div class="info-date">05.03.2021</div>
              <div class="info-words">
                ЗОЖ или ФАСТФУД. А вы на чьей <br /> стороне? Голосуем!
              </div>
              <div class="info-words2">
                Голосуйте за любимые категории, выбирайте <br />
                категорию-победителя в мобильном <br />
                приложении и получайте кешбэк 10% <br />
                баллами в апреле!
              </div>
              <div class="info-btn">
                <button class="button">Подробнее</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
