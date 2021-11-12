import styled from "styled-components";

export const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  border: 0.2rem solid ${(props) => props.theme.primaryColor};
  border-radius: 0.2rem;
  padding: ${(props) => props.theme.paddingDesktop};
  margin-top: 1rem;
  @media (max-width: 500px) {
    padding: ${(props) => props.theme.paddingMobile};
  }
  h3 {
    color: ${(props) => props.theme.textColor1};
  }
  p {
    color: ${(props) => props.theme.textColor2};
  }
  .project-tools {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    li {
      background-color: ${(props) => props.theme.textColor2};
      color: #fff;
      padding: 0.1rem 0.2rem;
      border-radius: 0.2rem;
    }
  }
  .project-btns {
    display: flex;
    gap: 0.5rem;
    margin-top: 2rem;
  }
`;
