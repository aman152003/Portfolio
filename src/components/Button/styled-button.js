import styled from "styled-components";
export const StyledButton = styled.a`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  transition: 0.1s linear;
  font-size: 1rem;
  width: fit-content;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  i {
    font-size: var(--icon-size);
  }
`;
