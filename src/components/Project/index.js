import React from "react";
import { useTheme } from "styled-components";

import { StyledProject } from "./styled-project";
import Button from "../Button";

const Project = ({ name, about, tools, github, live }) => {
  const theme = useTheme();
  return (
    <StyledProject>
      <h3>{name}</h3>
      <p>{about}</p>
      <ul className="project-tools">
        {tools.map((tool) => {
          return <li>{tool}</li>;
        })}
      </ul>
      <div className="project-btns">
        <div className="project-live-btn">
          <Button
            bgColor={theme.primaryColor}
            textColor="#fff"
            text="Live"
            icon="uil uil-arrow-up-right"
            link={live}
          />
        </div>
        <div className="project-github-btn">
          <Button
            bgColor={theme.textColor2}
            textColor="#fff"
            text="Github"
            icon="uil uil-github-alt"
            link={github}
          />
        </div>
      </div>
    </StyledProject>
  );
};

export default Project;
