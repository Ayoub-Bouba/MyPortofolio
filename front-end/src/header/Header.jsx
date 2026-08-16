import React, { useState } from "react";
import {Link} from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "./header.css"

function Header() {
  const [active,setActive]=useState("");
  const handleChange=()=>{
    setActive(active=="" ? "active" : "")
  }
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link className="logo btn btn-ghost text-2xl">Bouba</Link>  
        </div>
        <div className="flex-none">
          {active==""? (
            <span id="mobile" className="text-white-600" onClick={handleChange} ><FaBars/></span>
          ) :""}
          
          <ul className={`menu menu-horizontal px-1 ${active}`}>
            {active=="active" ? (
            <span id="mobile" onClick={handleChange} className="text-white-600" ><AiOutlineClose/></span>
            ) :""}
            <li>
              <a href="#/" className="act" >Home</a>
            </li>
            <li>
              <a href="#about" >About</a>
            </li>
            <li>
              <a href="#skills" >Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Header;
