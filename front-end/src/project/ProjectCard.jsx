import { useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
export default function ProjectCard({ project }) {
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