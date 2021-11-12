import styled from "styled-components";

export const StyledScrollToTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.textColor1};
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  position: fixed;
  bottom: 10vh;
  right: 5vw;
  i {
    font-size: ${(props) => props.theme.iconSize};
    color: #fff;
  }
  &:hover {
    cursor: pointer;
  }
`;
