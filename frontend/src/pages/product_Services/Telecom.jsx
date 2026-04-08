import React, { useEffect, useRef } from "react";
import "./Telecom.css";
import Footer from "../../components/Footer";
import aboutVideo from "../../Images/aboutVideo.mp4"
import { Link } from "react-router-dom";
import Avaya from "../OemImg/Telecom/Avaya.png"
import Grandstream from "../OemImg/Telecom/Grandstream.png"
import Alcatel from "../OemImg/Telecom/Alcatel.png"
import Ericsson from '../OemImg/Telecom/Ericsson.png'
import Microtek from "../OemImg/Telecom/Ericsson.png"
import Ubiquiti from "../OemImg/Telecom/Ubiquiti.png"
import Slider from "../../components/Slider";

const TelecomServices = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  const images = [Avaya, Grandstream, Alcatel, Ericsson, Microtek, Ubiquiti];

  return (
    <div className="telecom-page">
      <Slider/>

      {/* HERO */}
      <section className="wifi-hero">
        <video ref={videoRef} autoPlay loop muted className="hero-img">
          <source src="/video.mp4" type="video/mp4" />
        </video>
 
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>Telecom & Network Services</h1>
          <p>
            Empower your business with reliable, scalable, and 
            high-speed telecom infrastructure.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="wifi-overview">
        <div className="overview-container">

          <div className="overview-text">
            <h2>Next-Gen Telecom Solutions</h2>
            <p>
              We provide end-to-end telecom and network services 
              including voice, data, internet connectivity, and 
              unified communication systems.
            </p>
            <p>
              Our solutions ensure seamless connectivity, 
              optimized performance, and secure communication.
            </p>
          </div>

          <div className="overview-image">
            <img src="/image1.jpg" alt="Telecom Overview" />
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="wifi-features">
        <h2>Key Services</h2>

        <div className="features-grid">

          <div className="feature-card">
            <h3>High-Speed Internet</h3>
            <p>Reliable broadband & leased line solutions.</p>
          </div>

          <div className="feature-card">
            <h3>VoIP & Cloud Telephony</h3>
            <p>Advanced communication with VoIP solutions.</p>
          </div>

          <div className="feature-card">
            <h3>Network Integration</h3>
            <p>Seamless integration across all systems.</p>
          </div>

          <div className="feature-card">
            <h3>24/7 Support</h3>
            <p>Continuous monitoring and technical support.</p>
          </div>

        </div>
      </section>

      {/* SLIDER */}
      <section className="slider-wrapper">
        <h2>Our Telecom Partners</h2>

        <div className="slider-track">
          {images.concat(images).map((img, index) => (
            <div className="slider-card" key={index}>
              <img src={img} alt="partner" />
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="wifi-benefits">
        <div className="benefits-container">

          <div className="benefits-image">
            <img src="/image2.jpg" alt="Benefits" />
          </div>

          <div className="benefits-text">
            <h2>Why Choose Our Telecom Services?</h2>
            <ul>
              <li>✔ Seamless connectivity</li>
              <li>✔ Cost-effective communication</li>
              <li>✔ High uptime & reliability</li>
              <li>✔ Scalable solutions</li>
              <li>✔ Advanced security protocols</li>
            </ul>
          </div>

        </div>
      </section>

      {/* USE CASE */}
      <section className="wifi-usecase">
        <h2>Industries We Serve</h2>

        <div className="usecase-grid">
          <div>Corporate</div>
          <div>Banking</div>
          <div>Healthcare</div>
          <div>Education</div>
          <div>Retail</div>
        </div>
      </section>

      {/* CONTACT */}
      <div className="contact">

        <video ref={videoRef} autoPlay loop muted className="video">
          <source src={aboutVideo} type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <div className="contact-content">
          <h1>Upgrade Your Communication Infrastructure</h1>
          <p>Get in touch with our telecom experts today.</p>

          <Link to="/contact" className="contact-btn">
            Contact Us
          </Link>
        </div>
      </div>

      <Footer />

    </div>
  );
};

export default TelecomServices;