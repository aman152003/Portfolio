import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  margin-top: ${(props) => props.theme.marginDesktop};
  @media (max-width: 972px) {
    margin-top: ${(props) => props.theme.marginTablet};
  }
  @media (max-width: 500px) {
    margin-top: ${(props) => props.theme.marginMobile};
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
  .home-text {
    max-width: 600px;
    @media (max-width: 800px) {
      order: 2;
    }
    h1 {
      color: ${(props) => props.theme.textColor1};
    }
    h3 {
      color: ${(props) => props.theme.textColor2};
    }
    p {
      color: ${(props) => props.theme.textColor2};
    }
    .home-btn {
      margin-top: 2rem;
    }
  }
  .home-image {
    max-width: 600px;
    @media (max-width: 800px) {
      order: 1;
    }
    img {
      width: 100%;
      border-radius: 1rem;
    }
  }
`;
