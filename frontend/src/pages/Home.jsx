import React, { useState, useEffect, useRef } from "react";
import "./Home.css";

import sliderimage from "../Images/sliderimage.png";
import profile from "../Images/profileoltechsolutions.png";
import ContactForm from "../components/ContactForm";
import BgVideo from "../Images/BgVideo.mp4";
import cpu from "../Images/cpuoltechsolutions.jpg";
import wifi from "../Images/productImg/wifioltechsolutions.png";
import Hardware from "../Images/productImg/Hardwareoltechsolutions.png";
import DataCenter from "../Images/productImg/DataCenteroltechsolutions.png";
import Software from "../Images/productImg/Softwareoltechsolutions.png";
import Security from "../Images/productImg/Securityoltechsolutions.png";
import Survillance from "../Images/productImg/Survillanceoltechsolutions.png";
import Communication from "../Images/productImg/Communicationoltechsolutions.png";
import Telecome from "../Images/productImg/Telecomeoltechsolutions.png";

import Footer from "../components/Footer";
import GovSlider from "../components/GovSlider";
import PrivSlider from "../components/PrivSlider";
import { Link } from "react-router-dom";
import Popup from "../components/Popup";

const Home = () => {
  const videoRef = useRef(null);



  const cardServices = [
    {
      id: "managed-wifi",
      title:
        "OL Tech Solutions provides fast, secure, and reliable Wi-Fi networking solutions to keep your business connected and productive.",
      img: wifi,
    },
    {
      id: "manage-security",
      title:
        "OL Tech Solutions provides fast,secure,and reliable Cyber solutions to protect your business from digital threats and keep your systems safe.",
      img: Security,
    },
    {
      id: "Communication-Collaboration",
      title:
        "OL Tech Solutions provides fast, reliable Communication & Collaboration solutions to keep your teams connected and productive.",
      img: Communication,
    },
    {
      id: "software-licence",
      title:
        "OL Tech Solutions provides genuine and reliable Software & License solutions to ensure secure, compliant, and efficient business operations.",
      img: Software,
    },
    {
      id: "hardware",
      title:
        "OL Tech Solutions provides reliable Hardware solutions to support smooth,efficient,and high-performance business.",
      img: Hardware,
    },
    {
      id: "cloud-data-center",
      title:
        "OL Tech Solutions provides reliable Cloud & Data Center solutions to ensure secure, scalable, and efficient data management.",
      img: DataCenter,
    },
    {
      id: "surveillance",
      title:
        "OL Tech Solutions provides reliable Surveillance solutions to ensure real-time monitoring, enhanced security, management.",
      img: Survillance,
    },
    {
      id: "telecom",
      title:
        "OL Tech Solutions provides reliable Telecom Services to ensure seamless connectivity and efficient business communication.",
      img: Telecome,
    },
  ];

  const clientsData = [
    {
      img: profile,
      feedback:
        "OL Tech Solutions transformed our network infrastructure with high-speed connectivity and strong security. Their team is highly professional and responsive.",
      rating: "★★★★★",
    },
    {
      img: profile,
      feedback:
        "We experienced a significant improvement in performance and reliability after implementing OL Tech’s solutions. Excellent service and timely support.",
      rating: "★★★★★",
    },
    {
      img: profile,
      feedback:
        "OL Tech Solutions provided us with scalable and secure IT services that perfectly fit our business needs. Their expertise and support truly stand out.",
      rating: "★★★★★",
    },
  ];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-left, .scroll-right");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);



  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      {/* ================= HERO SECTION START ================= */}
      <section className="hero-section">
        <video ref={videoRef} autoPlay loop muted className="video">
          <source src={BgVideo} type="video/mp4" />
        </video>

        <div className="hero-container">
          <div className="right">
            <h2>
              <span className="brand-name">
                OL Tech Solutions<sup>®</sup>
              </span>{" "}
              India’s Trusted Partner for{" "}
              <span className="gradient-text">Sovereign Digital</span>{" "}
              Infrastructure Cyber Security, {" "}
              <span className="second-line">
                Security, AI Solutions, Cloud Computing, Data Center, Modern IT Infrastructure,
              </span>{" "}
              <span className="third-line">
                Network Security for Next-Gen Digital Transformation Technologies.
              </span>
            </h2>
          </div>
        </div>

        <div className="hero-buttons">
          <button
            className="demo-btn" onClick={() => {
              setShowPopup(true);
              document.body.style.overflow = "hidden";
            }}
          >
            BOOK DEMO
          </button>

          <Link to="/chat" className="whatsapp-btn">
            CHAT ON WHATSAPP
          </Link>

        </div>

      </section>
      {/* ================= HERO SECTION END ================= */}

      {/* ================= SERVICES SECTION START ================= */}
      <section className="services-section">
        <h2 className="heading">
          India’s Advanced Tech Stack for a Secure, Scalable, and Future-Ready
          Digital Transformation Ecosystem
        </h2>

        <div className="services">
          {cardServices.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.img} alt={item.title} className="card-img" />
              <p className="about-card-services">{item.title}</p>
              <button
                className="read-more"
                onClick={() => window.open(`/${item.id}`)}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* ================= SERVICES SECTION END ================= */}

      {/* ================= WHY CHOOSE US START ================= */}
      <section className="why-choose-us">
        <div className="why-choose-top">
          <h2>The Future is Built on OL Tech Solutions</h2>
        </div>

        <div className="why-choose-content">
          <div className="choose-column left">
            <div className="choose-card scroll-left">
              <img src={cpu} alt="cpu" />
              <div className="card-content">
                <h5>Robust IT Infrastructure</h5>
                <p>
                  Built on OL Tech, robust IT infrastructure ensures high
                  performance, reliability, and seamless connectivity for
                  business operations.
                </p>
              </div>
            </div>

            <div className="choose-card scroll-left">
              <img src={cpu} alt="cpu" />
              <div className="card-content">
                <h5>Modern Security Solutions</h5>
                <p>
                  Built on OL Tech, modern security solutions deliver advanced
                  threat protection, real-time monitoring, and secure data
                  management.
                </p>
              </div>
            </div>

            <div className="choose-card scroll-left">
              <img src={cpu} alt="cpu" />
              <div className="card-content">
                <h5>Cloud Solutions Management</h5>
                <p>
                  Built on OL Tech, cloud solutions management ensures scalable
                  infrastructure, secure data access, and efficient resource
                  optimization.
                </p>
              </div>
            </div>
          </div>

          <div className="choose-column right">
            <div className="choose-card scroll-right">
              <img src={cpu} alt="cpu" />
              <div className="card-content">
                <h5>Analytics & BI</h5>
                <p>
                  Built on OL Tech, analytics & BI enable data-driven insights,
                  real-time reporting, and smarter business decision-making.
                </p>
              </div>
            </div>

            <div className="choose-card scroll-right">
              <img src={cpu} alt="cpu" />
              <div className="card-content">
                <h5>Custom Software Development</h5>
                <p>
                  Built on OL Tech, custom software development delivers
                  tailored, scalable, and efficient solutions to meet unique
                  business needs.
                </p>
              </div>
            </div>

            <div className="choose-card scroll-right">
              <img src={cpu} alt="cpu" />
              <div className="card-content">
                <h5>Innovative Web Development</h5>
                <p>
                  Built on OL Tech, innovative web development delivers modern,
                  responsive, and high-performance digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= WHY CHOOSE US END ================= */}

      {/* ================= GOV/PRIVATE SLIDER START ================= */}
      <GovSlider />
      <PrivSlider />
      {/* ================= GOV/PRIVATE SLIDER END ================= */}

      {/* ================= CLIENT FEEDBACK START ================= */}
      <section className="client-section">
        <h2>Clients Feedbacks</h2>

        <div className="feedback">
          {clientsData.map((client, index) => (
            <div className="client" key={index}>
              <img src={profile} className="client-img" alt="client" />

              <p className="about-client">{client.feedback}</p>

              {/* <button className="read-more">Read More</button> */}

              <p className="ratings">{client.rating}</p>
            </div>
          ))}
        </div>
      </section>
      {/* ================= CLIENT FEEDBACK END ================= */}


      {/* ================= FAQ SECTION START ================= */}

      <section className="home-faq-section">

        <h2>
          Frequently Asked Questions
        </h2>

        <div className="home-faq-wrapper">

          {/* LEFT COLUMN */}

          <div className="home-faq-column">

            <div className="home-faq-item">
              <h3>What services does OL Tech Solutions provide?</h3>
              <p>
                OL Tech Solutions provides IT Infrastructure, Managed WiFi,
                Cyber Security, Cloud Solutions, Data Center Services,
                Software Licensing, Telecom Services, Surveillance Systems,
                Hardware Solutions, and Digital Transformation services across India.
              </p>
            </div>

            <div className="home-faq-item">
              <h3>How can OL Tech Solutions help businesses with digital transformation?</h3>
              <p>
                We help organizations modernize their IT infrastructure,
                improve security, migrate to cloud platforms,
                optimize communication systems, and implement scalable digital technologies.
              </p>
            </div>

            <div className="home-faq-item">
              <h3>Do you provide enterprise WiFi and network solutions?</h3>
              <p>
                Yes. We design, deploy, and manage enterprise-grade WiFi,
                LAN, WAN, SD-WAN, and secure networking solutions
                for businesses of all sizes.
              </p>
            </div>

            <div className="home-faq-item">
              <h3>What cyber security services do you offer?</h3>
              <p>
                Our cyber security services include endpoint security,
                firewall management, threat detection, vulnerability assessment,
                data protection, and network security solutions.
              </p>
            </div>

            <div className="home-faq-item">
              <h3>Do you provide cloud and data center solutions?</h3>
              <p>
                Yes. We offer cloud migration, cloud infrastructure,
                virtual servers, backup solutions, disaster recovery,
                and enterprise data center services.
              </p>
            </div>

            <div className="home-faq-item">
              <h3>Can OL Tech Solutions provide software licensing services?</h3>
              <p>
                We provide Microsoft Licensing, Adobe Licensing,
                Office 365 Solutions, Google Workspace,
                Server Licensing, and enterprise software management solutions.
              </p>
            </div>

          </div>

          {/* CENTER LINE */}

          <div className="home-faq-divider"></div>

          {/* RIGHT COLUMN */}

          <div className="home-faq-column">

            <div className="home-faq-item">
              <h3>Do you offer telecom and communication solutions?</h3>
              <p>
                Yes. We provide SIP Trunk, PRI, EPABX, IP-PBX,
                Smart ILL, SD-WAN, and business communication solutions.
              </p>
            </div>

            <div className="home-faq-item">
              <h3>What surveillance and security solutions do you provide?</h3>
              <p>
                We deliver CCTV surveillance, biometric access control,
                video monitoring, public address systems,
                and integrated building management solutions.
              </p>
            </div>

            <div className="home-faq-item">
              <h3>Which industries does OL Tech Solutions serve?</h3>
              <p>
                We serve corporate enterprises, government organizations,
                healthcare, education, manufacturing, banking,
                retail, hospitality, and industrial sectors.
              </p>
            </div>

            <div className="home-faq-item">
              <h3>Do you provide PAN India IT support and deployment services?</h3>
              <p>
                Yes. Our team supports businesses across India
                with deployment, implementation, maintenance,
                and ongoing technical support services.
              </p>
            </div>

            <div className="home-faq-item">
              <h3>Why should businesses choose OL Tech Solutions?</h3>
              <p>
                We combine technical expertise, trusted technology partnerships,
                scalable solutions, dedicated support,
                and industry experience to deliver reliable business outcomes.
              </p>
            </div>

            <div className="home-faq-item">
              <h3>How can I contact OL Tech Solutions for a consultation?</h3>
              <p>
                You can contact our team through our website,
                WhatsApp support, contact form,
                or request a free consultation for your business requirements.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= FAQ SECTION END ================= */}

      {/* ================= FOOTER START ================= */}
      <Footer />
      {/* ================= FOOTER END ================= */}

      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </>
  );
};

export default Home;