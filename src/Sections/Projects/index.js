import React from "react";

import { StyledProjects } from "./styled-projects";
import data from "../../components/data";
import Project from "../../components/Project";

const Projects = () => {
  return (
    <StyledProjects id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {data.map((item) => {
          return (
            <Project
              name={item.name}
              about={item.about}
              tools={item.tools}
              github={item.github}
              live={item.live}
            />
          );
        })}
      </div>
    </StyledProjects>
  );
};

export default Projects;
