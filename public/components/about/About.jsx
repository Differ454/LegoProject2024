import React from "react";
import "./About.css";
import PHP from "../../assets/capitan.png";
import SQL from "../../assets/rex.png";
import REACT from "../../assets/wars.png";
import BAT from "../../assets/batman.png";
import GIT from "../../assets/ninja.png";
import GO from "../../assets/legun.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="wrap">
          <div className="cube">
            <img className="landing" src={SQL} alt="MySql" />
            <img className="landing" src={PHP} alt="php" />
            <img className="landing" src={BAT} alt="batman"   />
            <img className="landing" src={REACT} alt="reactjs" />
            <img
              className="landing"
              src={
                GO
              }
              alt="Go"
            />
            <img className="landing" src={GIT} alt="Git" />
          </div>
        </div>

        {/* <div className="about__me">
          <div className="about__me-image">
             <img className="picture" src={ME} alt="About Image" /> 
          </div>
        </div> */}

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5 + Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          {/* Github Game */}

          {/* <div id="board">
            <div className="rocks"></div>
            <div className="rocks1">
              
            </div>
            <div id="points">
              0 
                
            </div>
            <div id="sign">Presss Enter to shoot</div>

            <div id="jet"></div>
          </div> */}

            {/* Github Game */}

          
        </div>
      </div>
    </section>
  );
};

export default About;
