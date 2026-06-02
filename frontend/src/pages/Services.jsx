import React, { useEffect, useRef } from "react";
import "./Services.css";
// import wifi from "../Images/productImg/wifi.png"
import ServiceVideo from "../Images/ServiceVideo.mp4"
import Footer from "../components/Footer";
import aboutVideo from "../Images/aboutVideo.mp4"
import { Link } from "react-router-dom";
import WifiImg from "../Images/WifiImgoltechsolutions.jpg"
import SecurityImg from "../Images/SecurityImgoltechsolutions.jpg"
import CommImg from "../Images/CommImgoltechsolutions.jpg"
import SoftwareImg from "../Images/SoftwareImgoltechsolutions.jpg"
import HardwareImg from "../Images/HardwareImgoltechsolutions.png"
import DataImg from "../Images/DataImgoltechsolutions.jpg"
import TeleImg from "../Images/TeleImgoltechsolutions.png"
import SurvImg from "../Images/SurvImgoltechsolutions.png"
import Slider from "../components/Slider";
const ProductsServices = () => {


  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  return (
    <>
    {/* <Slider/> */}
    <div className="products-page">

      {/* HEADER */}

      <div className="products-header">

        <video autoPlay loop muted className="video">
          <source src={ServiceVideo } type="video/mp4" />
        </video>

        <div className="header-overlay">
          <h1>Our Products & Services</h1>
          <p>
            OL Tech Solutions provides enterprise-grade IT infrastructure,
            security, and cloud solutions to ensure business continuity,
            security, and scalability.
          </p>
        </div>

      </div>

      {/* 1 Managed WiFi */}
      <div className="service-section">
        <div className="service-image">
          <img src={WifiImg} alt="" />
        </div>

        <div className="service-text">
          <h2>Managed WiFi Solutions</h2>
          <p>Secure and high-speed wireless connectivity.</p>
          <ul>
            <li>Enterprise WiFi deployment</li>
            <li>Secure authentication</li>
            <li>Centralized network monitoring & management</li>
            <li>High-speed performance</li>
            <li>Bandwidth optimization & traffic control</li>
            <li>Scalable infrastructure for growing businesses</li>
            <li>Cloud-managed WiFi solutions</li>
          </ul>
          <Link to="/managed-wifi"><button className="learn-btn">Learn More</button></Link>
          
        </div>
      </div>


      {/* 2 Security */}
      <div className="service-section reverse">
        <div className="service-image">
          <img src={SecurityImg} alt="" />
        </div>

        <div className="service-text">
          <h2>Manage Security</h2>
          <p>Scalable and secure cloud infrastructure.</p>
          <ul>
            <li>End-to-end Cyber Security solutions</li>
            <li>Network security & firewall management</li>
            <li>Endpoint security for devices & systems</li>
            <li>Cloud security & compliance management</li>
            <li>Data protection & encryption solutions</li>
            <li>Secure access control & identity management</li>
            <li>Scalable security solutions for enterprises</li>
          </ul>
          <Link to="/manage-security"><button className="learn-btn">Learn More</button></Link>
          
        </div>
      </div>


      {/* 3 Manage Communication */}
      <div className="service-section">
        <div className="service-image">
          <img src={CommImg} alt="" />
        </div>

        <div className="service-text">
          <h2>Manage Communication</h2>
          <p>Protect your business from cyber threats.</p>
          <ul>
            <li>Unified communication & collaboration solutions</li>
            <li>VoIP and IP telephony systems</li>
            <li>Real-time communication & connectivity</li>
            <li>Scalable communication infrastructure</li>
            <li>Integration with enterprise tools & systems</li>
            <li>Secure business communication networks</li>
            <li>24/7 support & performance monitoring</li>
          </ul>
          <Link to="/communication-collaboration"><button className="learn-btn">Learn More</button></Link>
          
        </div>
      </div>


      {/* 4 Software Licenses */}
      <div className="service-section reverse">
        <div className="service-image">
          <img src={SoftwareImg} alt="" />
        </div>

        <div className="service-text">
          <h2>Software & Licence</h2>
          <p>Advanced firewall protection for networks.</p>
          <ul>
            <li>Software license management & compliancey</li>
            <li>Microsoft, Adobe, and enterprise licensing solutions</li>
            <li>License optimization & cost control</li>
            <li>Software asset management (SAM)</li>
            <li>Renewal tracking & lifecycle management</li>
            <li>Secure software installation & updates</li>
            <li>Vendor management & negotiation support</li>
           
          </ul>
          <Link to="/software-licence"><button className="learn-btn">Learn More</button></Link>
          
        </div>
      </div>


      {/* 5 Hardware Pheripheral */}
      <div className="service-section">
        <div className="service-image">
          <img src={HardwareImg} alt="" />
        </div>

        <div className="service-text">
          <h2>Hardware pheripheral</h2>
          <p>Modern and scalable infrastructure solutions.</p>
          <ul>
            <li>Enterprise-grade hardware solutions</li>
            <li>Laptops, desktops & workstations</li>
            <li>Servers & storage infrastructure</li>
            <li>Networking devices (routers, switches, access points)</li>
            <li>Printers, scanners & office peripherals</li>
            <li>Performance optimization & upgrades</li>
            <li>Scalable infrastructure for business growth</li>
          </ul>
          <Link to="/hardware"><button className="learn-btn">Learn More</button></Link>
          
        </div>
      </div> 


      {/* 6 Cloud & Data Center */}
      <div className="service-section reverse">
        <div className="service-image">
          <img src={DataImg} alt="" />
        </div>

        <div className="service-text">
          <h2>Cloud & Data Center</h2>
          <p>Reliable IT support for smooth operations.</p>
          <ul>
            <li>Cloud infrastructure setup & management</li>
            <li>Data center design & deployment</li>
            <li>Secure data storage & backup solutions</li>
            <li>Disaster recovery & business continuity</li>
            <li>Cloud migration & integration services</li>
            <li>Scalable solutions for growing enterprises</li>
            <li>24/7 monitoring & performance management</li>
          </ul>
          <Link to="/cloud-data-center"><button className="learn-btn">Learn More</button></Link>
          
        </div>
      </div>

      {/* Surveillance Solution */}
      <div className="service-section reverse">
        <div className="service-image">
          <img src={SurvImg} alt="" />
        </div>

        <div className="service-text">
          <h2>Surveillance Solution</h2>
          <p>Reliable IT support for smooth operations.</p>
          <ul>
            <li>CCTV camera installation & monitoring systems</li>
            <li>Biometric access control & attendance systems</li>
            <li>HD & IP-based surveillance solutions</li>
            <li>Real-time video monitoring & recording</li>
            <li>Smart analytics & motion detection</li>
            <li>Integrated security with alarms & sensors</li>
            <li>Real-time video monitoring & recording</li>
          </ul>
          <Link to="/surveillance"><button className="learn-btn">Learn More</button></Link>
          
        </div>
      </div>


      {/* 6 Telecom Services */}
      <div className="service-section reverse">
        <div className="service-image">
          <img src={TeleImg} alt="" />
        </div>

        <div className="service-text">
          <h2>Telecom Services</h2>
          <p>Reliable IT support for smooth operations.</p>
          <ul>
            <li>Business telecom solutions & infrastructure</li>
            <li>Voice, data & internet connectivity services</li>
            <li>High-speed broadband & leased lines</li>
            <li>Network design & telecom integration</li>
             <li>Secure and uninterrupted connectivity</li>
            <li>PRI lines & enterprise telephony systems</li>
            <li>24/7 support & service management</li>
          </ul>
          <Link to="/telecom"><button className="learn-btn">Learn More</button></Link>
          
        </div>
      </div>



    </div>

    <div className='services-contact'>
        <video ref={videoRef} autoPlay loop muted className="video">
          <source src={aboutVideo} type="video/mp4" />
        </video>
 
        <div className="services-overlay"></div>

        <div className="services-contact-content">
          <h1>Unlock the Power of OL Tech For Your Business</h1>
          <p>Connect with our experts today to accelerate your business with technology.</p>
          <Link to="/contact" className="services-contact-btn">
            Contact Us
          </Link>
        </div>
      </div>

      <Footer/>

    </>
  );
};

export default ProductsServices;