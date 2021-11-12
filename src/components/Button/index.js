import React from "react";

import { StyledButton } from "./styled-button";

const Button = ({ bgColor, textColor, text, icon, link }) => {
  return (
    <StyledButton
      href={link}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {text}
      <i className={icon}></i>
    </StyledButton>
  );
};

export default Button;
