import styled from "styled-components";

export const StyledSkills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  li {
    color: ${(props) => props.theme.textColor2};
    font-weight: 600;
  }
  .skills-list {
    display: flex;
    justify-content: space-between;
    padding: ${(props) => props.theme.paddingDesktop};
    margin-top: 1rem;
    border: 0.2rem solid ${(props) => props.theme.primaryColor};
    border-radius: 0.2rem;
    background-color: ${(props) => props.theme.containerColor};
    @media (max-width: 500px) {
      padding: ${(props) => props.theme.paddingMobile};
    }
  }
`;
