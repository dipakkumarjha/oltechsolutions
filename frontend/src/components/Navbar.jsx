import React, { useState } from 'react'
import Logo from "../Images/Logo.png"
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  const [open, setOpen] = useState(false);
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
          <li><Link to="/product-services">Product & Services</Link></li>
          <li><Link to="/career">Career</Link></li>
          <li><Link to="/partnerships">Partnerships</Link></li>
          <li><Link to="/contact"> Contact</Link></li>
          <li><Link to="/chat">Chat</Link></li>

        </ul>

      </nav>
    </div>
  )
}

export default Navbar