import React from "react";
import HeroSection from "./HeroSection";
import "./home.css";
import About from "../about/About";
import Skills from "../skills/Skills";
import ProjectsSection from "../project/ProjectSection";
import Contact from "../contact/Contact";

function Home() {
  return (
    <div id="/">
      <HeroSection />
      <About />
      <Skills />
      <ProjectsSection />
      <Contact />
      <footer className="footer">
        <p>© {new Date().getFullYear()} Ayoub Bouba</p>
      </footer>
    </div>
  );
}

export default Home;
