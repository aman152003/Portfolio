import React from "react";

import "./index.scss";
import heroImage from "../../images/hero.svg";
import Button from "../../components/Button";

const Home = () => {
  return (
    <section id="home">
      <div className="home-text">
        <h1>Hi, I'am Aman.</h1>
        <h3>I build amazing things for the web.</h3>
        <p>
          I am a web developer specializing in Front-End development. A MERN
          Stack enthusiast, JavaScript lover.
        </p>
        <div className="home-btn">
          <Button
            link="#contact"
            bgColor="var(--primary-color)"
            textColor="var(--container-color)"
            text="Contact Me"
            icon="uil uil-arrow-right"
          />
        </div>
      </div>
      <div className="home-image">
        <img src={heroImage} alt="hero" />
      </div>
    </section>
  );
};

export default Home;
