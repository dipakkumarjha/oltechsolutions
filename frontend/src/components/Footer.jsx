
import React from "react";
import "./Footer.css";
import Logo from "../Images/Logooltechsolutions.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top"> 

        {/* LEFT SECTION */}
        <div className="footer-left">
          {/* <img src={Logo} alt="Logo" className="logo" /> */}
          <h2 className="footer-text-logo">OL TECH SOLUTIONS<sup>®</sup></h2>


          <p className="footer-desc">
            Delivering secure, scalable and reliable IT infrastructure
            solutions to help businesses grow confidently in the digital era.
          </p>

          <h4 className="follow">FOLLOW US :</h4> 

          <div className="social-icons">
            <a href="https://www.facebook.com/oltechsolutionspvt" target="_blank" rel="noopener noreferrer"><FaFacebookF color="#1877F2"/></a>
            <a href="https://www.instagram.com/oltech_solutions" target="_blank" rel="noopener noreferrer"><FaInstagram color="#E1306C" /></a>
            <a href="https://www.linkedin.com/company/79839608/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn color="#0A66C2" /></a>
          </div>
          <div className="mail">
            <h4 className="question">WE’RE HERE TO ANSWER YOUR QUESTIONS</h4>
            <p className="email">tasleem.khan@oltechsolutions.co.in</p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="footer-right">

          <div className="footer-column">
            <h5>COMPANY</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/career">Careers</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy-policy">Privacy & Policy</a></li>
              <li><a href="/terms-conditions">Terms & Conditions</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>SERVICES</h5>
            <ul>
              <li><a href="/managed-wifi">Wi-Fi</a></li>
              <li><a href="/manage-security">Manage Security</a></li>
              <li><a href="/Communication-Collaboration">Manage Communication</a></li>
              <li><a href="/software-licence">Software License</a></li>
              <li><a href="/hardware">Hardware & Peripheral</a></li>
              <li><a href="/cloud-data-center">Cloud & Data Center</a></li>
              <li><a href="/surveillance">Manage Communication</a></li>
              <li><a href="/telecom">Telecom Services</a></li>
            </ul>
          </div>







          {/* <div className="footer-column map-column">
            <h5>OFFICE LOCATION</h5>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.5885064040576!2d77.37019827375227!3d28.626173384372635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce59930098e6f%3A0x85b44f30ce392fa7!2sOL%20TECH%20SOLUTIONS!5e1!3m2!1sen!2sin!4v1771399097660!5m2!1sen!2sin"
              // width="100%"
              // height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>  */} 

          <div className="map-column">
            <h5>OFFICE LOCATION</h5>
            <p className="adress">Address: ITHUM TOWER, 616, Tower-C, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309</p>
          </div>

        </div>

      </div>


      <div className="footer-bottom">
        {/* © {new Date().getFullYear()} OL Tech Solutions. All Rights Reserved. */}
        © {2017} OL Tech Solutions. All Rights Reserved.
      </div>

    </footer>

  );
};

export default Footer;
