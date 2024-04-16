import React from "react";
import { menu } from "../Data";
const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>

        <div className="box-container">
          {menu.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
              <div className="price">
                {item.price} <span>{item.discount}</span>
              </div>
              <a href="#Menu" className="btn">
                Add To Cart
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
