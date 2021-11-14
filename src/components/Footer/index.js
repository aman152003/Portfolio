import React from "react";

import { StyledFooter } from "./styled-footer";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer">
        <div className="footer-title">
          <h3>Aman</h3>
          <p>I am a web developer.</p>
        </div>
        <ul className="footer-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <div className="footer-social-links">
          <a
            href="https://www.linkedin.com/in/amandeepbisht"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/aman152003"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>
          <a
            href="https://twitter.com/AmanDeepBisht15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-twitter-alt"></i>
          </a>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
