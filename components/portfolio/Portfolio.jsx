import React from "react";
import "./Portfolio.css";
import UNI from "/assets/shower.webp";
import NJN from "/assets/ninja.jpg";
import TIC from "/assets/tic tac toe.png";
import GTH from "/assets/GithubShooter.png";
import EAR from "/assets/DLM.png";
import STW from "/assets/space6.png";

const data = [
  {

    id: 1,
    image: TIC,
    title: "tic tac toe Game",
    github: "https://github.com/DrCloudFactory454/tic-tac-toe",
    demo: "https://tic-tac-toe454.netlify.app",
    
  },

  {
    id: 2,
    image: GTH,
    title: "GitHub Shooter Game (Desktop Version)",
    github: "https://github.com/DrCloudFactory454/GithubShooterGame",
    demo: "https://githubshootergame.netlify.app/",
  },

  {
    id: 3,
    image: NJN,
    title: "Boomerang Ninja Game (Desktop Version)",
    github: "https://github.com/DrCloudFactory454/Boomerang-Ninja-Game",
    demo: "https://boomerangamediegoruiz454.netlify.app/", 
  },

  {
    id: 4,
    image: EAR,
    title: "Den Lille Musik Skole",
    demo: "https://bulowsvej10.dk/home",
  },
  {
    id: 5,
    image: UNI,
    title: "Flow Loop Recirculation Shower",
    demo: "https://flow-loop.com/",
  },
  {
      id: 6,
      image: STW,
      title: "3D world globe",
      github: "https://github.com/Differ454/ThreeJs-3DEarth-Project-Vite-React",
      demo: "https://3dworld454.netlify.app",
      
    },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      {<h5>Udvalgte projekter</h5> }
      <h2>Nogle projekter jeg har arbejdet på</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio item-image">
                <img className="ptc" src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              {/* <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div> */}
              <div className="portfolio__item-cta">
                {(id !== 4 && id !== 5) && github && (
                  <a href={github} className="btn">
                    Github
                  </a>
                )}
                <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
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
