import React from "react";
import Nitiphonsombat from "../assets/download/Nitiphonsombat.pdf";

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
            <div className="about-btn">
              <div className="nav-button">
                <a href={Nitiphonsombat} target="_blank">
                  <button className="btn">
                    Download CV <i className="uil uil-import"></i>
                  </button>
                </a>
              </div>
            </div>
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
              <span>CSS</span>
              <span>Javascript</span>
              <span>Bootstrap</span>
              <span>Tailwind</span>
              <span>React</span>
              <span>Figma</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>BackEnd</h3>
            </div>
            <div className="skills-list">
              <span>PHP</span>
              <span>Javascript</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Database</h3>
            </div>
            <div className="skills-list">
              <span>MYSQL</span>
              <span>PostgreSQL</span>
              <span>MongoSQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBox;
