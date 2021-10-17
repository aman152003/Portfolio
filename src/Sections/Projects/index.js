import React from "react";

import "./index.scss";
import data from "../../components/data";
import Project from "../../components/Project";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {data.map((item) => {
          return (
            <Project name={item.name} about={item.about} tools={item.tools} />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
