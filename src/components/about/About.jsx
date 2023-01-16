import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know Something</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          {/* <img src="../../assets/images/me2.png" alt="second picture of me" /> */}
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Yet to gain</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>Still 0</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>In Portfolio</small>
            </article>
          </div>
          <p>
            Hi! My name is Marcin and I'm an aspiring Front End React Developer
            based in Poland. Although i do not have professional experience yet,
            feel free to check out my personal projects to see if I am a good
            fit for Your company. My current skills are listed in my Curriculum,
            and will be placed in Stack section. Dont forget to check in on my
            linked profiles!
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Me!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
