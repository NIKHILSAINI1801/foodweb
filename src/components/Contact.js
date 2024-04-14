import React from "react";

const Contact = () => {
  return (
    <>
      <section class="contact" id="contact">
        <h1 class="heading">
          <span>Contact</span> Us
        </h1>
        <div class="row">
          <iframe
            class="map"
            src="https://www.geospatialworld.net/wp-content/uploads/2019/10/Gog1.png"
            allowfullscreen=""
            loading="lazy"
          ></iframe>

          <form action="">
            <h3>Get in Touch</h3>
            <div class="inputBox">
              <span class="fas fa-user"></span>
              <input type="text" placeholder="Name" />
            </div>
            <div class="inputBox">
              <span class="fas fa-envelope"></span>
              <input type="email" placeholder="Email" />
            </div>
            <div class="inputBox">
              <span class="fas fa-phone"></span>
              <input type="number" placeholder=" Phone Number" />
            </div>
            <input type="submit" value="contact now" class="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
