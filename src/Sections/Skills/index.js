import React from "react";

import { StyledSkills } from "./styled-skills";

const Skills = () => {
  return (
    <StyledSkills id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        <ul className="skills-list-left">
          <li>HTML</li>
          <li>CSS</li>
          <li>SCSS</li>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Responsive Design</li>
        </ul>
        <ul className="skills-list-right">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>Material Ui</li>
          <li>Styled Components</li>
          <li>Version Control - Git</li>
        </ul>
      </div>
    </StyledSkills>
  );
};

export default Skills;
