import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";
function Navbar() {
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">Joker Black Label</h1>
        <ul
          className={Mobile ? "navLinks-mobile" : "navLinks"}
          onClick={() => setMobile(false)}
        >
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/tracks">
            <li>Tracks</li>
          </Link>
          <Link to="artists">
            <li>Artists</li>
          </Link>
          <Link to="minimalcast">
            <li>Minimalcast</li>
          </Link>
        </ul>
        <button className="mobile-meni-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  );
}

export default Navbar;
