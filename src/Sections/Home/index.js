import React from "react";
import { useTheme } from "styled-components";

import { StyledHome } from "./styled-home";
import heroImage from "../../images/hero.svg";
import Button from "../../components/Button";

const Home = () => {
  const theme = useTheme();
  return (
    <StyledHome id="home">
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
            bgColor={theme.primaryColor}
            textColor="#fff"
            text="Contact Me"
            icon="uil uil-arrow-right"
          />
        </div>
      </div>
      <div className="home-image">
        <img src={heroImage} alt="hero" />
      </div>
    </StyledHome>
  );
};

export default Home;
