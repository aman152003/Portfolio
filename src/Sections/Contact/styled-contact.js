import styled from "styled-components";

export const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: ${(props) => props.theme.marginDesktop};
  margin-bottom: ${(props) => props.theme.marginDesktop};
  scroll-margin-top: 10vh;
  @media (max-width: 972px) {
    margin-top: ${(props) => props.theme.marginTablet};
    margin-bottom: ${(props) => props.theme.marginTablet};
  }
  @media (max-width: 500px) {
    margin-top: ${(props) => props.theme.marginMobile};
    margin-bottom: ${(props) => props.theme.marginMobile};
  }
  h2 {
    color: ${(props) => props.theme.textColor1};
  }
  p {
    border-top: 0.2rem solid ${(props) => props.theme.primaryColor};
    padding-top: 2rem;
    max-width: 600px;
    color: ${(props) => props.theme.textColor2};
  }
  .contact-btn {
    margin-top: 2rem;
  }
  .contact-social {
    display: flex;
    gap: 1.5rem;
    margin-top: 2rem;
    i {
      font-size: ${(props) => props.theme.iconSizeLarge};
      color: ${(props) => props.theme.textColor1};
    }
  }
`;
