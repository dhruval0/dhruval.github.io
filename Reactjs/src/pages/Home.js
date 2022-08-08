import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./all_css_files/styles.css";
import Sidebar from "./Sidebar";
import Navbar from "../components/Navbar";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";

function Home() {
  const [compType, setCompType] = useState("about");

  return (
    <main>
      <div id="container" className="outerWrapper" touch-action="none" />
      <div className="original">
        <div className="main-outer-wrapper">
          <Sidebar />
          <div className="main-content">
            <nav className="navbar">
              <ul className="navbar-list">
                <li className="navbar-item">
                  <button
                    className={
                      compType === "about"
                        ? "navbar-link active"
                        : "navbar-link"
                    }
                    data-nav-link
                    onClick={() => {
                      setCompType("about");
                    }}
                  >
                    <span>About</span>
                  </button>
                </li>

                <li className="navbar-item">
                  <button
                    className={
                      compType === "resume"
                        ? "navbar-link active"
                        : "navbar-link"
                    }
                    data-nav-link
                    onClick={() => {
                      setCompType("resume");
                    }}
                  >
                    <span>Resume</span>
                  </button>
                </li>

                <li className="navbar-item">
                  <button
                    className={
                      compType === "portfolio"
                        ? "navbar-link active"
                        : "navbar-link"
                    }
                    data-nav-link
                    onClick={() => {
                      setCompType("portfolio");
                    }}
                  >
                    <span>Portfolio</span>
                  </button>
                </li>

                <li className="navbar-item">
                  <button
                    className={
                      compType === "blog" ? "navbar-link active" : "navbar-link"
                    }
                    data-nav-link
                    onClick={() => {
                      setCompType("blog");
                    }}
                  >
                    <span>Blog</span>
                  </button>
                </li>

                <li className="navbar-item">
                  <button
                    className={
                      compType === "contact"
                        ? "navbar-link active"
                        : "navbar-link"
                    }
                    data-nav-link
                    onClick={() => {
                      setCompType("contact");
                    }}
                  >
                    <span>Contact</span>
                  </button>
                </li>
              </ul>
            </nav>
            {compType === "about" && <About />}
            {compType === "resume" && <Resume />}
            {compType === "portfolio" && <Portfolio />}
            {compType === "blog" && <Blog />}
            {compType === "contact" && <Contact />}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
