import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./home.css";
function HeroSection() {
  return (
    <div>
      <div className="hero_section">
        <div className="container">
          <div className="content">
            <h2 className="h2">
              Hello I am Ayoub
            </h2>
            <h2>
              <span>Front End</span> Developer{" "}
            </h2>
            <h2>
              Based in <span>Morocco</span>{" "}
            </h2>
            <p>
            Passionate about crafting beautiful, responsive interfaces, I
            specialize in <span className="text-amber-500">Front-End</span> Development using <span className="text-blue-600">React</span> ,<span className="text-blue-600">Tailwind CSS</span> , and
            modern <span className="text-yellow-300">JavaScript</span> . I focus on clean design, smooth animations, and
            seamless user experiences that bring ideas to life on screen.
          </p>
            <div className="icons">
              <a href="#" className="text-black">
                <GitHubIcon />
              </a>
              <a href="#" className="text-rose-500">
                {" "}
                <InstagramIcon />
              </a>
              <a href="#" className="text-blue-800">
                <LinkedInIcon />
              </a>
            </div>
          </div>
          
          <div className="profile">
            <img src="/image/profile.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
