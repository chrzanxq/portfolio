import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me!</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <a href="mailto:marcinch199@gmail.com" target="_blank">
              marcinch199@gmail.com
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=48739222907"
              target="_blank"
            >
              +48-739-222-907
            </a>
          </article>

          <article className="contact__option">
            <BsInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <a href="https://www.instagram.com/chrzanxq/" target="_blank">
              chrzanxq
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send!
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
