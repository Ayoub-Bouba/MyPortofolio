import './App.css'
import Header from './header/Header'
import Home from './home/Home'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);

function App() {
  

  return (
    <div>
        <Header/>
        <Home/>
    </div>
  )

}
  

export default App
