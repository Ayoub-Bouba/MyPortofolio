const PortfLinks= [
    {id:"/",name:"Home",class:"act"},
    {id:"about",name:"About"},
    {id:"skills",name:"Skills"},
    {id:"projects",name:"Projects"},
    {id:"contact",name:"Contact"}
];
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
  SiGsap,
} from "react-icons/si";
const categories = [
  {
    label: "Frontend",
    accent: "#38BDF8",
    skills: [
      { name: "React", icon: SiReact},
      { name: "Tailwind CSS", icon: SiTailwindcss},
      { name: "JavaScript", icon: SiJavascript},
      { name: "Vite", icon: SiVite},
      { name: "Gsap", icon: SiGsap},
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
const projects = [
  {
  title: "Kofia",
  description:
    "A modern showcase site with a clean interface and a polished user experience.",
  image: "/projects/kofia.jpg",
  tags: ["React", "Tailwind"],
  liveUrl: "https://mellifluous-wisp-9a737a.netlify.app/",
  codeUrl: "https://github.com/Ayoub-Bouba/Kofia",
  accent: "#A78BFA",
},
  {
  title: "Cocktails",
  description:
    "A visually rich showcase site for cocktails, featuring clean layout and smooth presentation.",
  image: "/projects/cocktails.jpg",
  tags: ["React", "Tailwind"],
  liveUrl: "https://incredible-mandazi-e1aad5.netlify.app/",
  codeUrl: "https://github.com/Ayoub-Bouba/GsapProject",
  accent: "#F87171",
},
  {
    title: "Velora",
    description:
      "Online fashion store built with HTML, CSS, and JavaScript, hosted on Netlify.",
    image: "/image/project/timora.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://lively-pixie-7097ae.netlify.app/",
    codeUrl: "https://github.com/Ayoub-Bouba/My-project/tree/main/MarketHub",
    accent: "#F472B6",
  },
  {
    title: "Poignet",
    description:
      "Watch store with Swiper sliders and dummyjson API integration for products.",
    image: "/projects/poignet.jpg",
    tags: ["React", "Swiper", "API REST"],
    liveUrl: "https://poignet.netlify.app/",
    codeUrl: "https://github.com/Ayoub-Bouba/ShopMarket",
    accent: "#38BDF8",
  },
  
];

export {
    PortfLinks,
    categories,
    projects
}