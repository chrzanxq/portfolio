import React from "react";
import "./footer.css";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Marcin Chrzanowski
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#stack">Tech Stack</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
          {" "}
          <BsFacebook />{" "}
        </a>
        <a href="https://instagram.com">
          {" "}
          <BsInstagram />{" "}
        </a>
        <a href="https://twitter.com">
          {" "}
          <BsTwitter />{" "}
        </a>
      </div>
      <div className="footer__copyrights">
        <small> © Marcin Chrzanowski. All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
