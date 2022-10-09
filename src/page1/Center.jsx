import React from "react";
import "./Center.css";
import { AiFillCaretRight } from "react-icons/ai";
import { TbStars, TbTruckDelivery } from "react-icons/tb";
import { TiThumbsUp } from "react-icons/ti";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import ImgCenter1 from "../Images/shopInfoImg.png";
import ImgCategories1 from "../Images/image 21.png";
import ImgCategories2 from "../Images/image 23.png";
import ImgCategories3 from "../Images/image 24.png";
import ImgCategories4 from "../Images/image 25.png";
import ImgCenter5 from "../Images/iPhone 12 Pro mockup 1.png"
import { Data } from "./data";

export const Center = () => {
  return (
    <section>
      <Center1 />
      <Center2 />
      <Center3 />
      <Center4 />
      <Center5 />
    </section>
  );
};
export default Center;

const Center1 = () => {
  return (
    <div className="center1-main">
      <div className="center1-dark">
        <div className="center1-dark-info">
          <h1>Быстрый и удобный шоппинг, не выходя из дома.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
            lectus odio vitae, duis nec ut velit, fermentum. Diam sollicitudin
            arcu euismod morbi. Adipiscing bibendum elementum, fermentum amet
            quis erat.
          </p>
          <div>
            <button>
              <AiFillCaretRight className="center1-dark-info-icon" />
              Все товары
            </button>
          </div>
        </div>
      </div>
      <img src={ImgCenter1} className="center1-img"></img>
      <div className="center1-info-dots">
        <div className="active-dota-div">
          <span style={{ opacity: "1" }}></span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
      </div>
    </div>
  );
};

const Center2 = () => {
  return (
    <div className="center2-main">
      <h1>Наши преимущества</h1>
      <div className="center2-services">
        <div className="center2-service1">
          <TbStars className="center2-services-icon" />
          <p>Лучший сервис</p>
        </div>
        <div className="center2-service2">
          <TbTruckDelivery className="center2-services-icon" />
          <p>Экспресс доставка</p>
        </div>
        <div className="center2-service3">
          <TiThumbsUp className="center2-services-icon" />
          <p>Лучшее качество в стране</p>
        </div>
      </div>
    </div>
  );
};

const Center3 = () => {
  return (
    <div className="center3-main">
      <h1>Лучшие товары</h1>
      <div className="center3-products">
        {Data.map((item, index) => {
          return (
            <div className="products-card" key={index}>
              <img src={item.productImg} className="product-img" />
              <div className="product-card-bottom">
                <h2>{item.productTitle}</h2>
                <p className="product-info">{item.productInfo}</p>
                <div className="product-rating">
                  <BsStarFill className="rating-stars" />
                  <BsStarFill className="rating-stars" />
                  <BsStarFill className="rating-stars" />
                  <BsStarHalf className="rating-stars" />
                  <BsStar className="rating-stars" />
                  <p className="rating-number">{item.productPop}</p>
                  <p className="product-price">
                    {item.productPrice}
                    <span style={{ marginLeft: "5px" }}>У.Е</span>
                  </p>
                </div>
                <button>Добавить в корзину</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Center4 = () => {
  return (
    <div className="center4-main">
      <h1>Категории</h1>
      <div className="center4-categories">
        <div className="categorie-div">
          <img src={ImgCategories1} className="categorie-img" />
          <button>Женская обувь</button>
        </div>
        <div className="categorie-div">
          <img src={ImgCategories2} className="categorie-img" />
        </div>
        <div className="categorie-div">
          <img src={ImgCategories3} className="categorie-img" />
        </div>
        <div className="categorie-div">
          <img src={ImgCategories4} className="categorie-img" />
        </div>
      </div>
    </div>
  );
};

const Center5 = () => {
  return (
    <div className="center5-main">
      <img src={ImgCenter5} />
    </div>
  );
};
