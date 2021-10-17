import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";

import "./App.scss";
import { AppContext } from "./components/context";
import { GlobalStyles } from "./theme";
import { lightTheme } from "./theme";
import { darkTheme } from "./theme";
import ScrollToTop from "./components/ScrollToTop";
import MobileNav from "./components/MobileNav";
import Navbar from "./components/Navbar";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import Footer from "./components/Footer";

const App = () => {
  const { isDarkModeOn } = useContext(AppContext);
  return (
    <ThemeProvider theme={isDarkModeOn ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className="app-container">
        <ScrollToTop />
        <MobileNav />
        <Navbar />
        <div className="app">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
