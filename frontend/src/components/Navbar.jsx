import React, { useEffect, useState } from 'react'
import Logo from "../Images/Logooltechsolutions.png"
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  
  return (  
    <div className='container'>

      <nav className='navbar'>
        <Link to="/"><img src={Logo} alt='Logo' /></Link>

        <div className='menu-icon' onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}

        </div>
        <ul className={`list ${open ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li>
          
          <li><Link to="/about">About</Link></li>


           {/* DROPDOWN */}
          <li className="dropdown">
            <span className="dropdown-title">Product & Services</span>

            <ul className="dropdown-menu">
              <li><Link to="/managed-wifi">Managed Wi-Fi</Link></li>
              <li><Link to="/manage-security">Manage Cyber Security</Link></li>
              <li><Link to="/Communication-Collaboration">Communication</Link></li>
              <li><Link to="/software-licence">Software License</Link></li>
              <li><Link to="/hardware">Hardware & Peripheral</Link></li>
              <li><Link to="/cloud-data-center">Cloud & Data Center</Link></li>
              <li><Link to="/surveillance">Surveillance</Link></li>
              <li><Link to="/telecom">Telecom Services</Link></li>
            </ul>
          </li>


          {/* <li><Link to="/product-services">Product & Services</Link></li> */}
          <li><Link to="/career">Career</Link></li>
          <li><Link to="/partnerships">Partnerships</Link></li>
          <li><Link to="/contact"> Contact</Link></li>
          <li><Link to="/chat">Chat</Link></li>
          <li><Link to="/blog">Blog</Link></li>

        </ul>

      </nav>
    </div>
  )
}

export default Navbar;


