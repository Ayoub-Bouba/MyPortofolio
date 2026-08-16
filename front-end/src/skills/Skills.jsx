import { useState } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiGit,
  SiFigma,
  SiC,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import "./skills.css";

const categories = [
  {
    label: "Frontend",
    accent: "#38BDF8",
    skills: [
      { name: "React", icon: SiReact},
      { name: "Tailwind CSS", icon: SiTailwindcss},
      { name: "JavaScript", icon: SiJavascript},
      { name: "Vite", icon: SiVite},
    ],
  },
  {
    label: "Backend",
    accent: "#34D399",
    skills: [
      { name: "Node.js", icon: SiNodedotjs},
      { name: "Express", icon: SiExpress},
      { name: "MongoDB", icon: SiMongodb},
    ],
  },
  {
    label: "Outils & Autres",
    accent: "#FBBF24",
    skills: [
      { name: "Git", icon: SiGit},
      { name: "Python", icon: SiPython},
      { name: "Prog C", icon: SiC}
    ],
  },
];

function SkillCard({ skill, accent }) {
  const [hover, setHover] = useState(false);
  const Icon = skill.icon || FaCode;

  return (
    <div
      className="skill-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="skill-card-top">
        <div
          className="skill-icon"
          style={{
            backgroundColor: hover ? accent : "rgba(255,255,255,0.06)",
            color: hover ? "#0B0F19" : accent,
          }}
        >
          <Icon />
        </div>
        <span className="skill-name">{skill.name}</span>
      </div>

      
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <p className="skills-eyebrow">Tech Stack</p>
          <h2 className="skills-title">What I Master</h2>
        </div>

        <div className="skills-categories">
          {categories.map((cat) => (
            <div key={cat.label} className="skills-category">
              <div className="category-header">
                <span
                  className="category-dot"
                  style={{ backgroundColor: cat.accent }}
                />
                <h3 className="category-title">{cat.label}</h3>
              </div>

              <div className="skills-grid">
                {cat.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    accent={cat.accent}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}