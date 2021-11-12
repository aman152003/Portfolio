import styled from "styled-components";

export const StyledMobileNav = styled.div`
  height: 25vh;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  .mobile-navbar-links {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #0a192f;
      width: 6rem;
      text-decoration: none;
      i {
        font-size: ${(props) => props.theme.iconSize};
      }
    }
  }
`;
