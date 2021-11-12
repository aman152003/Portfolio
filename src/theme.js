import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
}
body {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

body::-webkit-scrollbar {
  display: none;
}
ul {
  list-style: none;
}
h1 {
  font-size: 2.6rem;
  @media (max-width: 972px) {
    font-size: 2.3rem;
  }
  @media (max-width: 500px) {
    font-size: 2rem;
  }
}
h2 {
  font-size: 2rem;
  @media (max-width: 972px) {
    font-size: 1.8rem;
  }
  @media (max-width: 500px) {
    font-size: 1.4rem;
  }
}
h3 {
  font-size: 1.4rem;
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
}
p {
  font-size: 0.95rem;
}
`;
export const lightTheme = {
  primaryColor: "#5a43cb",
  textColor1: "#242329",
  textColor2: "#6d6a7c",
  bodyColor: "#fbfbfe",
  iconSize: "1.5rem",
  iconSizeLarge: "2.5rem",
  marginDesktop: "8rem",
  marginTablet: "6rem",
  marginMobile: "4rem",
  fontBold: "600",
  fontMedium: "500",
  fontNormal: "400",
  paddingDesktop: "2rem",
  paddingMobile: "1.5rem",
};
export const darkTheme = {
  primaryColor: "#00818A",
  textColor1: "#cad4f4",
  textColor2: "#8791af",
  bodyColor: "#0A192F",
  iconSize: "1.5rem",
  iconSizeLarge: "2.5rem",
  marginDesktop: "8rem",
  marginTablet: "6rem",
  marginMobile: "4rem",
  fontBold: "600",
  fontMedium: "500",
  fontNormal: "400",
  paddingDesktop: "2rem",
  paddingMobile: "1.5rem",
};
