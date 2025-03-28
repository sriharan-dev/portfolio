import React, { useState } from "react";
import "./Projects.css";
import { Fade } from "react-awesome-reveal";
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "PUROHIDHAR",
      description:
    "Purohidhar is a dedicated platform for booking pooja (ritual) services, designed to both end-users and purohidhars (priests). The end-user app allows users to browse various pooja services, view detailed descriptions, and book rituals as per their preferred date and time. On the other hand, the purohidhar app enables priests to manage bookings, track scheduled services, and receive payments.",
      technologies: "React , PHP",
      links:"https://purogidhar-user.vercel.app/",
      image: "progidhar_logo.png",
      additionalImages: [
        "project-1_1.png",
        "project-1_2.png",
        "project-1_3.png",
      ],
    },
    {
      id: 2,
      title: "ONNBOOK",
      description:
      "OnnBook is a hospital management web application designed for both hospitals and end-users. It provides a seamless appointment booking system where patients can schedule consultations with doctors based on availability. Patients can also make secure online payments for appointments. The application enhance appointment history, reminders, and digital records for better patient-doctor interactions.",
      technologies: "React , PHP",
      image: "oonbook_logo.png",
      additionalImages: [
        "project-2_1.png",
        "project-2_2.png",
        "project-2_3.png",
      ],
    },
    {
      id: 3,
      title: "SRI CHINTHAMANI TRAVELS",
      description:
      "Sri Chinthamani Travels is a complete travel agency platform that offers an online cab booking system. Users can effortlessly book cabs for rides. The platform features a user-friendly interface where customers can browse available vehicles, check pricing, and confirm bookings with secure payment options. The website also includes an image gallery showcasing various car models available for booking.",
      technologies: "HTML, CSS , Bootstrap , JavaScript , PHP , SQL",
      links:"https://github.com/sriharan-dev/sriChinthamani-Travels",
      image: "sriChinthamani_logo.png",
      additionalImages: [
        "project-3_1.png",
        "project-3_2.png",
        "project-3_3.png",
      ],
    },
    {
      id: 4,
      title: "OOVANOO",
      description:
      "Oovanoo is a feature-rich food delivery platform designed for online ordering and doorstep delivery. It connects users with a wide range of restaurants and food partners, allowing them to browse menus, place orders, and track deliveries in real-time. The platform ensures a smooth user experience with secure payment options. Oovanoo supports partner integrations, making it an ideal solution for expanding food businesses.",
      technologies: "HTML, CSS , Bootstrap , JavaScript , PHP , SQL",
      links:"https://github.com/sriharan-dev/oovanoo-website",
      image: "oovanoo_logo.png",
      additionalImages: [
        "project-4_1.png",
        "project-4_2.png",
        "project-4_3.png",
      ],
    },
    {
      id: 5,
      title: "BABY CARE",
      description:
      "A beautifully designed UI template for a baby schooling platform. It provides an engaging interface for parents to explore top-quality education, the best teachers, and excellent child care facilities. The platform highlights a well-equipped play area, interactive study and game sessions, and a focus on mental health schooling for young children.",
      technologies: "HTML , CSS , Bootstrap",
      links:"https://github.com/sriharan-dev/babyCare-template",
      image: "babyCare_logo.png",
      additionalImages: [
        "project-5_1.png",
        "project-5_2.png",
        "project-5_3.png",
      ],
    },
  ];

  const openPopup = (project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  // Auto-scroll carousel effect
  React.useEffect(() => {
    if (!selectedProject) return;

    const interval = setInterval(() => {
      setActiveImageIndex(
        (prev) => (prev + 1) % selectedProject.additionalImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedProject]);

  return (
    <section className="project-section" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
      {projects.map((project, index) => (
  <div className="project-card-container" key={project.id}>
    <Fade duration={1000} delay={index * 300} direction="top">
      <div className="project-card">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="card-bottom">
            <h5 className="card-title project-title text-nowrap">
              {project.title}
            </h5>
            <button
              className="view-more-btn text-nowrap"
              onClick={() => openPopup(project)}
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </Fade>
  </div>
))}
      </div>

      {selectedProject && (
        <div className="project-popup">
          <div className="popup-content">
            <button className="close-btn" onClick={closePopup}>
              ×
            </button>

            <div className="popup-grid">
              <div className="popup-left">
                <div className="image-carousel">
                  <img
                    src={selectedProject.additionalImages[activeImageIndex]}
                    alt={selectedProject.title}
                  />
                </div>

                <div className="carousel-dots">
                  {selectedProject.additionalImages.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${
                        index === activeImageIndex ? "active" : ""
                      }`}
                      onClick={() => setActiveImageIndex(index)}
                    ></span>
                  ))}
                </div>
              </div>

              <div className="popup-right">
                <h3>{selectedProject.title}</h3>
                <p className="popup-description">{selectedProject.description}</p>
                <p>
                  <strong>Technologies:</strong>{" "}
                  <span className="techName">
                    {selectedProject.technologies}
                  </span>
                </p>
                <p className="project-link">
                  <strong>Link:</strong><a href={selectedProject.links} target="_blank">{selectedProject.links}</a>
                  </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
