import React from "react";
import PP from "../assets/download/PP.pdf";

const AboutBox = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h2>About Me</h2>
      </div>
      <div className="row">
        <div className="col">
          <div className="about-info">
            <h3>My Introduction</h3>
            <p>
              Hello! I'm Nitiphon, a passionate web developer with a love for
              creating intuitive, user-friendly applications. With experience in
              front-end technologies like React and Vue.js, I enjoy turning
              complex problems into simple, elegant solutions.
            </p>
          </div>
        </div>

        {/* Skill */}
        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Frontend</h3>
            </div>
            <div className="skills-list">
              <span>HTML</span>
              <span>HTML</span>
              <span>HTML</span>
            </div>
          </div>
          <h3>MySQL</h3>
          <div className="skills-list"></div>
          <div className="skills-box"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutBox;
