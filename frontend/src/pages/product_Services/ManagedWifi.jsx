import React, { useEffect, useRef } from "react";
import "./ManagedWifi.css";
import wifi1 from "./productImg/wifi1.png"
import wifi2 from "./productImg/wifi2.png"
import wifiVideo from "./productImg/wifiVideo.mp4"
import Footer from "../../components/Footer";
import aboutVideo from "../../Images/aboutVideo.mp4"
import { Link } from "react-router-dom";

import Cisco from "../OemImg/Cisco.png";
import HPE from "../OemImg/HPE.png";
import Ruckus from "../OemImg/Ruckus.png";
import Ubiquiti from "../OemImg/Ubiquiti.jpg";
import Entegra from '../OemImg/Entegra.png'
import Cambium from "../OemImg/Cambium.png";
import Engenuis from "../OemImg/Engenius.jpg"
import Slider from "../../components/Slider";


const ManagedWifi = () => {

  const videoRef = useRef(null)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);


  const images = [Cisco, HPE, Ruckus, Ubiquiti, Entegra, Cambium, Engenuis]

  return (
    <div className="managed-wifi-page">
<Slider/>
      {/* HERO SECTION */}
      <section className="wifi-hero">
        <video ref={videoRef} autoPlay loop muted className="hero-video">
          <source src={wifiVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Managed WiFi Solutions</h1>
          <p>
            Secure, scalable and high-performance wireless networks
            tailored for modern enterprises.
          </p>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="wifi-overview">
        <div className="overview-container">
          <div className="overview-text">
            <h2>Enterprise-Grade Wireless Infrastructure</h2>
            <p>
              Our Managed WiFi Solutions are designed to provide seamless
              connectivity, centralized control, and enterprise-level security
              for businesses of all sizes. From deployment to monitoring and
              optimization, we handle everything so you can focus on growth.
            </p>
            <p>
              We ensure reliable connectivity across offices, campuses,
              warehouses, retail spaces, and large enterprise environments.
            </p>
          </div>

          <div className="overview-image">
            <img src={wifi1} alt="Enterprise WiFi Infrastructure" />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="wifi-features">
        <h2>Key Features</h2>

        <div className="features-grid">
          {/* <img src ={wifi} alt="Wifi"/> */}
          <div className="feature-card">
            <h3>24/7 Network Monitoring</h3>
            <p>
              Real-time monitoring and proactive issue resolution
              to ensure uninterrupted connectivity.
            </p>
          </div>

          <div className="feature-card">
            <h3>Advanced Security</h3>
            <p>
              Enterprise-grade encryption, firewall integration
              and secure authentication protocols.
            </p>
          </div>

          <div className="feature-card">
            <h3>Scalable Architecture</h3>
            <p>
              Easily expand network capacity as your organization grows.
            </p>
          </div>

          <div className="feature-card">
            <h3>Centralized Management</h3>
            <p>
              Manage multiple locations through a unified dashboard.
            </p>
          </div>

        </div>
      </section>
      {/* ==================Slider Section ============================ */}
      < section className="slider-wrapper" >
        <h2 >Building Innovative Businesses with Strong Alliance and Business Partners</h2>
        <div className="slider-track">
          {images.concat(images).map((img, index) => (
            <div className="slider-card" key={index}>
              <img src={img} alt="sllider" />
            </div>
          ))}

        </div>
      </section >

      {/* BENEFITS SECTION */}
      <section className="wifi-benefits">
        <div className="benefits-container">

          <div className="benefits-image">
            <img src={wifi2} alt="WiFi Benefits Illustration" />
          </div>

          <div className="benefits-text">
            <h2>Why Choose Our Managed WiFi?</h2>
            <ul>
              <li>✔ Reduced IT operational costs</li>
              <li>✔ Improved employee productivity</li>
              <li>✔ Seamless guest access management</li>
              <li>✔ High-speed, low-latency connectivity</li>
              <li>✔ Complete compliance & security assurance</li>
            </ul>
          </div>

        </div>
      </section>

      {/* USE CASE SECTION */}
      <section className="wifi-usecase">
        <h2>Industries We Serve</h2>
        <div className="usecase-grid">
          <div>Corporate Offices</div>
          <div>Healthcare</div>
          <div>Retail Chains</div>
          <div>Educational Institutions</div>
          <div>Hospitality</div>
        </div>
      </section>

     {/* Contact Form Detail here */}
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

      <Footer />

    </div>
  );
};

export default ManagedWifi;
