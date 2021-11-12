import styled from "styled-components";

export const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.theme.marginDesktop};
  scroll-margin-top: 10vh;
  @media (max-width: 972px) {
    margin-top: ${(props) => props.theme.marginTablet};
  }
  @media (max-width: 500px) {
    margin-top: ${(props) => props.theme.marginMobile};
  }
  h2 {
    color: ${(props) => props.theme.textColor1};
  }
`;
