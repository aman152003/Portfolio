import styled from "styled-components";

export const StyledFooter = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  .footer {
    width: 85vw;
    margin: auto;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    max-width: 1400px;
    padding: ${(props) => props.theme.paddingDesktop} 0rem;
    @media (max-width: 800px) {
      flex-direction: column;
    }
    @media (max-width: 500px) {
      width: 95vw;
      padding: ${(props) => props.theme.paddingMobile} 0rem;
    }
    .footer-title {
      @media (max-width: 800px) {
        text-align: center;
      }
      h3 {
        font-size: 1.6rem;
      }
    }
    .footer-links {
      display: flex;
      @media (max-width: 800px) {
        flex-direction: column;
        margin: 1rem 0rem;
      }
      li {
        @media (max-width: 800px) {
          text-align: center;
        }
        &:not(:first-child) {
          margin-left: 1.5rem;
          @media (max-width: 800px) {
            margin: 0rem;
          }
        }
        a {
          text-decoration: none;
          color: #fff;
        }
      }
    }
    .footer-social-links {
      display: flex;
      justify-content: flex-end;
      a {
        &:not(:first-child) {
          margin-left: 1.5rem;
        }
        i {
          font-size: ${(props) => props.theme.iconSize};
          color: #fff;
        }
      }
    }
  }
`;
