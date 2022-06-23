import React from "react";
import { IoChevronDownOutline, IoEyeOutline } from "react-icons/io5";
const portfolioImg = require("../assets/project-1.jpg");
const portfolioImg1 = require("../assets/project-2.png");
const portfolioImg2 = require("../assets/project-3.jpg");
const portfolioImg3 = require("../assets/project-4.png");
const portfolioImg4 = require("../assets/project-5.png");
const portfolioImg5 = require("../assets/project-6.png");
const portfolioImg6 = require("../assets/project-7.png");
const portfolioImg7 = require("../assets/project-8.jpg");
const portfolioImg8 = require("../assets/project-9.png");

function Portfolio(props) {
  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button className="active" data-filter-btn>
              All
            </button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Web design</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Applications</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Web development</button>
          </li>
        </ul>

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-selecct-value>
              Select category
            </div>

            <div className="select-icon">
              <IoChevronDownOutline />
            </div>
          </button>

          <ul className="select-list">
            <li className="select-item">
              <button data-select-item>All</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web design</button>
            </li>

            <li className="select-item">
              <button data-select-item>Applications</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web development</button>
            </li>
          </ul>
        </div>

        <ul className="project-list">
          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IoEyeOutline />
                </div>

                <img src={portfolioImg} alt="finance" loading="lazy" />
              </figure>

              <h3 className="project-title">Finance</h3>

              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IoEyeOutline />
                </div>

                <img src={portfolioImg1} alt="orizon" loading="lazy" />
              </figure>

              <h3 className="project-title">Orizon</h3>

              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web design"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IoEyeOutline />
                </div>

                <img src={portfolioImg2} alt="fundo" loading="lazy" />
              </figure>

              <h3 className="project-title">Fundo</h3>

              <p className="project-category">Web design</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="applications"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IoEyeOutline />
                </div>

                <img src={portfolioImg3} alt="brawlhalla" loading="lazy" />
              </figure>

              <h3 className="project-title">Brawlhalla</h3>

              <p className="project-category">Applications</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web design"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IoEyeOutline />
                </div>

                <img src={portfolioImg4} alt="dsm." loading="lazy" />
              </figure>

              <h3 className="project-title">DSM.</h3>

              <p className="project-category">Web design</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web design"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IoEyeOutline />
                </div>

                <img src={portfolioImg5} alt="metaspark" loading="lazy" />
              </figure>

              <h3 className="project-title">MetaSpark</h3>

              <p className="project-category">Web design</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IoEyeOutline />
                </div>

                <img src={portfolioImg6} alt="summary" loading="lazy" />
              </figure>

              <h3 className="project-title">Summary</h3>

              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="applications"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IoEyeOutline />
                </div>

                <img src={portfolioImg7} alt="task manager" loading="lazy" />
              </figure>

              <h3 className="project-title">Task Manager</h3>

              <p className="project-category">Applications</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IoEyeOutline />
                </div>

                <img src={portfolioImg8} alt="arrival" loading="lazy" />
              </figure>

              <h3 className="project-title">Arrival</h3>

              <p className="project-category">Web development</p>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default Portfolio;
