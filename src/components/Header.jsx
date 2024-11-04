import React from "react";
import Nitiphonsombat from "../assets/download/Nitiphonsombat.pdf";

const Header = () => {
  const menufunction = () => {
    const menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  };

  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">Nitiphon</p>
        <span>.</span>
      </div>
      <div className="nav-menu" id="myNavMenu">
        <ul className="nav_menu_list">
        <li className="nav_list">
            <a href="#home" className="nav-link active-link">
              Home
            </a>
          </li>
          <li className="nav_list">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav_list">
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </li>
        <li className="nav_list">
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
        </ul>
      </div>
      <div className="nav-button">
        <a href={Nitiphonsombat} target="_blank">
          <button className="btn">
            Download CV <i className="uil uil-import"></i>
          </button>
        </a>
      </div>
      <div className="nav-menu-btn">
        <i className="uil uil-bars" onClick={menufunction}></i>
      </div>
    </nav>
  );
};

export default Header;
