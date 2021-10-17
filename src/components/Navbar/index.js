import React, { useContext } from "react";

import "./index.scss";
import { AppContext } from "../context";

const Navbar = () => {
  const {
    isDarkModeOn,
    setIsDarkModeOn,
    isMobileNavToggled,
    setIsMobileNavToggled,
  } = useContext(AppContext);
  const toggleDarkMode = () => {
    setIsDarkModeOn(!isDarkModeOn);
  };
  const toggleMobileNav = () => {
    setIsMobileNavToggled(!isMobileNavToggled);
    console.log(document.body.classList);
  };
  return (
    <div className="navbar-container">
      <div className="navbar">
        <ul className="navbar-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div onClick={toggleDarkMode} className="navbar-theme-switcher">
          {isDarkModeOn ? (
            <i className="uil uil-sun"></i>
          ) : (
            <i className="uil uil-moon"></i>
          )}
        </div>
        <div onClick={toggleMobileNav} className="navbar-toggle">
          <i className="uil uil-apps"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
