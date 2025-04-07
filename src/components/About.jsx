import React from "react";
import {
  FaBirthdayCake,
  FaMobile,
  FaEnvelope,
  FaUserTie,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";
import "./About.css";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h1 className="about-title">About <span className="title-color">Me</span></h1>
        <p className="about-subtitle">Front-end Developer</p>
        <p className="about-description">
          I'm eager to learn, grow, and explore new perspectives. I believe that
          every project is a chance to discover, every challenge an opportunity,
          and every day a step toward something greater.
        </p>
        <div className="about-details">
  
          <div className="details-col">
         
            <div className="detail-item">
            <Fade duration={1000} delay={400}direction="top">
              <i className="bi bi-cake detail-icon"></i>
              <span>
                Birthday: <span className="my-data">05-03-2003</span>
              </span>
              </Fade>
            </div>
          
            <div className="detail-item">
            <Fade duration={1000} delay={600}direction="top">
              <i className="bi bi-person detail-icon"></i>
              <span>
                Age: <span className="my-data">22</span>
              </span>
              </Fade>
            </div>
            <div className="detail-item">
            <Fade duration={1000} delay={800}direction="top">
              <i className="bi bi-lightning-charge detail-icon"></i>
              <span>
                Passion: <span className="my-data">Developer</span>
              </span>
              </Fade>
            </div>
            <div className="detail-item">
            <Fade duration={1000} delay={1000}direction="top">
              <i className="bi bi-bicycle detail-icon"></i>
              <span>
                Hobby: <span className="my-data">Ride</span>
              </span>
              </Fade>
            </div>
          
          </div>

          <div className="details-col">
            <div className="detail-item">
            <Fade duration={1000} delay={200}direction="top">
              <i className="bi bi-phone detail-icon"></i>
              <span>
                Mobile: <span className="my-data">8973637030</span>
              </span>
              </Fade>
            </div>
            <div className="detail-item">
            <Fade duration={1000} delay={400}direction="top">
              <i className="bi bi-envelope detail-icon"></i>
              <span>
                Email: <span className="my-data">sriharan20965@gmail.com</span>
              </span>
              </Fade>
            </div>
            <div className="detail-item">
            <Fade duration={1000} delay={600}direction="top">
              <i className="bi bi-person-badge detail-icon"></i>
              <span>
                Role: <span className="my-data">Front-end Developer</span>
              </span>
              </Fade>
            </div>
            <div className="detail-item">
            <Fade duration={1000} delay={800}direction="top">
              <i className="bi bi-briefcase detail-icon"></i>
              <span>
                Freelance: <span className="my-data">Available</span>
              </span>
              </Fade>
            </div>
          </div>
        </div>

        <div className="timeline-section">
          <div className="timeline-container">
            <div className="timeline-col">
              <h3>
                <FaGraduationCap /> Education
              </h3>
              <Fade duration={1000} delay={200}direction="top">
                <div className="time-line-content">
                  <div className="timeline-card">
                    <h4>Bachelor of Computer Science</h4>
                    <p className="time-line-name">
                      JJ College of Arts and Science, Pudukkottai
                    </p>{" "}
                    <p className="timeline-description">
                      Graduated with a CGPA of 8.52, gaining a strong foundation
                      in core computer science concepts, problem-solving, and
                      programming.
                    </p>
                    <p>2021 - 2024</p>
                  </div>
                </div>
              </Fade>
              <Fade duration={1000} delay={300}direction="top">
              <div className="time-line-content">
                <div className="timeline-card">
                  <h4>High School</h4>
                  <p className="time-line-name">
                    S.F.S. Matriculation Higher Secondary School
                  </p>{" "}
                  <p className="timeline-description">
                    Completed higher secondary education with a focus on
                    Computer Science, securing 79% marks. Introduced me to the
                    fundamentals of programming and logical thinking.
                  </p>
                  <p>2020 - 2021</p>
                </div>
              </div>
              </Fade>
            </div>
            <div className="timeline-col">
              <h3>
                <FaBriefcase /> Experience
              </h3>
              <Fade  duration={1000} delay={400}direction="top">
              <div className="time-line-content">
                <div className="timeline-card">
                  <h4>Front-end Developer</h4>
                  <p className="time-line-name">King Phoenix IT Solution and Training</p>
                  <p className="timeline-description">
                    Worked as a Front-end Developer, developing responsive user
                    interfaces using modern web technologies. Collaborated with
                    teams to deliver efficient, and user-friendly web
                    applications.
                  </p>
                  <p>Sept 2024 - April 2025</p>
                </div>
              </div>
              </Fade>
              <Fade duration={1000} delay={500}direction="top">
              <div className="time-line-content">
                <div className="timeline-card">
                  <h4>PHP Developer Intern</h4>
                  <p className="time-line-name">Uk Info Tech</p>
                  <p className="timeline-description">
                  A PHP intern developer with front-end skills works on creating user interfaces using HTML, CSS, and JavaScript, ensuring seamless integration with PHP back-end systems. 
                  </p>
                  <p>2024</p>
                </div>
              </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
