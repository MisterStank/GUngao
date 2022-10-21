import './Navbar.css';
import React, { useState } from "react";
import Navitems from './Navitems';

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <p href="#" className="nav__brand">
        GUNGAO
      </p>
      <ul className={active}>
        <Navitems item="Home" tolink="/"></Navitems>
        <Navitems item="How to use" tolink="/how-to-use"></Navitems>
        <Navitems item="About us" tolink="/about-us"></Navitems>
        <button id="log-in-button">Log-in</button>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar
