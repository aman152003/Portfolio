import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileNavToggled, setIsMobileNavToggled] = useState(false);
  return (
    <AppContext.Provider
      value={{
        isDarkModeOn,
        setIsDarkModeOn,
        isMobileNavToggled,
        setIsMobileNavToggled,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
