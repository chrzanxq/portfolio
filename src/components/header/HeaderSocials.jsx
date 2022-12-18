import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/marcin-chrzanowski-9a6b4b247/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/chrzanxq" target="_blank">
        {" "}
        <BsGithub />{" "}
      </a>
      <a href="https://www.facebook.com/mooorswin" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
