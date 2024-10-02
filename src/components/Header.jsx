import React from "react";

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
        <ul className="nav_menu_list nav_list">
          <li>
            <a href="#home" className="nav-link active-link">
              Home
            </a>
          </li>
          <li>
            <a href="#home" className="nav-link ">
              About
            </a>
          </li>
          <li>
            <a href="#home" className="nav-link ">
              Project
            </a>
          </li>
          <li>
            <a href="#home" className="nav-link ">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-button">
        <button className="btn">
          Download CV <i className="uil uil-download-alt"></i>
        </button>
      </div>
      <div className="nav-menu-btn">
        <i className="uil uil-bars" onClick={menufunction}></i>
      </div>
    </nav>
  );
};

export default Header;
