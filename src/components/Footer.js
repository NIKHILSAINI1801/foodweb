import React from "react";

const Footer = () => {
  return (
    <>
      <section class="footer">
        <div class="share">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
          <a href="#" class="fab fa-pinterest"></a>
        </div>
        <div class="links">
        <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#products">Products</a>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
          <a href="#blogs">Blogs</a>
        </div>
        <div class="credit">
          created by <span>Nikhil saini,Abul hasan and Sahil </span> For college project
        </div>
      </section>
    </>
  );
};

export default Footer;
