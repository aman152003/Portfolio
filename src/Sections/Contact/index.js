import React from "react";

import "./index.scss";
import Button from "../../components/Button";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>
        Feel free to send me an email any time, whether it is about freelance
        work or a project or just to talk about web development. I'll get back
        to you as soon as possible.
      </p>
      <div className="contact-btn">
        <Button
          bgColor="var(--primary-color)"
          textColor="var(--container-color)"
          text="Say Hi!"
          link="mailto:amandeepbisht644@gmail.com"
        />
      </div>
      <div className="contact-social">
        <a
          href="https://www.linkedin.com/in/aman-deep-bisht-0452a8209/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-linkedin-alt"></i>
        </a>
        <a
          href="https://github.com/aman152003"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-github-alt"></i>
        </a>
        <a
          href="https://twitter.com/AmanDeepBisht15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-twitter-alt"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
