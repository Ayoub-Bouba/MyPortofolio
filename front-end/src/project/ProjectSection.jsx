import "./project.css";
import { projects } from "../../constants";
import ProjectCard from "./ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


export default function ProjectsSection() {
  useGSAP(()=>{
    const projTimeline=gsap.timeline({
      scrollTrigger:{
        trigger:"#projects",
        start:"top 70%"
      }
    })
    projTimeline
    .from(".projects-header p",{
      opacity:0,
      yPercent:100,
      ease:"power1.inOut",
    })
    .from(".projects-header h2",{
      opacity:0,
      yPercent:100,
      ease:"power1.inOut",
      stagger:0.02
    })
    .from(".projects-grid div",{
      opacity:0,
      ease:"power1.inOut",
      stagger:0.02
    },"<50%")

  })
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