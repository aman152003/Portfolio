import React, { useContext } from "react";

import { StyledNavbar } from "./styled-navbar";
import { AppContext } from "../context";

const Navbar = () => {
  const {
    isDarkModeOn,
    setIsDarkModeOn,
    isMobileNavToggled,
    setIsMobileNavToggled,
    darkMode,
  } = useContext(AppContext);
  const toggleDarkMode = () => {
    setIsDarkModeOn(!isDarkModeOn);
    localStorage.setItem("isDarkModeOn", !isDarkModeOn);
  };
  const toggleMobileNav = () => {
    setIsMobileNavToggled(!isMobileNavToggled);
  };
  return (
    <StyledNavbar>
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
        <div
          onClick={() => {
            toggleDarkMode();
          }}
          className="navbar-theme-switcher"
        >
          {darkMode ? (
            <i className="uil uil-sun"></i>
          ) : (
            <i className="uil uil-moon"></i>
          )}
        </div>
        <div onClick={toggleMobileNav} className="navbar-toggle">
          <i className="uil uil-apps"></i>
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
