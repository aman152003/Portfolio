import styled from "styled-components";

export const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: ${(props) => props.theme.marginDesktop};
  padding: ${(props) => props.theme.paddingDesktop};
  border-radius: 1rem;
  scroll-margin-top: 10vh;
  background-color: ${(props) => props.theme.primaryColor};
  @media (max-width: 972px) {
    margin-top: ${(props) => props.theme.marginTablet};
  }
  @media (max-width: 500px) {
    margin-top: ${(props) => props.theme.marginMobile};
    padding: ${(props) => props.theme.paddingMobile};
  }
  h2 {
    color: #fff;
  }
  p {
    color: #fff;
  }
  .about-btn {
    margin-top: 2rem;
  }
`;
