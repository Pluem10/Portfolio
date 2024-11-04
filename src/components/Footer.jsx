import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <p>Nitiphon Sombat </p>
      </div>
      <div className="middle-footer">
        <ul className="footer-menu">
          <li className="footer_menu_list">
            <a href="#home">Home</a>
          </li>
          <li className="footer_menu_list">
            <a href="#about">About</a>
          </li>
          <li className="footer_menu_list">
            <a href="#projects">Projects</a>
          </li>
          <li className="footer_menu_list">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-social-icons">
        <div className="icon">
          <a href="https://www.instagram.com/satunaja99/">
            <i className="uil uil-instagram-alt"></i>
          </a>
        </div>
        <div className="icon">
          <a href="https://www.facebook.com/pluem.nitiphon/">
            <i className="uil uil-facebook"></i>
          </a>
        </div>
        <div className="icon">
          <a href="https://github.com/Pluem10">
            <i className="uil uil-github"></i>
          </a>
        </div>
      </div>
      <div className="bottom-footer">
        <p>
          Copyright &copy;{" "}
          <a href="#home" style={{ textDecoration: "none" }}>
            SatuNaja
          </a>{" "}
          - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
