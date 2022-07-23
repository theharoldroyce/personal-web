import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faInstagram,faLinkedin,faGithub,} from "@fortawesome/free-brands-svg-icons";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import {SiJavascript,SiTailwindcss,SiCplusplus,SiCsharp,SiPhp,SiWordpress,SiMysql,SiFirebase,} from "react-icons/si";
import React from "react";
import "./about.css";
import Id from "../img/id.JPG";

function About() {
  return (
    <div className="a" href="#About">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Id} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I am a student of City College of Calapan taking up Bachelor of Science in Information Systems with specialization in Web Desiging and development.
        Dedicated to work on projects to make easy for the users to appreciate an application, websites, or other digital products.
        I also have basic knowledge in developing web applications using
        </p>
        <div className="a-ics">

          <a className="FaHtml5">
            <FaHtml5 />
          </a>
          <a className="FaCss3Alt ">
            <FaCss3Alt />
          </a>
          <a className="SiJavascript">
            <SiJavascript />
          </a>
          <a className="FaReact">
            <FaReact />
          </a>
          <a className="FaBootstrap">
            <FaBootstrap />
          </a>
          <a className="SiTailwindcss">
            <SiTailwindcss />
          </a>
        </div>
        <div className="a-ics">
          <a className="SiCplusplus">
            <SiCplusplus />
          </a>
          <a className="SiCsharp">
            <SiCsharp />
          </a>
          <a className="SiCsharp">
            <SiPhp />
          </a>
          <a className="SiWordpresss">
            <SiWordpress />
          </a>
          <a className="SiMysql">
            <SiMysql />
          </a>
          <a className="SiFirebase">
            <SiFirebase />
          </a>
        </div>
        <h1 className="a-ic title">Let's be Connected!</h1>
        <div className="a-ic">
          <a href="https://www.facebook.com/harold.royce" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faFacebook}
              className="faFacebook"
            ></FontAwesomeIcon>
          </a>
          <a href="https://www.facebook.com/harold.royce" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faInstagram}
              className="faInstagram"
            ></FontAwesomeIcon>
          </a>
          <a href="https://www.linkedin.com/in/harold-royce-anonuevo-9929bb229/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="faLinkedin"
            ></FontAwesomeIcon>
          </a>
          <a href="https://github.com/theharoldroyce" target="_blank" rel="noopener noreferrer">
            {" "}
            <FontAwesomeIcon
              icon={faGithub}
              className="faGithub"
            ></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  );
}
export default About;
