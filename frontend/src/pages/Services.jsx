import React, { useEffect, useRef } from "react";
import "./Services.css";
import wifi from "../Images/productImg/wifi.png"
import ServiceVideo from "../Images/ServiceVideo.mp4"
import Footer from "../components/Footer";
import aboutVideo from "../Images/aboutVideo.mp4"
import { Link } from "react-router-dom";
import WifiImg from "../Images/WifiImg.jpg"
import SecurityImg from "../Images/SecurityImg.jpg"
import CommImg from "../Images/CommImg.jpg"
import SoftwareImg from "../Images/SoftwareImg.jpg"
import HardwareImg from "../Images/HardwareImg.png"
import DataImg from "../Images/DataImg.jpg"
import TeleImg from "../Images/TeleImg.png"
import SurvImg from "../Images/SurvImg.png"
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
    <Slider/>
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
            <li>Central monitoring</li>
            <li>High-speed performance</li>
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
            <li>Cloud migration</li>
            <li>Secure storage</li>
            <li>Backup & recovery</li>
            <li>Cloud management</li>
          </ul>
          <Link to="/cloud-data-center"><button className="learn-btn">Learn More</button></Link>
          
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
            <li>Threat protection</li>
            <li>Endpoint security</li>
            <li>24/7 monitoring</li>
            <li>Data protection</li>
          </ul>
          <Link to="/manage-security"><button className="learn-btn">Learn More</button></Link>
          
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
            <li>Network security</li>
            <li>Threat prevention</li>
            <li>Access control</li>
            <li>Real-time monitoring</li>
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
            <li>Server setup</li>
            <li>Network setup</li>
            <li>Data center setup</li>
            <li>Infrastructure management</li>
          </ul>
          <Link to="/it-infra"><button className="learn-btn">Learn More</button></Link>
          
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
            <li>24/7 support</li>
            <li>Remote assistance</li>
            <li>System maintenance</li>
            <li>Issue resolution</li>
          </ul>
          <Link to="/it-architecture"><button className="learn-btn">Learn More</button></Link>
          
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
            <li>24/7 support</li>
            <li>Remote assistance</li>
            <li>System maintenance</li>
            <li>Issue resolution</li>
          </ul>
          <Link to="/it-architecture"><button className="learn-btn">Learn More</button></Link>
          
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
            <li>24/7 support</li>
            <li>Remote assistance</li>
            <li>System maintenance</li>
            <li>Issue resolution</li>
          </ul>
          <Link to="/it-architecture"><button className="learn-btn">Learn More</button></Link>
          
        </div>
      </div>



    </div>

    <div className='contact'>
        <video ref={videoRef} autoPlay loop muted className="video">
          <source src={aboutVideo} type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <div className="contact-content">
          <h1>Unlock the Power of OL Tech For Your Business</h1>
          <p>Connect with our experts today to accelerate your business with technology.</p>
          <Link to="/contact" className="contact-btn">
            Contact Us
          </Link>
        </div>
      </div>

      <Footer/>

    </>
  );
};

export default ProductsServices;