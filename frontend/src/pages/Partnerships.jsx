import React, { useEffect, useRef } from "react";
import "./Partnerships.css";
import BgVideo from "../Images/BgVideo.mp4";
// import Logo from "../Images/Logooltechsolutions.png" 
import aboutVideo from "../Images/aboutVideo.mp4";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import PartnerVideo from "../Images/PartnerVideo.mp4"
import Cisco from "../pages/OemImg/Ciscooltechsolutions.png"
import Ruckus from "../pages/OemImg/Ruckusoltechsolutions.png"
import Bosch from "../pages/OemImg/Boscholtechsolutions.png"
import Sophos from "../pages/OemImg/Security/Sophosoltechsolutions.jpg"
import dell from "../pages/OemImg/Hardware/delloltechsolutions.png"
import HP from "../pages/OemImg/Hardware/HPoltechsolutions.png"
import Polycom from "../pages/OemImg/Communication/Polycomoltechsolutions.png"
import Fortinet from "../pages/OemImg/Fortinetoltechsolutions.png"
import Commvault from "../pages/OemImg/Commvaultoltechsolutions.png"
import DLink from "../pages/OemImg/DLinkoltechsolutions.png"
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
    {/* <Slider/> */}
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
            <source src={PartnerVideo} type="video/mp4" />
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


       
         {/* ==================Slider Section ============================ */}
        < section className="partner-slider-wrapper" >
          <h2 >Building Innovative Businesses with Strong Alliance and Business Partners</h2>
          <div className="partner-slider-track">
            {partners.concat(partners).map((img, index) => (
              <div className="partner-slider-card" key={index}>
                <img src={img.logo} alt="sllider" />
              </div>
            ))}

          </div>
        </section >


        <div className='partnership-contact'>
          <video ref={videoRef} autoPlay loop muted className="video">
            <source src={aboutVideo} type="video/mp4" />
          </video>

          <div className="partnership-overlay"></div>

          <div className="partnership-contact-content">
            <h1>Unlock the Power of OL Tech For Your Business</h1>
            <p>Connect with our experts today to accelerate your business with technology.</p>
            <Link to="/contact" className="partnership-contact-btn">
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