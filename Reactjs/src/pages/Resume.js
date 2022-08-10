import React from "react";
import { IoBookOutline } from "react-icons/io5";
import "../../src/pages/all_css_files/styles.css";

function Resume(props) {
  return (
    <>
      <article className="resume active" data-page="resume">
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <IoBookOutline />
            </div>

            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Alembic Vidhalaya</h4>

              <span>2007 — 2008</span>

              <p className="timeline-text">
                It is the cornerstone of my life's success. It aids my critical
                thinking, decision-making, and problem-solving abilities. It
                also teaches me how to be responsible citizens and social
                contributors. It is the acquisition of information, values,
                skills, and habits.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Babaria Institute of Technology(GTU)
              </h4>

              <span>2016 — 2020</span>

              <p className="timeline-text">
                I received a first-className honours degree in computer science
                and engineering, which encompasses computer systems and
                applications. It includes software, hardware, and network design
                and development. It also encompasses computer science theory and
                practise.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                High school of art and design
              </h4>

              <span>2002 — 2004</span>

              <p className="timeline-text">
                Duis aute irure dolor in reprehenderit in voluptate, quila
                voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
              </p>
            </li>
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <IoBookOutline />
            </div>

            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Team leader</h4>

              <span>2019 — 2020</span>

              <p className="timeline-text">
                During my college years, we worked on a project that used VR
                technology to create a virtual environment utilising Blender and
                Unity technologies. Blender is used to create the objects, while
                Unity is used to provide the scripting and interactive nature.
                The project's purpose was to provide people an overview of the
                BITS (Babaria Institute of Technology) building without them
                having to go there. The parents and students who wanted to take
                a tour of the Collage were the primary target audience for this
                initiative.
              </p>
              <h5 className="h5 project-technologies">
                Technologies: Blender, Unity, Java
              </h5>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">AI Engineer</h4>

              <span>2013 — 2015</span>

              <p className="timeline-text">
                This project used FastAPI to integrate the whole script. PyMupdf
                and PdfMiner were used to extract document information such as
                title, date, language, and statistical data such as number of
                pages, size, and so on. Using Stanza, Huggingface-hub, and
                Spacy, I implemented keyword extractions, text summarization,
                translation, and categorization of provided documents. The
                integration of OpenAI is also part of this project. Moreover,
                deployed this application on GPU server.
              </p>
              <h5 className="h5 project-technologies">
                Technologies: FastAPI, PyMupdf, PdfMiner, Spacy, Gensim,
                Huggingface-hub, Stanza, Pytorch, Git
              </h5>
            </li>

            <li className="timeline-item">
              <h5 className="h5 timeline-item-title">
                Juniour Backend Developer
              </h5>

              <span>2010 — 2013</span>

              <p className="timeline-text">
                Its back-end architecture for mobile/web applications was
                conceived and built. Users, events, notifications, discussions,
                and requests all have their own database, which has been built
                and upgraded. The chat module uses web sockets, the request
                module uses firebase notifications, and the email module uses an
                SMTP server. Dockerization was also applied to the backend
                application.
              </p>
              <h5 className="h5 project-technologies">
                Technologies: FastAPI, MongoDB, Socket-Io, Firebase,
                smtp-server, Docker, S3-Amazon, Git
              </h5>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Juniour Backend Developer
              </h4>

              <span>2010 — 2013</span>

              <p className="timeline-text">
                Using pandas, nltk, spacy, and gensim, I created python scripts
                that implement Text-Preprocessing tasks such as tokenization,
                stopword filtering, stemming, and part-of-speech tagger. This
                scrpits also incorporates the OOP paradigm.
              </p>
              <h5 className="h5 project-technologies">
                Technologies: Pandas, NLTK(Natural language Tool-Kit), Spacy,
                Gensim, Text-preprocessing, Git, FuzzyWuzzy
              </h5>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Seniour Backend Developer
              </h4>

              <span>2010 — 2013</span>

              <p className="timeline-text">
                I utilised the PostgreSQL database and implemented Restful APIs
                into the Django framework. Login, signin, and other APIs were
                created. Furthermore, utilising the Microsoft Azure
                architecture, convert text to voice and speech to text into APIs
                and deploy on the server, and utilise blob services to store
                data init. In addition, using the Azure model, I generated a
                subtitle file in the format of srt.
              </p>
              <h5 className="h5 project-technologies">
                Technologies: Django, Microsoft Azure, Text to speech models,
                PostgreSQL, Heroku, Git
              </h5>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Seniour Backend Developer
              </h4>

              <span>2010 — 2013</span>

              <p className="timeline-text">
                Its architecture is based on MongoDB(NoSQL Database) and
                FastAPI. I used selenium, scrapy, and beautifulSoup to collect
                news data from a number of news sources and put it in a
                database. To execute Text-generation operations like
                Text-summarization, use the flask API, which is hosted on Google
                colab with the help of ngrok. On the Contabo server, this
                application was likewise deployed using Node.
              </p>
              <h5 className="h5 project-technologies">
                Technologies: FastAPI, MongoDB, Selenium, Scrapy,
                Huggingface-Hub, Flask, Contabo server, Google Colab, Git
              </h5>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Seniour Backend Developer
              </h4>

              <span>2010 — 2013</span>

              <p className="timeline-text">
                To integrate user-card transaction APIs, I worked on a DRF
                (Django Rest Framework) application. It was implemented using
                the marqeta Platform. Also utilised docker images such as celery
                for task automation, reddis for in-memory data structure
                storage, used as a database, cache, and PostgreSQL database, and
                adminer to see data. CJ-platform was also scraped for affiliate
                marketing.
              </p>
              <h5 className="h5 project-technologies">
                Technologies: Django, Celery, Docker, Reddis, Adminer, Git
                PostgreSQL
              </h5>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Seniour Backend Developer
              </h4>

              <span>2010 — 2013</span>

              <p className="timeline-text">
                Implemented ride-sharing backend built with the Flask framework,
                which includes a Docker container and a MySQL database. For
                permission, JWT tokens were added. Flask-admin was also used to
                integrate the backend of the admin panel. Authentication is
                handled using flask blueprint and csrf exempt.
              </p>
              <h5 className="h5 project-technologies">
                Technologies: Flask, Celery, Docker, Reddis, Git MySQL
              </h5>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Seniour Backend Developer
              </h4>

              <span>2010 — 2013</span>

              <p className="timeline-text">
                Implemented ride-sharing backend built with the Flask framework,
                which includes a Docker container and a MySQL database. For
                permission, JWT tokens were added. Flask-admin was also used to
                integrate the backend of the admin panel. Authentication is
                handled using flask blueprint and csrf exempt.
              </p>
              <h5 className="h5 project-technologies">
                Technologies: Flask, Celery, Docker, Reddis, Git MySQL
              </h5>
            </li>
          </ol>
        </section>

        {/* <section className="skill">
          <h3 className="h3 skills-title">My skills</h3>

          <ul className="skills-list content-card">
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Web design</h5>
                <data value="80">80%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Graphic design</h5>
                <data value="70">70%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Branding</h5>
                <data value="90">90%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">WordPress</h5>
                <data value="50">50%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </li>
          </ul>
        </section> */}
      </article>
    </>
  );
}

export default Resume;
