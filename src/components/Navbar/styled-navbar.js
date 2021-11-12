import styled from "styled-components";

export const StyledNavbar = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.bodyColor};
  .navbar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 10vh;
    max-height: 80px;
    width: 85vw;
    max-width: 1400px;
    margin: auto;
    @media (max-width: 500px) {
      width: 95vw;
    }
    .navbar-links {
      display: flex;
      @media (max-width: 600px) {
        display: none;
      }
      li {
        &:not(:first-child) {
          margin-left: 1.5rem;
        }
        a {
          text-decoration: none;
          color: ${(props) => props.theme.textColor1};
        }
      }
    }
    i {
      margin-left: 1.5rem;
      color: ${(props) => props.theme.textColor1};
      font-size: ${(props) => props.theme.iconSize};
      &:hover {
        cursor: pointer;
      }
    }
    .navbar-toggle {
      display: none;
      @media (max-width: 600px) {
        display: block;
      }
    }
  }
`;
