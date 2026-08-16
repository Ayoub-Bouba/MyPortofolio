import React from "react";
import "./about.css";
function About() {
  return (
    <div id="about" className="sec_about">
      <div className="container">
        <h2>About me</h2>
        <div className="img_about">
          <img src="/image/profile.jpg" alt="" />
        </div>
        <div className="description">
          
          <p>
            Hi, I'm <span className="text-amber-500">Ayoub Bouba</span>, a 22-year-old <span className="text-amber-500">Software Engineering</span> student
            based in Agadir, Morocco. I'm currently pursuing my studies at the
            Faculty of Sciences in Agadir,<span className="text-amber-500"> with a Bac+2 level</span> . I'm passionate
            about Front-End Development and creating modern, responsive, and
            user-friendly web experiences. I'm continuously improving my skills,
            exploring new technologies, and turning ideas into clean and
            interactive interfaces.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
