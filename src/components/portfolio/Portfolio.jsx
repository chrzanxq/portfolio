import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/images/portfolio/portfolio1.png";
import IMG2 from "../../assets/images/portfolio/portfolio2.png";
import IMG3 from "../../assets/images/portfolio/portfolio3.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="1st portfolio picture" />
          </div>

          <h3>Dice Game</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/chrzanxq/pickgame"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://chrzanxq.github.io/pickgame/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="2nd portfolio picture" />
          </div>
          <h3>Number Guessing Game</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/chrzanxq/numguess"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://chrzanxq.github.io/numguess/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="3rd portfolio picture" />
          </div>
          <h3>Random Quote Generator</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/chrzanxq/adviceapp"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://639b76fed8a2a473d98aa7a9--graceful-cat-09eb17.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
