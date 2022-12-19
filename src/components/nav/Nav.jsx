import React from "react";
import "./nav.css";
import { FiHome } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { BiMessageDots } from "react-icons/bi";
import { TbStack3 } from "react-icons/tb";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : " "}
      >
        <FiHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : " "}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#stack"
        onClick={() => setActiveNav("#stack")}
        className={activeNav === "#stack" ? "active" : " "}
      >
        <TbStack3 />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : " "}
      >
        <AiOutlineFundProjectionScreen />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : " "}
      >
        <BiMessageDots />
      </a>
    </nav>
  );
};

export default Nav;
