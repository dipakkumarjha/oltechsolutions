import React, { useEffect, useRef } from "react";
import "./Survillance.css";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import aboutVideo from "../../Images/aboutVideo.mp4"
import SurveillanceVideo from "./productImg/SurveillanceVideo.mp4"
import SurveillanceImg from "./productImg/SurveillanceImg.png"
import WhyChoose from "./productImg/WhyChoose.png"

import Panasonic from "../OemImg/Communication/Panasonic.jpg";
import CpPlus from "../OemImg/Survillance/CpPlus.png"
import Honeywell from "../OemImg/Survillance/Honeywell.png";
import Hikvision from "../OemImg/Hikvision.jpg"
import Bosch from "../OemImg/Bosch.png"
import Slider from "../../components/Slider";


const SurveillanceSolution = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  const images =[CpPlus , Honeywell,Hikvision ,Bosch , Panasonic]

  return (
    
    <div className="surveillance-page">
      <Slider />
      {/* HERO */}
      <section className="wifi-hero">
        <video ref={videoRef} autoPlay loop muted className="hero-img">
          <source src={SurveillanceVideo} type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>Surveillance & Security Solutions</h1>
          <p>
            Smart, secure and intelligent surveillance systems
            to protect your business infrastructure.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="wifi-overview">
        <div className="overview-container">

          <div className="overview-text">
            <h2>Advanced Surveillance Systems</h2>
            <p>
              We provide end-to-end surveillance and security solutions
              including CCTV, biometric systems, access control,
              public address systems, and IBMS integration.
            </p>
            <p>
              Our solutions ensure real-time monitoring,
              safety, and centralized control.
            </p>
          </div>

          <div className="overview-image">
            <img src={SurveillanceImg} alt="Surveillance" />
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="wifi-features">
        <h2>Our Solutions</h2>

        <div className="features-grid">

          <div className="feature-card">
            <h3>CCTV Surveillance</h3>
            <p>24/7 video monitoring with smart analytics.</p>
          </div>

          <div className="feature-card">
            <h3>Biometric Systems</h3>
            <p>Secure attendance and identity verification.</p>
          </div>

          <div className="feature-card">
            <h3>Access Control</h3>
            <p>Control entry with smart authentication systems.</p>
          </div>

          <div className="feature-card">
            <h3>PA Systems</h3>
            <p>Efficient communication through public address systems.</p>
          </div>

          <div className="feature-card">
            <h3>IBMS</h3>
            <p>Integrated building management systems.</p>
          </div>

        </div>
      </section>

      {/* OEM SECTION ⭐ */}
      {/* <section className="oem-section">
        <h2>Our Trusted OEM Partners</h2>

        <div className="oem-container">

          <div className="oem-box">
            <h3>WiFi OEM</h3>
            {wifiOEM.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>

          <div className="oem-box">
            <h3>CCTV OEM</h3>
            {cctvOEM.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>

        </div>
      </section> */}

      {/* BENEFITS */}
      <section className="wifi-benefits">
        <div className="benefits-container">

          <div className="benefits-image">
            <img src={WhyChoose} alt="Benefits" />
          </div>

          <div className="benefits-text">
            <h2>Why Choose Our Solutions?</h2>
            <ul>
              <li>✔ Real-time monitoring</li>
              <li>✔ Enhanced security</li>
              <li>✔ Centralized control</li>
              <li>✔ Scalable systems</li>
              <li>✔ Smart analytics integration</li>
            </ul>
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


      {/* USE CASE */}
      <section className="wifi-usecase">
        <h2>Industries We Serve</h2>

        <div className="usecase-grid">
          <div>Corporate</div>
          <div>Manufacturing</div>
          <div>Retail</div>
          <div>Hospitals</div>
          <div>Education</div>
        </div>
      </section>

      {/* CONTACT */}
      <div className="contact">

        <video ref={videoRef} autoPlay loop muted className="video">
          <source src={aboutVideo} type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <div className="contact-content">
          <h1>Secure Your Business Today</h1>
          <p>Talk to our experts for advanced surveillance solutions.</p>

          <Link to="/contact" className="contact-btn">
            Contact Us
          </Link>
        </div>
      </div>

      <Footer />

    </div>
  );
};

export default SurveillanceSolution;