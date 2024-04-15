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
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.0917300505803!2d76.82765007549402!3d28.446651075766777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d15299f28aee1%3A0x55cc21222e8128ab!2sRadhey%20Sweets%20%26%20Restaurant!5e0!3m2!1sen!2sin!4v1713158450402!5m2!1sen!2sin"
  width={600}
  height={450}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

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
