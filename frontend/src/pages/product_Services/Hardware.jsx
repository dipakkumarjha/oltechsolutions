import React, { useEffect, useRef, useState } from "react";
import "./Hardware.css";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Hardware1 from "./productImg/Hardware1oltechsolutions.png";
import HardwareVideo from "../../Images/HardwareVideo.mp4";
import aboutVideo from "../../Images/aboutVideo.mp4"
import WhyChoose from "./productImg/WhyChooseoltechsolutions.png"
import cl from "./productImg/ComputerLaptopoltechsolutions.jpg"
import dell from "../OemImg/Hardware/delloltechsolutions.png";
import HP from "../OemImg/Hardware/HPoltechsolutions.png";
import Lenovo from "../OemImg/Hardware/Lenovooltechsolutions.png";
import Acer from "../OemImg/Hardware/Aceroltechsolutions.png";
import Canon from "../OemImg/Hardware/Canonoltechsolutions.png";
import workstation from "./productImg/workstationoltechsolutions.png"
import tablets from "./productImg/tabletsoltechsolutions.jpg"
import printer from "./productImg/printeroltechsolutions.jpg"
import Slider from "../../components/Slider";
import Popup from "../../components/Popup";

const Hardware = () => {

  const images = [dell, HP, Lenovo, Acer, Canon];
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  const [showPopup, setShowPopup] = useState(false);


  return (
    <div className="hardware-page">

      {/* <Slider /> */}
      {/* HERO SECTION */}
      <section className="hardware-hero">
        <video ref={videoRef} autoPlay loop muted className="hardware-img">
          <source src={HardwareVideo} type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        {/* <div className="hardware-hero-content">
          <h1>Hardware & Peripheral Solutions</h1>
          <p>
            Reliable, high-performance hardware solutions designed
            to power modern business infrastructure.
          </p>
        </div> */}


        <div className="hardware-hero-buttons">
          <button
            className="hardware-demo-btn" onClick={() => {
              setShowPopup(true);
              document.body.style.overflow = "hidden";
            }}
          >
            BOOK DEMO
          </button>

          <Link to="/chat" className="hardware-whatsapp-btn">CHAT ON WHATSAPP</Link>

        </div>
      </section>


      {/* ===============Services Card Section=================== */}

      <section className="hardware-card-services">
        <h2>Our Hardware Expertise</h2>
        <div className="hardware-card-grid">

          <div className="hardware-services-card">
            <img src={cl} alt="Computer" />
            <h3>Laptop/Desktop</h3>
            <p>Advanced laptop and desktop solutions provide high-performance computing,reliable scalable  productivity, andhardware support for modern business environments.
            </p>
          </div>

          <div className="hardware-services-card">
            <img src={workstation} alt="Workstation" />
            <h3>Workstation/Server</h3>
            <p>Advanced workstation and server solutions provide powerful computing, reliable performance, and scalable infrastructure support for modern business environments.
            </p>
          </div>

          <div className="hardware-services-card">
            <img src={tablets} alt="Tablets" />
            <h3>Tablets</h3>
            <p>Advanced tablet solutions provide mobile productivity, seamless connectivity, and flexible computing support for modern business environments.

            </p>
          </div>

          <div className="hardware-services-card">
            <img src={printer} alt="Printer" />
            <h3>Printers & MFM</h3>
            <p>Advanced printer and MFM solutions provide efficient document management, high-quality printing, and reliable office productivity for modern business environments.

            </p>
          </div>

        </div>
      </section>





      {/* OVERVIEW */}
      <section className="hardware-overview">
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
      <section className="hardware-features">
        <h2>Key Features</h2>

        <div className="hardware-grid">

          <div className="hardware-card">
            <h3>High Performance</h3>
            <p>Top-quality hardware for seamless operations.</p>
          </div>

          <div className="hardware-card">
            <h3>Scalable Solutions</h3>
            <p>Expand infrastructure as your business grows.</p>
          </div>

          <div className="hardware-card">
            <h3>Secure Systems</h3>
            <p>Built with enterprise-grade security standards.</p>
          </div>

          <div className="hardware-card">
            <h3>Vendor Support</h3>
            <p>Certified support from top OEM providers.</p>
          </div>

          <div className="hardware-card">
            <h3>Easy Scalability</h3>
            <p>Easily upgrade hardware as your business grows.</p>
          </div>

          <div className="hardware-card">
            <h3>Durable & Reliable</h3>
            <p>Built with quality components for long-term and stable usage.</p>
          </div>

        </div>
      </section>


      {/* ===TOP BENEFITS OL TECH Hardware========== */}

      <section className="hardware-benefit">
        <h2>Top Benefits of Hardware Solutions by OL Tech Solutions </h2>
        <p>OL Tech Hardware Solutions deliver reliable performance, scalable infrastructure, and seamless business operations—empowering organizations with enterprise-grade devices, robust networking, and enhanced productivity for long-term growth.</p>
        <div className="hardware-grid-benefit">

          <div className="hardware-benefit-card">
            <h3>Strong Threat Protection</h3>
            <p>
              Protects systems from malware, ransomware, and cyber attacks with advanced security layers.
            </p>
          </div>

          <div className="hardware-benefit-card">
            <h3>Real-Time Monitoring</h3>
            <p>
              Continuously monitors network activity to detect and respond to threats instantly.
            </p>
          </div>

          <div className="hardware-benefit-card">
            <h3>Data Protection</h3>
            <p>
              Ensures sensitive data is secured with encryption and access control mechanisms.
            </p>
          </div>

          <div className="hardware-benefit-card">
            <h3>Secure Network Access</h3>
            <p>
              Provides safe and controlled access to networks, preventing unauthorized entry.
            </p>
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="hardware-choose">
        <div className="hardware-choose-container">

          <div className="hardware-choose-image">
            <img src={WhyChoose} alt="Benefits" />
          </div>

          <div className="hardware-choose-text">
            <h2>Why Choose Our Hardware Solution?</h2>
            <ul>
              <li>✔ High-performance and reliable hardware infrastructure</li>
              <li>✔ Cost-effective solutions tailored to business needs</li>
              <li>✔ Latest technology with future-ready upgrades</li>
              <li>✔ Enhanced security and data protection</li>
              <li>✔ Minimal downtime with maximum productivity</li>
              <li>✔ Scalable infrastructure for business growth</li>
              <li>✔ Dedicated maintenance and technical support</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ==================Slider Section ============================ */}
      < section className="hardware-slider-wrapper" >
        <h2 >Building Innovative Businesses with Strong Alliance and Business Partners</h2>
        <div className="hardware-slider-track">
          {images.concat(images).map((img, index) => (
            <div className="hardware-slider-card" key={index}>
              <img src={img} alt="sllider" />
            </div>
          ))}

        </div>
      </section >

      {/* USE CASE */}
      <section className="hardware-usecase">
        <h2>Industries We Serve</h2>

        <div className="hardware-usecase-grid">
          <div>Corporate Offices</div>
          <div>IT Companies</div>
          <div>Healthcare</div>
          <div>Education</div>
          <div>Retail</div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}

      <section className="hardware-faq-section">

        <h2>Frequently Asked Questions</h2>

        <dl className="hardware-faq-list">

          <dt>Q. What Hardware Solutions do you provide?</dt>
          <dd>
            We provide laptops, desktops, workstations, servers, tablets, printers, multifunction devices, and enterprise hardware solutions for businesses of all sizes.
          </dd>

          <dt>Q. Do you provide Hardware Solutions across India?</dt>
          <dd>
            Yes. OL Tech Solutions provides Hardware & Peripheral Solutions across Delhi NCR and PAN India for enterprises, educational institutions, healthcare organizations, and corporate offices.
          </dd>

          <dt>Q. Which brands do you support?</dt>
          <dd>
            We work with leading OEM brands including Dell, HP, Lenovo, Acer, Canon, and other enterprise technology partners.
          </dd>

          <dt>Q. How do Hardware Solutions improve business productivity?</dt>
          <dd>
            Modern hardware solutions improve performance, reliability, scalability, and operational efficiency while reducing downtime and supporting business growth.
          </dd>

          <dt>Q. Do you provide Server and Workstation Solutions?</dt>
          <dd>
            Yes. We offer enterprise-grade servers and high-performance workstations designed for critical workloads, virtualization, storage, and business applications.
          </dd>

        </dl>

      </section>

      {/* CONTACT SECTION */}
      <div className="hardware-contact">

        <video ref={videoRef} autoPlay loop muted className="hardware-video">
          <source src={aboutVideo} type="video/mp4" />
        </video>

        <div className="hardware-overlay"></div>

        <div className="hardware-contact-content">
          <h1>Upgrade Your IT Infrastructure Today</h1>
          <p>Connect with our experts to get the best hardware solutions.</p>

          <Link to="/contact" className="hardware-contact-btn">
            Contact Us
          </Link>
        </div>
      </div>

      <Footer />

      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />

    </div>
  );
};

export default Hardware;