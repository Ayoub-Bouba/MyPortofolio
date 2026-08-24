import "./skills.css";
import { categories } from "../../constants";
import SkillCard from "./SkillCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";



export default function Skills() {
  useGSAP(()=>{
    const skillsTimeline=gsap.timeline({
      scrollTrigger:{
        trigger:"#skills",
        start:"top 80%"
      }
    })
    skillsTimeline
    .from(".skills-header p",{
      opacity:0,
      yPercent:100,
      ease:"power1.inOut",
    })
    .from(".skills-header h2",{
      opacity:0,
      yPercent:100,
      ease:"power1.inOut",
      stagger:0.02
    })
    .from(".skills-grid div",{
      opacity:0,
      ease:"power1.inOut",
      stagger:0.02
    },"<50%")

  })
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