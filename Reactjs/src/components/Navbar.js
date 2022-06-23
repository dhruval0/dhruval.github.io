import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const elementToggleFunc = (elem) => {
    elem.classList.toggle("active");
  };
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button
            className="navbar-link active"
            data-nav-link
            onClick={elementToggleFunc}
          >
            <Link to="/About">About</Link>
          </button>
        </li>

        <li className="navbar-item">
          <button
            className="navbar-link"
            data-nav-link
            onClick={elementToggleFunc}
          >
            <Link to="/Resume">Resume</Link>
          </button>
        </li>

        <li className="navbar-item">
          <button
            className="navbar-link"
            data-nav-link
            onClick={elementToggleFunc}
          >
            <Link to="/Portfolio">Portfolio</Link>
          </button>
        </li>

        <li className="navbar-item">
          <button
            className="navbar-link"
            data-nav-link
            onClick={elementToggleFunc}
          >
            <Link to="/Blog">Blog</Link>
          </button>
        </li>

        <li className="navbar-item">
          <button
            className="navbar-link"
            data-nav-link
            onClick={elementToggleFunc}
          >
            <Link to="/Contact">Contact</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
