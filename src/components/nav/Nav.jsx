import React from "react";
import "./nav.css";
import { FiHome } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { BiMessageDots } from "react-icons/bi";
import { TbStack3 } from "react-icons/tb";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const { activeNav, setActiveNav } = useState("#");
  return (
    <nav>
      <a href="#">
        <FiHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#stack">
        <TbStack3 />
      </a>
      <a href="#portfolio">
        <AiOutlineFundProjectionScreen />
      </a>
      <a href="#contact">
        <BiMessageDots />
      </a>
    </nav>
  );
};

export default Nav;
