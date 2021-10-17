import React from "react";

import "./index.scss";
import Button from "../Button";

const Project = ({ name, about, tools }) => {
  return (
    <div className="project">
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
            bgColor="var(--primary-color)"
            textColor="var(--container-color)"
            text="Live"
            icon="uil uil-arrow-up-right"
          />
        </div>
        <div className="project-github-btn">
          <Button
            bgColor="var(--text-color)"
            textColor="var(--container-color)"
            text="Github"
            icon="uil uil-github-alt"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
