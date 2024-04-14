import React from "react";
import { review } from "../Data";
import qouteImg from "../assets/images/quote-img.png";
const Review = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          customer's <span>review</span>
        </h1>

        <div className="box-container">
          {review.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={qouteImg} alt="" className="quote" />
              <p>
              Beyond the food itself, the impeccable service adds an extra layer of charm to the dining experience. The staff are attentive and knowledgeable, guiding patrons through the menu with enthusiasm and grace.
              </p>
              <img src={item.img} className="user" alt="" />
              <h3>Congress Spokesperson</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
            
          ))}
        </div>
      </section>
    </>
  );
};

export default Review;
