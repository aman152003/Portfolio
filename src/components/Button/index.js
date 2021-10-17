import React from "react";

import "./index.scss";

const Button = ({ bgColor, textColor, text, icon, link }) => {
  return (
    <a
      href={link}
      style={{ backgroundColor: bgColor, color: textColor }}
      className="cta-btn"
    >
      {text}
      <i className={icon}></i>
    </a>
  );
};

export default Button;
