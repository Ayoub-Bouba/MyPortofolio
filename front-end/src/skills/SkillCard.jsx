import { useState } from "react";
import { FaCode } from "react-icons/fa";
export default function SkillCard({ skill, accent }) {
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