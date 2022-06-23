import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoCalendarOutline,
  IoLocationOutline,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
} from "react-icons/io5";
const profilePhoto = require("../assets/my-avatar.png");

function Sidebar(props) {
  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={profilePhoto} alt="Dhruval Dhorajia" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Dhruval Dhorajia">
            Dhruval Dhorajia
          </h1>

          <p className="title">Python Developer</p>
        </div>

        <div id="container" touch-action="none"></div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>
            Show Contacts <IoIosArrowDown />
          </span>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IoMailOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:richard@example.com" className="contact-link">
                dhruvaldhorajia2014@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoPhonePortraitOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+918154832513" className="contact-link">
                +91 8154832513
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoCalendarOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="1982-06-23">June 2, 1999</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoLocationOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Vadodara, Gujarat, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="#fb" className="social-link">
              <IoLogoFacebook />
            </a>
          </li>

          <li className="social-item">
            <a href="https://github.com/dhruval0" className="social-link">
              <IoLogoTwitter />
            </a>
          </li>

          <li className="social-item">
            <a href="#insta" className="social-link">
              <IoLogoInstagram />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
