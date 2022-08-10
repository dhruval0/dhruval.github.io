import React from "react";
import { IoCloseOutline } from "react-icons/io5";
const iconDesign = require("../assets/icon-design.svg");
const iconDesign1 = require("../assets/icon-dev.svg");
const iconDesign2 = require("../assets/icon-app.svg");
const iconDesign3 = require("../assets/icon-photo.svg");
const testimonialsImg = require("../assets/Dr_memoji.png");
const testimonialsImg1 = require("../assets/Sir_memoji.png");
const testimonialsImg2 = require("../assets/avatar-3.png");
const testimonialsImg3 = require("../assets/avatar-4.png");
const iconQueote = require("../assets/icon-quote.svg");

function About(props) {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I am a highly skilled and experienced software engineer. I have worked
          on a variety of software development projects, including developing
          desktop applications, web applications, and mobile applications. I
          have a strong technical background and a deep understanding of
          software development process. I am a quick learner and have a strong
          ability to solve complex problems. I am also a good team player and
          have excellent communication skills.
        </p>

        <p>
          My job is to build your backend application so that it is functional
          and user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way.
        </p>
      </section>

      <section className="skills">
        <h3 className="h3 skills-title">My Skills</h3>
        <ul className="skill-one">
          <li>
            <span>Python</span>
          </li>
          <li>
            <span>Docker</span>
          </li>
          <li>
            <span>Django</span>
          </li>
          <li>
            <span>FastAPI</span>
          </li>
          <li>
            <span>Flask</span>
          </li>
          <li>
            <span>Jenkins</span>
          </li>
          <li>
            <span>PostgreSQL</span>
          </li>
          <li>
            <span>MySQL</span>
          </li>
          <li>
            <span>Selenium</span>
          </li>
          <li>
            <span>SQ-Lite</span>
          </li>
          <li>
            <span>Mongo-DB</span>
          </li>
          <li>
            <span>Scrapy</span>
          </li>
          <li>
            <span>Java</span>
          </li>
          <li>
            <span>JavaScript</span>
          </li>
          <li>
            <span>HTML</span>
          </li>
          <li>
            <span>Nginx</span>
          </li>
          <li>
            <span>Apache</span>
          </li>
          <li>
            <span>Gunicorn</span>
          </li>
          <li>
            <span>Sklearn</span>
          </li>
          <li>
            <span>Hugging-face Hub</span>
          </li>
          <li>
            <span>Gensim</span>
          </li>
          <li>
            <span>Git</span>
          </li>
          <li>
            <span>Github</span>
          </li>
          <li>
            <span>GitLab</span>
          </li>
          <li>
            <span>BitBucket</span>
          </li>
          <li>
            <span>CI/CD</span>
          </li>
          <li>
            <span>Linux</span>
          </li>
          <li>
            <span>Microsoft Azure</span>
          </li>
          <li>
            <span>Google Cloud Platform(GCP)</span>
          </li>
          <li>
            <span>Amazon Web Service(AWS)</span>
          </li>
        </ul>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src={iconDesign.default} alt="design icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Backend Development</h4>

              <p className="service-item-text">
                I'm in charge of designing and maintaining web application
                back-end components. To guarantee that the application satisfies
                all functional and performance criteria, I collaborate closely
                with front-end engineers and web designers. Strong
                problem-solving ability and analytical thinking are two of my
                most crucial qualifications for a backend python coder.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src={iconDesign1.default}
                alt="Web development icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">AI/ML engineer</h4>

              <p className="service-item-text">
                I'm in charge of developing and deploying machine learning and
                artificial intelligence models. I work with data scientists to
                learn more about data sets and algorithms, as well as to design
                and implement scalable solutions. I also collaborate with
                software engineers to integrate these technologies into
                production systems.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src={iconDesign2.default} alt="mobile app icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Devops Engineer</h4>

              <p className="service-item-text">
                I am the one in control of of software development and delivery
                operations, such as CI/CD pipeline design and implementation,
                monitoring and logging, and infrastructure provisioning and
                administration. I collaborate closely with software developers
                and other technical employees to ensure that code updates are
                deployed quickly and consistently, and that systems are always
                up and operating. In order to enhance efficiency and quality, I
                also automate and simplify operations.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src={iconDesign3.default} alt="camera icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Bug Bounty Hunter</h4>

              <p className="service-item-text">
                I'm an ethical hacker who assists businesses in identifying and
                repairing security flaws in their systems and apps. I'm
                recognised as a security researcher or a white hat hacker. I
                utilise my skills and experience to identify and disclose
                security flaws to the companies for which I work. Because I give
                an incentive for security researchers to uncover and disclose
                flaws, this programme can be an effective approach to find and
                repair security issues.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={testimonialsImg}
                  alt="Dr. Jenish Dhanani"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Dr. Jenish Dhanani
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Dhruval has been a vital component of our team for the past
                  year, and I've had the pleasure of working with him. Dhruval
                  is a highly skilled software engineer who has assisted us in
                  the development of a number of complicated applications. He's
                  also a superb communicator who is constantly eager to share
                  what he knows with others. I would highly recommend Dhruval to
                  anyone looking for an exceptional software engineer.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={testimonialsImg1}
                  alt="Kaushal Khokhar"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Kaushal Khokhar
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  I've known Dhruval for two years and consider him to be an
                  excellent software developer. He possesses a rare blend of
                  technical ability and interpersonal abilities, making him an
                  invaluable team member. Dhruval is a delight to deal with and
                  is always eager to go the additional mile to get the task
                  done. He has a lot of experience and cares a lot about the
                  client's demands.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={testimonialsImg2}
                  alt="Emily evans"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Emily evans
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Dhruval was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={testimonialsImg3}
                  alt="Henry william"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Henry william
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Dhruval was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <div className="modal-container" data-modal-container>
        <div className="overlay" data-overlay></div>

        <section className="testimonials-modal">
          <button className="modal-close-btn" data-modal-close-btn>
            <IoCloseOutline />
          </button>

          <div className="modal-img-wrapper">
            <figure className="modal-avatar-box">
              <img
                src={testimonialsImg}
                alt="Daniel lewis"
                width="80"
                data-modal-img
              />
            </figure>

            <img src={iconQueote.default} alt="quote icon" />
          </div>

          <div className="modal-content">
            <h4 className="h3 modal-title" data-modal-title>
              Daniel lewis
            </h4>

            <time dateTime="2021-06-14">14 June, 2021</time>

            <div data-modal-text>
              <p>
                Dhruval was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of client.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src="./assets/images/logo-1-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="./assets/images/logo-2-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="./assets/images/logo-3-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="./assets/images/logo-4-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="./assets/images/logo-5-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="./assets/images/logo-6-color.png" alt="client logo" />
            </a>
          </li>
        </ul>
      </section> */}
    </article>
  );
}

export default About;
