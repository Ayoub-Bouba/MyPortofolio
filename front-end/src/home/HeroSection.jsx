import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { SplitText } from "gsap/all";
import "./home.css";
function HeroSection() {
  useGSAP(()=>{
    const titleSlide=SplitText.create(".hero_section h2",{type:"lines"})
    const paragSlide=SplitText.create(".hero_section p",{type:"lines"})
    const HeroTimeline=gsap.timeline()  ;
        HeroTimeline
           .from(titleSlide.lines,{
            opacity:0,
            yPercent:100,
            ease:"power1.inOut",
            stagger:0.06,

           })
           .from(paragSlide.lines,{
            opacity:0,
            yPercent:100,
            ease:"power1.inOut",
            stagger:0.02,
           })
           .from(".hero_section img",{
            opacity:0,
            ease:"power1.inOut",
            yPercent:5
           },0)
           .from(".hero_section a",{
            opacity:0,
            ease:"power1.inOut",
            xPercent:50
           })
  })
  return (
    <div>
      <div className="hero_section">
        <div className="container ">
          <div className="content">
            <h2 className="h2">Hello I am Ayoub</h2>
            <h2>
              <span>Front End</span> Developer{" "}
            </h2>
            <h2>
              Based in <span>Morocco</span>{" "}
            </h2>
            <div className="desp descktop">
              <p>
              Passionate about crafting beautiful, responsive interfaces, I
              specialize in <span className="text-amber-500">Front-End</span>{" "}
              Development using <span className="text-blue-600">React</span> ,
              <span className="text-blue-600">Tailwind CSS</span> , and modern{" "}
              <span className="text-yellow-300">JavaScript</span> . I focus on
              clean design, smooth animations, and seamless user experiences
              that bring ideas to life on screen.
            </p>
            <div className="icons">
              <a href="https://github.com/Ayoub-Bouba" className="text-white">
                <GitHubIcon />
              </a>
              <a
                href="https://www.instagram.com/ay_o_ub_27?igsh=MXI4ODV2a2R4Y2IxMw%3D%3D&utm_source=qr"
                className="text-rose-500"
              >
                {" "}
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/ayoub-bouba-238558373?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                className="text-blue-800"
              >
                <LinkedInIcon />
              </a>
            </div>
            </div>
          </div>

          <div className="profile">
            <img src="/image/profile1.jpg" />
          </div>
        </div>
        <div className="desp mobile flex justify-center items-center w-full">
          <p className="mb-5">
              Passionate about crafting beautiful, responsive interfaces, I
              specialize in <span className="text-amber-500">Front-End</span>{" "}
              Development using <span className="text-blue-600">React</span> ,
              <span className="text-blue-600">Tailwind CSS</span> , and modern{" "}
              <span className="text-yellow-300">JavaScript</span> . I focus on
              clean design, smooth animations, and seamless user experiences
              that bring ideas to life on screen.
            </p>
            <div className="icons">
              <a href="https://github.com/Ayoub-Bouba" className="text-white">
                <GitHubIcon />
              </a>
              <a
                href="https://www.instagram.com/ay_o_ub_27?igsh=MXI4ODV2a2R4Y2IxMw%3D%3D&utm_source=qr"
                className="text-rose-500"
              >
                {" "}
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/ayoub-bouba-238558373?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                className="text-blue-800"
              >
                <LinkedInIcon />
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
