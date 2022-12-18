import React from "react";
import CTA from "./CTA";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello my name is</h5>
        <h2>Marcin Chrzanowski</h2>
        <h5 className="text-light">Front End Developer</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
