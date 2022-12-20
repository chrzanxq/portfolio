import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/marcin-chrzanowski-9a6b4b247/"
        rel="noopener"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/chrzanxq" rel="noopener">
        {" "}
        <BsGithub />{" "}
      </a>
      <a href="https://www.facebook.com/mooorswin" rel="noopener">
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
