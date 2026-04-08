import React, { useEffect, useRef } from "react";
import "./Hardware.css";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Hardware1 from "./productImg/Hardware1.png";
import HardwareVideo from "../../Images/HardwareVideo.mp4";
import aboutVideo from "../../Images/aboutVideo.mp4"
import WhyChoose from "./productImg/WhyChoose.png"

import dell from "../OemImg/Hardware/dell.png";
import HP from "../OemImg/Hardware/HP.jpg";
import Lenovo from "../OemImg/Hardware/Lenovo.jpg";
import Acer from "../OemImg/Hardware/Acer.jpg";
import Canon from "../OemImg/Hardware/Canon.png";
import Slider from "../../components/Slider";

const Hardware = () => {

  const images = [dell, HP, Lenovo, Acer, Canon];
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);



  return (
    <div className="hardware-page">
        <Slider/>
      {/* HERO SECTION */}
      <section className="wifi-hero">
        <video ref={videoRef} autoPlay loop muted className="hero-img">
          <source src={HardwareVideo} type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>Hardware & Peripheral Solutions</h1>
          <p>
            Reliable, high-performance hardware solutions designed
            to power modern business infrastructure.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="wifi-overview">
        <div className="overview-container">

          <div className="overview-text">
            <h2>Advanced IT Hardware Infrastructure</h2>
            <p>
              We provide enterprise-grade hardware and peripherals
              including servers, networking devices, storage systems,
              and accessories tailored to your business needs.
            </p>
            <p>
              Our solutions ensure performance, reliability, and
              scalability across all industries.
            </p>
          </div>

          <div className="overview-image">
            <img src={Hardware1} alt="Hardware Overview" />
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="wifi-features">
        <h2>Key Features</h2>

        <div className="features-grid">

          <div className="feature-card">
            <h3>High Performance</h3>
            <p>Top-quality hardware for seamless operations.</p>
          </div>

          <div className="feature-card">
            <h3>Scalable Solutions</h3>
            <p>Expand infrastructure as your business grows.</p>
          </div>

          <div className="feature-card">
            <h3>Secure Systems</h3>
            <p>Built with enterprise-grade security standards.</p>
          </div>

          <div className="feature-card">
            <h3>Vendor Support</h3>
            <p>Certified support from top OEM providers.</p>
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="hardware-benefits">
        <div className="benefits-container">

          <div className="benefits-image">
            <img src={WhyChoose} alt="Benefits" />
          </div>

          <div className="benefits-text">
            <h2>Why Choose Our Hardware Solution?</h2>
            <ul>
              <li>✔ Cost-effective infrastructure</li>
              <li>✔ Reliable performance</li>
              <li>✔ Easy integration</li>
              <li>✔ Long-term durability</li>
              <li>✔ Latest technology support</li>
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
          <div>Corporate Offices</div>
          <div>IT Companies</div>
          <div>Healthcare</div>
          <div>Education</div>
          <div>Retail</div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <div className="contact">

        <video ref={videoRef} autoPlay loop muted className="video">
          <source src={aboutVideo} type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <div className="contact-content">
          <h1>Upgrade Your IT Infrastructure Today</h1>
          <p>Connect with our experts to get the best hardware solutions.</p>

          <Link to="/contact" className="contact-btn">
            Contact Us
          </Link>
        </div>
      </div>

      <Footer />

    </div>
  );
};

export default Hardware;