import { useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import "./project.css";

const projects = [
  {
    title: "Timora",
    description:
      "Luxury watch marketplace with a dark navy & gold design, product gallery, cart, and WhatsApp sharing.",
    image: "/image/project/timora.png",
    tags: ["React", "Tailwind", "React Router", "json-server"],
    liveUrl: "https://bespoke-cocada-ba08f2.netlify.app/",
    codeUrl: "https://github.com/Ayoub-Bouba/watchmarket-fullstack",
    accent: "#D4AF37",
  },
  {
    title: "Velora",
    description:
      "Online fashion store built with HTML, CSS, and JavaScript, hosted on Netlify.",
    image: "/image/project/timora.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://lively-pixie-7097ae.netlify.app/",
    codeUrl: "https://github.com/Ayoub-Bouba/My-project/tree/main/MarketHub",
    accent: "#F472B6",
  },
  {
    title: "Poignet",
    description:
      "Watch store with Swiper sliders and dummyjson API integration for products.",
    image: "/projects/poignet.jpg",
    tags: ["React", "Swiper", "API REST"],
    liveUrl: "https://poignet.netlify.app/",
    codeUrl: "https://github.com/Ayoub-Bouba/ShopMarket",
    accent: "#38BDF8",
  },
  
];

function ProjectCard({ project }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="project-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ borderColor: hover ? project.accent : "rgba(255,255,255,0.1)" }}
    >
      <div
        className="project-bg-image"
        style={{
          backgroundImage: `${project.accent}`,
          opacity: hover ? 1 : 0,
        }}
      />
      <div className="project-bg-shade" style={{ opacity: hover ? 1 : 0 }} />

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description" style={{ opacity: hover ? 0 : 1 }}>
          {project.description}
        </p>

        <div className="project-tags" style={{ opacity: hover ? 0 : 1 }}>
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>

        <div
          className="project-links"
          style={{
            opacity: hover ? 1 : 0,
            pointerEvents: hover ? "auto" : "none",
          }}
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="project-icon-btn"
            style={{ backgroundColor: project.accent }}
          >
            <FiExternalLink />
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="project-icon-btn"
            style={{ backgroundColor: project.accent }}
          >
            <FiGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <p className="projects-eyebrow">Portfolio</p>
          <h2 className="projects-title">My Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}