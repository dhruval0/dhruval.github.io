import React from "react";
const blogImg = require("../assets/blog-1.jpg");
const blogImg1 = require("../assets/blog-2.jpg");
const blogImg2 = require("../assets/blog-3.jpg");
const blogImg3 = require("../assets/blog-4.jpg");
const blogImg4 = require("../assets/blog-5.jpg");
const blogImg5 = require("../assets/blog-6.jpg");

function Blog(props) {
  return (
    <article className="blog" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          <li className="blog-post-item">
            <a href="#">
              <figure className="blog-banner-box">
                <img
                  src={blogImg}
                  alt="Design conferences in 2022"
                  loading="lazy"
                />
              </figure>

              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">Design</p>

                  <span className="dot"></span>

                  <time dateTime="2022-02-23">Fab 23, 2022</time>
                </div>

                <h3 className="h3 blog-item-title">
                  Design conferences in 2022
                </h3>

                <p className="blog-text">
                  Veritatis et quasi architecto beatae vitae dicta sunt,
                  explicabo.
                </p>
              </div>
            </a>
          </li>

          <li className="blog-post-item">
            <a href="#">
              <figure className="blog-banner-box">
                <img
                  src={blogImg1}
                  alt="Best fonts every designer"
                  loading="lazy"
                />
              </figure>

              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">Design</p>

                  <span className="dot"></span>

                  <time dateTime="2022-02-23">Fab 23, 2022</time>
                </div>

                <h3 className="h3 blog-item-title">
                  Best fonts every designer
                </h3>

                <p className="blog-text">
                  Sed ut perspiciatis, nam libero tempore, cum soluta nobis est
                  eligendi.
                </p>
              </div>
            </a>
          </li>

          <li className="blog-post-item">
            <a href="#">
              <figure className="blog-banner-box">
                <img src={blogImg2} alt="Design digest #80" loading="lazy" />
              </figure>

              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">Design</p>

                  <span className="dot"></span>

                  <time dateTime="2022-02-23">Fab 23, 2022</time>
                </div>

                <h3 className="h3 blog-item-title">Design digest #80</h3>

                <p className="blog-text">
                  Excepteur sint occaecat cupidatat no proident, quis nostrum
                  exercitationem ullam corporis suscipit.
                </p>
              </div>
            </a>
          </li>

          <li className="blog-post-item">
            <a href="#">
              <figure className="blog-banner-box">
                <img
                  src={blogImg3}
                  alt="UI interactions of the week"
                  loading="lazy"
                />
              </figure>

              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">Design</p>

                  <span className="dot"></span>

                  <time dateTime="2022-02-23">Fab 23, 2022</time>
                </div>

                <h3 className="h3 blog-item-title">
                  UI interactions of the week
                </h3>

                <p className="blog-text">
                  Enim ad minim veniam, consectetur adipiscing elit, quis
                  nostrud exercitation ullamco laboris nisi.
                </p>
              </div>
            </a>
          </li>

          <li className="blog-post-item">
            <a href="#">
              <figure className="blog-banner-box">
                <img
                  src={blogImg4}
                  alt="The forgotten art of spacing"
                  loading="lazy"
                />
              </figure>

              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">Design</p>

                  <span className="dot"></span>

                  <time dateTime="2022-02-23">Fab 23, 2022</time>
                </div>

                <h3 className="h3 blog-item-title">
                  The forgotten art of spacing
                </h3>

                <p className="blog-text">
                  Maxime placeat, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </a>
          </li>

          <li className="blog-post-item">
            <a href="#">
              <figure className="blog-banner-box">
                <img src={blogImg5} alt="Design digest #79" loading="lazy" />
              </figure>

              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">Design</p>

                  <span className="dot"></span>

                  <time dateTime="2022-02-23">Fab 23, 2022</time>
                </div>

                <h3 className="h3 blog-item-title">Design digest #79</h3>

                <p className="blog-text">
                  Optio cumque nihil impedit uo minus quod maxime placeat, velit
                  esse cillum.
                </p>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default Blog;
