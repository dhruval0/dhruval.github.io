import React from "react";
import "./all css files/styles.css";
import Sidebar from "./Sidebar";
import Navbar from "../components/Navbar";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";

function Home(props) {
  return (
    <main>
      <div id="container" className="outerWrapper" touch-action="none" />
      <div class="original">
        <div class="main-outer-wrapper">
          <Sidebar />
          <div className="main-content">
            <Navbar />
            {/* <About /> */}
            {/* <Resume /> */}
            {/* <Portfolio /> */}
            {/* <Blog /> */}
            {/* <Contact /> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
