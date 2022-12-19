import React from "react";
import CTA from "./CTA";
import me from "../../assets/images/me.jpg";
import "./header.css";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello, my name is</h5>
        <h2>Marcin Chrzanowski</h2>
        <h5 className="text-light">Front End Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={me} alt="profile picture" className="avatar" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
