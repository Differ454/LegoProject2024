import React from "react";
import "./Portfolio.css";
import STW from "../../assets/software.jpg";
import NJN from "../../assets/ninja.jpg";
import TIC from "../../assets/tic tac toe.png";
import GTH from "../../assets/GithubShooter.png";
import EAR from "../../assets/earth.png";
import UNI from "../../assets/universeBackground.jpg";

const data = [
  {

    id: 1,
    image: EAR,
    title: "Earth 3D Three.JS Project",
    github: "https://github.com/DrCloudFactory454/ThreeJs-3DEarth-Project-Vite-React",
    demo: "https://drcloudfactory454.github.io/ThreeJs-3DEarth-Project-Vite-React/",

    
    
  },

  {
    id: 2,
    image: NJN,
    title: "Boomerang Ninja Game (Desktop Version)",
    github: "https://github.com/DrCloudFactory454/Boomerang-Ninja-Game",
    demo: "https://ninja-game-454.herokuapp.com/",
  },

  {
    id: 3,
    image: TIC,
    title: "tic tac toe Game",
    github: "https://github.com/DrCloudFactory454/tic-tac-toe",
    demo: "https://tic-tac-toe-454.herokuapp.com/",
  },

  {
    id: 4,
    image: GTH,
    title: "GitHub Shooter Game (Desktop Version)",
    github: "https://github.com/DrCloudFactory454/GithubShooterGame",
    demo: "https://github-shooter-game.herokuapp.com/",
  },
  {
    id: 5,
    image: UNI,
    title: "Universe 3D background animate",
    github: "https://github.com/DrCloudFactory454/stars3JS",
    demo: "https://universe3js.herokuapp.com/",
  },
  {
      id: 6,
      image: STW,
      title: "Charts templates & infographics in Figma",
      github: "https://github.com",
      demo: "https://dribbble.com/shots/18861525-Lendary-Mobile",
      
    },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Resent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio item-image">
                <img className="ptc" src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
