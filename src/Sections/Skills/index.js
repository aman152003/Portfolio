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
          <li>Bootstrap</li>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
        </ul>
        <ul className="skills-list-right">
          <li>Responsive Design</li>
          <li>Material Ui</li>
          <li>Styled Components</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </StyledSkills>
  );
};

export default Skills;
