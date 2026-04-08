import React, { useEffect, useRef } from "react";
import "./SoftwareLicence.css";
import Software from "./productImg/Software1.png"
import Software1 from "./productImg/Software1.png"
import Software2 from "./productImg/Software2.png"
import Software3 from "./productImg/Software3.jpg"
import aboutVideo from "../../Images/aboutVideo.mp4"
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import ServiceVideo from "../../Images/ServiceVideo.mp4"

import google from "../OemImg/Software/google.png";
import Adobe from "../OemImg/Software/Adobe.png";
import Microsoft from "../OemImg/Software/Microsoft.png";
import office from "../OemImg/Software/office.jpg"

import Slider from "../../components/Slider"
const SoftwareLicence = () => {
  const images = [google, Adobe, Microsoft, office]
  const videoRef = useRef(null)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []); 




  return (
    <>
    <Slider/>
      <section className="sl-page">

        {/* HERO (Same Style As Others) */}
        <div className="sl-hero">
          {/* <img src={Software} alt="Software & Licence" className="sl-hero-bg" /> */}
          <video autoPlay loop muted className="hero-video">
            <source src={ServiceVideo} type="video/mp4" />
          </video>
          <div className="sl-overlay"></div>
 
          <div className="sl-hero-content">
            <h1>Software & Licensing Solutions</h1>
            <p>
              Enterprise-grade software solutions and licensing management
              designed to optimize performance, compliance, and scalability.
            </p>
          </div>
        </div>

        {/* INTRO SECTION */}
        <div className="sl-intro">
          <h2>Smart Software Solutions for Modern Enterprises</h2>
          <p>
            We provide comprehensive software deployment, licensing, compliance,
            and lifecycle management services. From enterprise productivity tools
            to mission-critical applications — OL Tech ensures optimized,
            cost-effective, and secure software ecosystems.
          </p>
        </div>

        {/* SERVICES WITH IMAGES */}
        <div className="sl-services">

          <div className="sl-service">
            <div className="sl-service-img">
              <img src={Software1} alt="License Management" />
            </div>
            <div className="sl-service-content">
              <h3>Software License Management</h3>
              <p>
                Avoid compliance risks and overspending with structured license
                tracking, renewal planning, and vendor negotiation strategies.
                We manage Microsoft, Adobe, VMware, and enterprise licensing
                frameworks efficiently.
              </p>
            </div>
          </div>

          <div className="sl-service reverse">
            <div className="sl-service-img">
              <img src={Software2} alt="Custom Software" />
            </div>
            <div className="sl-service-content">
              <h3>Custom Software Development</h3>
              <p>
                Tailored business applications built with scalable architecture,
                secure coding practices, and modern frameworks to accelerate
                digital transformation.
              </p>
            </div>
          </div>

          <div className="sl-service">
            <div className="sl-service-img">
              <img src={Software3} alt="Cloud Software" />
            </div>
            <div className="sl-service-content">
              <h3>Cloud-Based Applications</h3>
              <p>
                SaaS deployment, hybrid cloud integrations, and enterprise
                collaboration tools that enhance productivity and operational
                agility.
              </p>
            </div>
          </div>

        </div>

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

        {/* PROJECT FOCUS SECTION */}
        <div className="sl-projects">
          <h2>Industries & Projects We Support</h2>
          <div className="sl-project-grid">
            <div>Enterprise ERP Deployments</div>
            <div>Healthcare Software Licensing</div>
            <div>Education SaaS Platforms</div>
            <div>Government Compliance Systems</div>
            <div>Retail POS Integrations</div>
            <div>Financial Management Systems</div>
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

      </section>

      <Footer />

    </>
  );
};

export default SoftwareLicence;