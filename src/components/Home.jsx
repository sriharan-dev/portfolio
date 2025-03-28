import React from "react";
import "./Home.css";
import { FaDownload } from "react-icons/fa";
const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="home-left">
          <h1>
            Hi there, 
            <span class="name">
               I'm <span className="name-color">Sri Haran</span>
            </span>
          </h1>

          <p className="home-description">
            Front-end Developer with a passion for creating beautiful and
            functional web applications.
          </p>
          <a href="sriharan_resume.docx" download className="download-cv">
            <FaDownload /> Download CV
          </a>
        </div>
        <div className="home-right">
          <img src="sri-edit-4.png" alt="Sri Haran" className="home-img" />
        </div>
      </div>
    </section>
  );
};

export default Home;
