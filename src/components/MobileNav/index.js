import React, { useContext } from "react";

import "./index.scss";
import { AppContext } from "../context";

const MobileNav = () => {
  const { isMobileNavToggled } = useContext(AppContext);
  return (
    <div
      style={isMobileNavToggled ? { display: "flex" } : { display: "none" }}
      className="mobile-navbar"
    >
      <ul className="mobile-navbar-links">
        <li>
          <a href="#about">
            <i class="uil uil-user"></i>About
          </a>
        </li>
        <li>
          <a href="#skills">
            <i class="uil uil-clipboard-notes"></i>Skills
          </a>
        </li>
        <li>
          <a href="#projects">
            <i class="uil uil-scenery"></i>Projects
          </a>
        </li>
        <li>
          <a href="#contact">
            <i class="uil uil-navigator"></i>Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
