import React, { useEffect, useRef } from "react";
import "./Partnerships.css";
import BgVideo from "../Images/BgVideo.mp4";
import Logo from "../Images/Logo.png"
import aboutVideo from "../Images/aboutVideo.mp4";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import Cisco from "../pages/OemImg/Cisco.png"
import Ruckus from "../pages/OemImg/Ruckus.png"
import Bosch from "../pages/OemImg/Bosch.png"
import Sophos from "../pages/OemImg/Security/Sophos.jpg"
import dell from "../pages/OemImg/Hardware/dell.png"
import HP from "../pages/OemImg/Hardware/HP.jpg"
import Polycom from "../pages/OemImg/Communication/Polycom.png"
import Fortinet from "../pages/OemImg/Fortinet.png"
import Commvault from "../pages/OemImg/Commvault.png"
import DLink from "../pages/OemImg/DLink.png"
import Slider from "../components/Slider";

const partners = [
  {
    name: "Cisco",
    logo: Cisco,
    desc: "Global leader in enterprise networking, security, and IT infrastructure solutions."
  },
  {
    name: "Shophos",
    logo: Sophos,
    desc: "World’s most comprehensive cloud platform for scalable infrastructure."
  },
  {
    name: "Fortinate",
    logo: Fortinet,
    desc: "Enterprise cloud, productivity, and advanced computing solutions."
  },
  {
    name: "Ruckus",
    logo: Ruckus,
    desc: "Advanced cybersecurity solutions including firewall and threat protection."
  },
  {
    name: "Dell Technologies",
    logo: dell,
    desc: "Enterprise servers, storage, and modern IT infrastructure solutions."
  },
  {
    name: "HP Enterprise",
    logo: HP,
    desc: "Reliable enterprise computing and infrastructure technologies."
  },
  {
    name: "Commvault",
    logo: Commvault ,
    desc: "Database, enterprise software, and cloud infrastructure provider."
  },
  {
    name: "Bosch",
    logo: Bosch,
    desc: "Industry leader in virtualization and cloud infrastructure."
  },
  {
    name: "D-Link",
    logo: DLink,
    desc: "Next-generation cybersecurity and network protection."
  },
  {
    name: "Polycom",
    logo: Polycom,
    desc: "Enterprise IT, AI, and hybrid cloud solutions provider."
  }
];

const Partnership = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  return (
    <>
    <Slider/>
      <div className="partnership-page">

        {/* HERO SECTION */}

        <div className="partnership-hero">

          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          >
            <source src={BgVideo} type="video/mp4" />
          </video>

          <div className="hero-content">

            <h1>Our Global Technology Partners</h1>

            <p>
              OL Tech Solutions collaborates with industry-leading global technology
              providers to deliver secure, scalable, and enterprise-grade IT solutions.
            </p>

          </div>

        </div>



        {/* PARTNERS SECTION */}

        <div className="partners-section">

          <h2 className="section-title">
            Trusted by Industry Leaders Worldwide
          </h2>


          <div className="partners-grid">

            {partners.map((partner, index) => (

              <div className="partner-card" key={index}>

                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo"
                />

                <h3>{partner.name}</h3>

                <p>{partner.desc}</p>

              </div>

            ))}

          </div>

        </div>


        {/* ===== PARTNER LOGO SLIDER ===== */}

        <div className="logo-slider-section">

          <h2 className="section-title">
            Our Trusted Technology Partners
          </h2>

          <div className="logo-slider">

            <div className="logo-track">

              {/* first set */}
              {partners.map((partner, index) => (
                <div className="logo-slide" key={"first" + index}>
                  <img src={partner.logo} alt={partner.name} />
                </div>
              ))}

              {/* duplicate set for infinite loop */}
              {partners.map((partner, index) => (
                <div className="logo-slide" key={"second" + index}>
                  <img src={partner.logo} alt={partner.name} />
                </div>
              ))}

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

      </div>

      <Footer />
    </>
  );
};

export default Partnership;