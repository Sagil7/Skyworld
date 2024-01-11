import React from 'react'
import { useState, useEffect,useRef } from "react";
import { NavLink } from 'react-router-dom';
import Logo from './skyworldlogo.jpg'
import logo1 from './skyworld1.png'

import './Navbar.css'
function Navbar() {
  const [val, setVal] = useState("navbox")
  useEffect(() => {
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 35) {
        setVal("navbox sticky")
      } else {
        setVal("navbox")
      }

    }
  }, [val])
const refClose = useRef(null);
const handleClick =() =>{
  refClose.current.click();
}
  return (

    <>
      <header id="header">
        <div className={val}>
          <div id="logo">
            <NavLink to="/"><img src={logo1} alt="SkyWorld" title="" /></NavLink>
          </div>
          <input type="checkbox" id="click" />
          <label htmlFor="click" className="menu-btn" ref={refClose}>
            <i className="fas fa-bars"></i>
          </label>
          <ul className="navitems">
            <li class="nav-item">
              <NavLink class="nav-link" to="/" onClick={handleClick}>Home</NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/about" onClick={handleClick}>About</NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/services" onClick={handleClick}>Services</NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/contact" onClick={handleClick}>Contact</NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/contact" onClick={handleClick}>Quicklinks</NavLink>
            </li>

            
            {/* <a target="__blank" href="https://rzp.io/l/CcCG1qOV3" className="btn red-btn" >Donate Now</a> */}
          </ul>
          
        </div>
      </header>
    </>
  )
}

export default Navbar
