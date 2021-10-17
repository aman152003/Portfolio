import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
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
  primaryColor: "hsl(250, 57%, 53%)",
  titleColor: "hsl(250, 8%, 15%)",
  textColor: "hsl(250, 8%, 45%)",
  bodyColor: "hsl(250, 60%, 99%)",
  containerColor: "#fff",
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
  primaryColor: "hsl(250, 30%, 8%)",
  titleColor: "hsl(250, 8%, 95%)",
  textColor: "hsl(250, 29%, 16%)",
  bodyColor: "hsl(250, 28%, 12%)",
  containerColor: "hsl(250, 29%, 16%)",
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
