import React from "react";
import { useTheme } from "styled-components";

import { StyledAbout } from "./styled-about";
import Button from "../../components/Button";

const About = () => {
  const theme = useTheme();
  return (
    <StyledAbout id="about">
      <h2>About</h2>
      <p>
        Hello! I'm Aman, a Front End Web Developer based in New Delhi, India who
        enjoys building stuff with JavaScript and React. I develop fast,
        responsive and accessible websites/web apps which perform well on all
        devices. <br></br>
        My love for coding started during covid lockdown when i started learning
        about web development. Since then i have used any means at my disposal
        to get better at what i do. I have used various resources like Udemy,
        Youtube, FreeCodeCamp, Reddit, Documentations, Books etc to learn about
        web development. Sometimes i did feel like this was something that i
        couldn't do but overcoming these challenges was a very fun and rewarding
        experience for me. I have enjoyed every single minute of my coding
        journey so far and i want to keep improving myself.
      </p>
      <div className="about-btn">
        <Button
          bgColor="#fff"
          textColor={theme.primaryColor}
          text="Download CV"
          icon="uil uil-download-alt"
          link="https://drive.google.com/file/d/1h2BdssZJXzxDHFXK-3ptgwSjuivWyFci/view"
        />
      </div>
    </StyledAbout>
  );
};

export default About;
