import React, { useEffect, useRef, useState } from "react";
import "./Telecom.css";
import Footer from "../../components/Footer";
import aboutVideo from "../../Images/aboutVideo.mp4"
import { Link } from "react-router-dom";
import Avaya from "../OemImg/Telecom/Avayaoltechsolutions.png"
import Grandstream from "../OemImg/Telecom/Grandstreamoltechsolutions.png"
import Alcatel from "../OemImg/Telecom/Alcateloltechsolutions.png"
import Ericsson from '../OemImg/Telecom/Ericssonoltechsolutions.png'
import Microtek from "../OemImg/Telecom/Ericssonoltechsolutions.png"
import Ubiquiti from "../OemImg/Telecom/Ubiquitioltechsolutions.png"
import TelecomVideo from "./productImg/TelecomVideo.mp4"
import TeleImg from "./productImg/TeleImgoltechsolutions.png"
import WhyChoose from "./productImg/WhyChooseoltechsolutions.png"
import Slider from "../../components/Slider";
import Popup from "../../components/Popup";

const TelecomServices = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  const images = [Avaya, Grandstream, Alcatel, Ericsson, Microtek, Ubiquiti];

  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="telecom-page">
      {/* <Slider /> */}

      {/* HERO */}
      <section className="tele-hero">
        <video ref={videoRef} autoPlay loop muted className="hero-img">
          <source src={TelecomVideo} type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        {/* <div className="tele-hero-content">
          <h1>Telecom & Network Services</h1>
          <p>
            Empower your business with reliable, scalable, and
            high-speed telecom infrastructure.
          </p>
        </div> */}

        <div className="telecom-hero-buttons">
          <button
            className="telecom-demo-btn" onClick={() => {
              setShowPopup(true);
              document.body.style.overflow = "hidden";
            }}
          >
            BOOK DEMO
          </button>

          <Link to="/chat" className="telecom-whatsapp-btn">
            CHAT ON WHATSAPP
          </Link>

        </div>
      </section>

      {/* OVERVIEW */}
      <section className="telecom-overview">
        <div className="overview-container">

          <div className="overview-text">
            <h2>Next-Gen Telecom Solutions</h2>
            <p>
              Next-Gen Telecom Solutions empower businesses with fast, reliable, and scalable communication networks designed for modern connectivity needs. By leveraging advanced technologies like VoIP, unified communications, and high-speed data networks, these solutions ensure seamless voice, video, and data transmission across organizations.
            </p>
            <p>
              With enhanced network performance, security, and flexibility, next-generation telecom systems support remote work, real-time collaboration, and efficient customer interactions. They also reduce operational costs while providing the scalability required to grow and adapt in a rapidly evolving digital landscape.
            </p>
          </div>

          <div className="overview-image">
            <img src={TeleImg} alt="Telecom Overview" />
          </div>

        </div>
      </section>


      {/* =====OUR Services============ */}

      <section className="telecom-section">
        <h2>Our Telecom Services</h2>

        <div className="telecom-grid">
          <div className="telecom-card">
            <h3>📡 Smart ILL</h3>
            <p>High-speed dedicated internet with reliable and consistent performance.</p>
          </div>

          <div className="telecom-card">
            <h3>SIP Trunk</h3>
            <p>Cost-effective voice solution for seamless business communication.</p>
          </div>

          <div className="telecom-card">
            <h3>PRI</h3>
            <p>Multiple voice channels for efficient and uninterrupted calling.</p>
          </div>

          <div className="telecom-card">
            <h3>EPBX</h3>
            <p>Advanced call management system for internal and external communication.</p>
          </div>

          <div className="telecom-card">
            <h3>P2P Leased Line</h3>
            <p>Secure point-to-point connectivity for data transfer between locations.</p>
          </div>

          <div className="telecom-card">
            <h3>SD-WAN</h3>
            <p>Smart network management with improved performance and security.</p>
          </div>
        </div>
      </section>


      {/* FEATURES */}
      <section className="tele-features">
        <h2>Key Services</h2>

        <div className="tele-grid">

          <div className="tele-card">
            <h3>High-Speed Internet</h3>
            <p>Reliable broadband & leased line solutions.</p>
          </div>

          <div className="tele-card">
            <h3>Network Integration</h3>
            <p>Seamless integration across all systems.</p>
          </div>

          <div className="tele-card">
            <h3>24/7 Support</h3>
            <p>Continuous monitoring and technical support.</p>
          </div>

        </div>
      </section>

      {/* SLIDER */}
      <section className="tele-slider-wrapper">
        <h2>Our Telecom Partners</h2>

        <div className="tele-slider-track">
          {images.concat(images).map((img, index) => (
            <div className="tele-slider-card" key={index}>
              <img src={img} alt="partner" />
            </div>
          ))}
        </div>
      </section>




      {/* BENEFITS */}
      <section className="tele-benefits">
        <div className="benefits-container">

          <div className="benefits-image">
            <img src={WhyChoose} alt="Benefits" />
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
      <section className="tele-usecase">
        <h2>Industries We Serve</h2>

        <div className="usecase-grid">
          <div>Corporate</div>
          <div>Banking</div>
          <div>Healthcare</div>
          <div>Education</div>
          <div>Retail</div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="tele-faq-section">

        <h2>Frequently Asked Questions</h2>

        <dl className="tele-faq-list">

          <dt>Q. What telecom services does OL Tech Solutions provide?</dt>
          <dd>
            We provide Smart ILL, SIP Trunk, PRI, EPBX,
            P2P Leased Line, SD-WAN, and enterprise telecom solutions
            designed for modern business communication.
          </dd>

          <dt>Q. What is Smart ILL?</dt>
          <dd>
            Smart ILL (Internet Leased Line) provides dedicated,
            high-speed internet connectivity with guaranteed bandwidth,
            low latency, and high reliability for businesses.
          </dd>

          <dt>Q. How does SIP Trunk benefit businesses?</dt>
          <dd>
            SIP Trunk enables cost-effective voice communication,
            improves call quality, and supports scalable business telephony
            without traditional phone lines.
          </dd>

          <dt>Q. What is the purpose of an EPBX system?</dt>
          <dd>
            EPBX systems help businesses manage internal and external calls,
            automate call routing, improve communication efficiency,
            and reduce telecom costs.
          </dd>

          <dt>Q. What are the advantages of SD-WAN?</dt>
          <dd>
            SD-WAN improves network performance, enhances security,
            reduces connectivity costs, and provides centralized
            management for multiple business locations.
          </dd>

          <dt>Q. Can you provide telecom solutions for multiple branches?</dt>
          <dd>
            Yes. Our telecom solutions are scalable and support
            seamless connectivity between multiple offices,
            branches, warehouses, and remote teams.
          </dd>

          <dt>Q. Which industries benefit from your telecom services?</dt>
          <dd>
            We support corporate organizations, banking,
            healthcare, education, retail, manufacturing,
            and enterprise businesses of all sizes.
          </dd>

          <dt>Q. Do you provide installation and technical support?</dt>
          <dd>
            Yes. OL Tech Solutions offers consultation,
            deployment, installation, monitoring,
            and ongoing technical support services.
          </dd>

        </dl>

      </section>

      {/* CONTACT */}
      <div className="tele-contact">

        <video ref={videoRef} autoPlay loop muted className="tele-video">
          <source src={aboutVideo} type="video/mp4" />
        </video>

        <div className="tele-overlay"></div>

        <div className="tele-contact-content">
          <h1>Upgrade Your Telecom Services </h1>
          <p>Get in touch with our telecom experts today.</p>

          <Link to="/contact" className="tele-contact-btn">
            Contact Us
          </Link>
        </div>
      </div>

      <Footer />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
};

export default TelecomServices;