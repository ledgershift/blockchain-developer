import React from "react";
import "../styles/navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <h2 className="logo">Blockchain Dev</h2>
    <ul className="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <button className="hire-me" onClick={() => window.location.href = "#contact"}>Hire Me</button>
  </nav>
);

export default Navbar;