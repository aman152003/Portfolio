import styled from "styled-components";

export const StyledApp = styled.div`
  background-color: ${(props) => props.theme.bodyColor};
  .app {
    width: 85vw;
    max-width: 1400px;
    overflow-x: hidden;
    margin: auto;
    padding-top: ${(props) => props.theme.paddingDesktop};
    @media (max-width: 500px) {
      width: 95vw;
    }
  }
`;
