import React, { useEffect, useRef, useState } from "react";
import "./Survillance.css";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import aboutVideo from "../../Images/aboutVideo.mp4"
import SurveillanceVideo from "./productImg/SurveillanceVideo.mp4"
import SurveillanceImg from "./productImg/SurveillanceImgoltechsolutions.png"
import WhyChoose from "./productImg/WhyChooseoltechsolutions.png"

import Panasonic from "../OemImg/Communication/Panasonicoltechsolutions.png";
import CpPlus from "../OemImg/Survillance/CpPlusoltechsolutions.png"
import Honeywell from "../OemImg/Survillance/Honeywelloltechsolutions.png";
import Hikvision from "../OemImg/Hikvisionoltechsolutions.jpg"
import Bosch from "../OemImg/Boscholtechsolutions.png"
import Slider from "../../components/Slider";
import Popup from "../../components/Popup";
import AIChatBot from "../../components/AIChatBot/AIChatBot";


const SurveillanceSolution = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  const images = [CpPlus, Honeywell, Hikvision, Bosch, Panasonic]


  const [showPopup, setShowPopup] = useState(false);

  return (

    <div className="surveillance-page">
      {/* <Slider /> */}
      {/* HERO */}
      <section className="surv-hero">
        <video ref={videoRef} autoPlay loop muted>
          <source src={SurveillanceVideo} type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        {/* <div className="surv-hero-content">
          <h1>Surveillance & Security Solutions</h1>
          <p>
            Smart, secure and intelligent surveillance systems
            to protect your business infrastructure.
          </p>
        </div> */}

        <div className="surv-hero-buttons">
          <button
            className="surv-demo-btn" onClick={() => {
              setShowPopup(true);
              document.body.style.overflow = "hidden";
            }}
          >
            BOOK DEMO 
          </button>

          <Link to="/chat" className="surv-whatsapp-btn">
            CHAT ON WHATSAPP
          </Link>

        </div>
      </section>

      {/* OVERVIEW */}
      <section className="surv-overview">
        <div className="surv-overview-container">

          <div className="surv-overview-text">
            <h2>Advanced Surveillance Systems</h2>
            <p>
              Advanced Surveillance Systems provide intelligent and reliable security solutions designed to protect people, assets, and infrastructure in real time. By combining high-definition cameras, AI-powered analytics, motion detection, and remote monitoring, these systems enable continuous visibility and faster threat identification. They help businesses prevent unauthorized access, monitor activities, and respond quickly to potential security risks.
            </p>
            <p>
              With scalable architecture and seamless integration capabilities, advanced surveillance solutions can be customized for various environments such as offices, retail spaces, warehouses, and industrial sites. They also support secure data storage, cloud access, and centralized control, ensuring efficient management and enhanced security across multiple locations.
            </p>
          </div>

          <div className="surv-overview-image">
            <img src={SurveillanceImg} alt="Surveillance" />
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="surv-features">
        <h2>Our Solutions</h2>

        <div className="surv-grid">

          <div className="surv-card">
            <h3>CCTV Surveillance</h3>
            <p>CCTV Surveillance provides real-time monitoring and recording to ensure the safety of people, assets, and premises. It helps detect suspicious activities, prevent unauthorized access, and enhance overall security. With remote access and high-definition video, businesses can monitor operations anytime, from anywhere.</p>
          </div>

          <div className="surv-card">
            <h3>Biometric Systems</h3>
            <p>Biometric Systems provide secure and accurate access control using unique identifiers like fingerprints and facial recognition. They help detect unauthorized access, prevent misuse, and enhance overall security. With real-time authentication and monitoring, businesses can manage access anytime, from anywhere.</p>
          </div>

          <div className="surv-card">
            <h3>Access Control</h3>
            <p>Access Control provides secure and controlled entry to systems, data, and physical locations. It helps prevent unauthorized access, manage user permissions, and enhance overall security. With real-time monitoring and authentication, businesses can control and track access anytime, from anywhere.</p>
          </div>

          <div className="surv-card">
            <h3>PA Systems</h3>
            <p>A Systems provide clear and efficient audio communication for announcements, alerts, and emergency notifications. They help ensure information reaches the right audience instantly across large areas. With centralized control and reliable sound distribution, businesses can manage communication anytime, from anywhere.</p>
          </div>

          <div className="surv-card">
            <h3>IBMS</h3>
            <p>IBMS provide centralized control for managing security, energy, lighting, and HVAC systems efficiently. They help optimize building operations, reduce energy consumption, and improve overall safety. With real-time monitoring and automation, businesses can manage facilities anytime, from anywhere.</p>
          </div>

        </div>
      </section>





      {/* ========Benefit========== */}

      <section className="surv-section">
        <h2>Benefits of OL Tech Surveillance Solutions</h2>

        <div className="surv-grid">
          <div className="surv-card">
            <h3>🎥 Real-Time Monitoring</h3>
            <p>Monitor activities live with instant access from anywhere.</p>
          </div>

          <div className="surv-card">
            <h3>Enhanced Security</h3>
            <p>Protect premises with advanced surveillance and threat detection.</p>
          </div>

          <div className="surv-card">
            <h3>Remote Access</h3>
            <p>View cameras anytime using mobile or web applications.</p>
          </div>

          <div className="surv-card">
            <h3>Instant Alerts</h3>
            <p>Get real-time alerts for suspicious activities and security breaches.</p>
          </div>

          <div className="surv-card">
            <h3>Secure Recording</h3>
            <p>Store and access recorded footage safely for future reference.</p>
          </div>

          <div className="surv-card">
            <h3>Crime Prevention</h3>
            <p>Acts as a strong deterrent against theft and unauthorized access.</p>
          </div>
        </div>
      </section>


      {/* BENEFITS */}
      <section className="wifi-benefits">
        <div className="benefits-container">

          <div className="benefits-image">
            <img src={WhyChoose} alt="Benefits" />
          </div>

          <div className="benefits-text">
            <h2>Why Choose Our Solutions?</h2>
            <ul>
              <li>✔ Real-time surveillance with instant alerts</li>
              <li>✔ Advanced motion detection and AI analytics</li>
              <li>✔ Secure remote access from anywhere, anytime
              </li>
              <li>✔ Scalable solutions for all business sizes</li>
              <li>✔ Data storage with backup and cloud support
              </li>
              <li>✔ Expert installation and ongoing technical support</li>
              <li>✔ 24/7 monitoring for enhanced safety</li>
            </ul>
          </div>

        </div>
      </section>


      {/* ==================Slider Section ============================ */}
      < section className="surv-slider-wrapper" >
        <h2 >Building Innovative Businesses with Strong Alliance and Business Partners</h2>
        <div className="surv-slider-track">
          {images.concat(images).map((img, index) => (
            <div className="surv-slider-card" key={index}>
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


      {/* FAQ SECTION */}
      <section className="surv-faq-section">

        <h2>Frequently Asked Questions</h2>

        <dl className="surv-faq-list">

          <dt>Q. What surveillance solutions does OL Tech Solutions provide?</dt>
          <dd>
            We provide CCTV surveillance systems, biometric solutions,
            access control systems, PA systems, IBMS solutions,
            and centralized security management platforms.
          </dd>

          <dt>Q. Can I monitor my surveillance cameras remotely?</dt>
          <dd>
            Yes. Our surveillance solutions support secure remote access
            through mobile applications and web-based monitoring platforms.
          </dd>

          <dt>Q. Do your CCTV systems support cloud recording?</dt>
          <dd>
            Yes. We offer cloud-based storage, backup solutions,
            and centralized recording management based on business requirements.
          </dd>

          <dt>Q. What is the benefit of biometric access control?</dt>
          <dd>
            Biometric systems improve security by allowing access only
            to authorized individuals through fingerprint or facial recognition.
          </dd>

          <dt>Q. Are your surveillance solutions suitable for multiple locations?</dt>
          <dd>
            Yes. Our solutions are scalable and can be centrally managed
            across multiple offices, warehouses, factories, and retail locations.
          </dd>

          <dt>Q. Which industries use your surveillance solutions?</dt>
          <dd>
            We serve corporate offices, manufacturing units,
            healthcare facilities, educational institutions,
            retail stores, warehouses, and government organizations.
          </dd>

          <dt>Q. Do you provide installation and support services?</dt>
          <dd>
            Yes. OL Tech Solutions provides consultation,
            deployment, installation, maintenance,
            and ongoing technical support.
          </dd>

          <dt>Q. How can I get started?</dt>
          <dd>
            Contact our team and we will recommend the most suitable
            surveillance and security solution for your business.
          </dd>

        </dl>

      </section>

      {/* CONTACT */}
      <div className="surv-contact">

        <video ref={videoRef} autoPlay loop muted className="surv-video">
          <source src={aboutVideo} type="video/mp4" />
        </video>

        <div className="surv-overlay"></div>

        <div className="surv-contact-content">
          <h1>Secure Your Business Today</h1>
          <p>Talk to our experts for advanced surveillance solutions.</p>

          <Link to="/contact" className="surv-contact-btn">
            Contact Us
          </Link>
        </div>
      </div>
       
      <AIChatBot/>
      <Footer />

      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
};

export default SurveillanceSolution;






