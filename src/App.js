import React, { useContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import { AppContext } from "./components/context";
import { StyledApp } from "./styled-app";
import { GlobalStyles, lightTheme, darkTheme } from "./theme";
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
  const { isDarkModeOn, darkMode, setDarkMode } = useContext(AppContext);
  useEffect(() => {
    setDarkMode(JSON.parse(localStorage.getItem("isDarkModeOn")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkModeOn]);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <StyledApp>
        <GlobalStyles />
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
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
