import React from "react";
import "./about.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
function About() {
  const isMobile=useMediaQuery({maxWidth:767})
  const startValue =isMobile ? "top 50%" : "top 90%";
  const endValue =isMobile ? "bottom 60%" : "bottom 50%";
  useGSAP(()=>{
    const titleSlide=SplitText.create("#about h2",{type:"chars"})
    const paragSlide=SplitText.create("#about p",{type:"lines"})
    
     const aboutTimline=gsap.timeline({
      scrollTrigger:{
        trigger:"#about",
        start:"top 80%",
      }
     })
     aboutTimline
       .from(titleSlide.chars,{
        opacity:0,
        yPercent:100,
        ease:"power1.inOut",
        stagger:0.02
       })
       .fromTo(paragSlide.lines,{
          opacity:0,
          y:20
       },{
        color:"#ffffff",
        stagger:0.05,
        opacity:1,
        y:0,
        scrollTrigger:{
          trigger:"#about p",
          start:"top 80%",
           end:"bottom 50%",
           scrub:1,
           ease:"none",
        },
       })
       .from("#about img",{
        opacity:0,
        xPercent:-100,
        duration:0.5,
        scrollTrigger:{
          trigger:"#about",
          start:startValue,
           end:endValue,
           scrub:1,
           ease:"power1.inOut",
        },
       })
  },[{scope:"#about"}])
  return (
    <div id="about" className="sec_about">
      <h2>About me</h2>
      <div className="container">
        
        <div className="img_about">
          <img src="/image/profile1.jpg" alt="" />
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
