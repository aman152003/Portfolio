import React from "react";

import "./index.scss";
import Button from "../../components/Button";

const About = () => {
  return (
    <section id="about">
      <h2>About</h2>
      <p>
        Hello! I'm Aman, a Front End Developer based in Karad, Maharashtra who
        enjoys building stuff with JavaScript and React. I develop fast,
        responsive and accessible websites/web apps which perform well on all
        devices, even on slower networks. Computers have always fascinated me.
        I'm a dentist but I first dabbled into web development out of interest
        in the Internet. I wanted to learn more about how everything was made
        available so easily for anyone to access from any part of the world. I
        started reading about web development in my final year of dentistry and
        then actually started learning web development in internship from
        resources like freeCodeCamp, YouTube, MDN, Reddit, Medium, etc.
      </p>
      <div className="about-btn">
        <Button
          bgColor="var(--container-color)"
          textColor="var(--primary-color)"
          text="Download CV"
          icon="uil uil-download-alt"
        />
      </div>
    </section>
  );
};

export default About;
