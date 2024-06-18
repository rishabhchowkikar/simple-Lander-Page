import React from "react";
import logo from "../../Assests/logo.svg";
import logo_txt from "../../Assests/logo2.webp";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <img className="logo_txt" src={logo_txt} alt="" />
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="nav-contact">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
