
import React, { useEffect, useRef, useState } from "react";
import "./SoftwareLicence.css";

import Software1 from "./productImg/Software1oltechsolutions.png";
import Software2 from "./productImg/Software2oltechsolutions.png";
import Software3 from "./productImg/Software3oltechsolutions.jpg";

import aboutVideo from "../../Images/aboutVideo.mp4";
import ServiceVideo from "../../Images/ServiceVideo.mp4";

import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

import google from "../OemImg/Software/googleoltechsolutions.png";
import Adobe from "../OemImg/Software/Adobeoltechsolutions.png";
import Microsoft from "../OemImg/Software/Microsoftoltechsolutions.png";
import office from "../OemImg/Software/officeoltechsolutions.jpg";

import Popup from "../../components/Popup";
import AIChatBot from "../../components/AIChatBot/AIChatBot";

const SoftwareLicence = () => {

  const images = [google, Adobe, Microsoft, office];

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <section className="sl-page">

        {/* HERO SECTION */}
        <div className="sl-hero">

          <video autoPlay loop muted className="hero-video">
            <source src={ServiceVideo} type="video/mp4" />
          </video>

          <div className="sl-overlay"></div>

          {/* <div className="sl-hero-content">

            <h1>
              Enterprise Software Licensing & Cloud Solutions
            </h1>

            <p>
              OL Tech Solutions provides secure,
              scalable,
              and enterprise-grade software licensing solutions
              including Microsoft licenses,
              Adobe licenses,
              Office 365 solutions,
              Google Workspace,
              cloud applications,
              and business productivity platforms
              for modern organizations.
            </p>

          </div> */}

          <div className="comm-hero-buttons">

            <button
              className="comm-demo-btn"
              onClick={() => {
                setShowPopup(true);
                document.body.style.overflow = "hidden";
              }}
            >
              BOOK DEMO
            </button>

            <Link to="/chat" className="comm-whatsapp-btn">
              CHAT ON WHATSAPP
            </Link>

          </div>
        </div>

        {/* INTRO SECTION */}
        <div className="sl-intro">

          <h2>
            Smart Software Solutions for Modern Enterprises
          </h2>

          <p>
            OL Tech Solutions delivers enterprise software solutions
            designed to improve productivity,
            streamline business operations,
            enhance collaboration,
            and accelerate digital transformation.
            Our software licensing services help organizations deploy
            genuine,
            secure,
            and scalable software environments
            while maintaining compliance and operational efficiency.
          </p>

          <p>
            From Microsoft Office 365 solutions
            and Adobe licensing
            to cloud-based business applications
            and enterprise software deployment,
            we provide reliable software infrastructure
            tailored to modern business requirements.
            Our solutions are designed for scalability,
            security,
            seamless integration,
            and long-term business growth.
          </p>

        </div>

        {/* SERVICES SECTION */}
        <section className="slcardservices">

          <h2>
            Our Enterprise Software Licensing Expertise
          </h2>

          <div className="slgrid">

            <div className="slcard">

              <img
                src={Software1}
                alt="Microsoft and Adobe Licensing Solutions"
              />

              <h3>💻 Microsoft & Adobe Licenses</h3>

              <p>
                Secure genuine Microsoft and Adobe software licenses
                for enterprises,
                businesses,
                educational institutions,
                and corporate environments with reliable compliance,
                automatic updates,
                and enterprise productivity features.
              </p>

            </div>

            <div className="slcard">

              <img
                src={Software1}
                alt="Server Licensing Solutions"
              />

              <h3>Server Licensing Solutions</h3>

              <p>
                Enterprise server licensing solutions provide
                secure infrastructure deployment,
                centralized management,
                virtualization support,
                and reliable performance
                for modern IT environments and business networks.
              </p>

            </div>

            <div className="slcard">

              <img
                src={Software1}
                alt="Office 365 and Email Solutions"
              />

              <h3>Office 365 & Email Solutions</h3>

              <p>
                Improve business communication and collaboration
                with Microsoft Office 365,
                enterprise email hosting,
                cloud productivity tools,
                secure business communication,
                and remote workforce solutions.
              </p>

            </div>

            <div className="slcard">

              <img
                src={Software1}
                alt="Google Workspace Business Solutions"
              />

              <h3>Google Workspace Solutions</h3>

              <p>
                Deploy secure Google Workspace solutions
                for cloud collaboration,
                business email,
                online meetings,
                shared productivity,
                and modern digital workplace management.
              </p>

            </div>

          </div>
        </section>

        {/* SERVICE DETAILS */}
        <div className="sl-services">

          <div className="sl-service">

            <div className="sl-service-img">
              <img
                src={Software1}
                alt="Software License Management Solutions"
              />
            </div>

            <div className="sl-service-content">

              <h3>
                Enterprise Software License Management
              </h3>

              <p>
                Software License Management solutions help businesses
                track,
                manage,
                and optimize software usage
                while ensuring compliance with licensing policies
                and vendor agreements.
                Our centralized software asset management approach
                helps organizations reduce unnecessary software costs,
                prevent compliance risks,
                and improve operational efficiency.
              </p>

              <p>
                With advanced software license tracking,
                renewal management,
                and deployment monitoring,
                businesses gain better visibility
                into their enterprise software infrastructure
                while maintaining secure,
                updated,
                and properly licensed environments.
              </p>

            </div>
          </div>

          <div className="sl-service reverse">

            <div className="sl-service-img">
              <img
                src={Software2}
                alt="Custom Software Development Services"
              />
            </div>

            <div className="sl-service-content">

              <h3>
                Custom Software Development Solutions
              </h3>

              <p>
                Custom software development services
                help businesses build scalable,
                secure,
                and business-focused applications
                tailored to unique operational requirements.
                From enterprise web applications
                and mobile platforms
                to workflow automation systems,
                our custom solutions improve productivity
                and simplify digital operations.
              </p>

              <p>
                Built using modern technologies
                and scalable architecture,
                our software development solutions ensure
                seamless integration,
                long-term flexibility,
                enhanced user experience,
                and future-ready business performance.
              </p>

            </div>
          </div>

          <div className="sl-service">

            <div className="sl-service-img">
              <img
                src={Software3}
                alt="Cloud Based Business Applications"
              />
            </div>

            <div className="sl-service-content">

              <h3>
                Cloud-Based Business Applications
              </h3>

              <p>
                Cloud-based applications provide businesses
                with flexible,
                secure,
                and scalable access
                to software and business data from anywhere.
                These solutions help organizations improve collaboration,
                support remote work environments,
                and simplify enterprise operations.
              </p>

              <p>
                With cloud infrastructure,
                automatic updates,
                high availability,
                and enterprise-grade security,
                businesses can reduce operational costs,
                improve efficiency,
                and scale digital operations seamlessly
                as organizational requirements evolve.
              </p>

            </div>
          </div>

        </div>

        {/* PARTNER SECTION */}
        <section className="sl-slider-wrapper">

          <h2>
            Building Innovative Businesses with Trusted Technology Partners
          </h2>

          <div className="sl-slider-track">

            {images.concat(images).map((img, index) => (
              <div className="sl-slider-card" key={index}>
                <img src={img} alt="Software Technology Partners" />
              </div>
            ))}

          </div>
        </section>

        {/* INDUSTRIES SECTION */}
        <div className="sl-projects">

          <h2>
            Industries & Enterprise Projects We Support
          </h2>

          <div className="sl-project-grid">

            <div>Enterprise ERP Software Deployments</div>

            <div>Healthcare Software Licensing Solutions</div>

            <div>Education Cloud SaaS Platforms</div>

            <div>Government Compliance Management Systems</div>

            <div>Retail POS & Billing Software Integration</div>

            <div>Financial Management & Accounting Systems</div>

          </div>
        </div>

        {/* SOFTWARE FAQ SECTION */}
        <section className="sl-faq-section">

          <h2>Software Licensing FAQs</h2>

          <dl className="sl-faq-list">

            <dt>Q. What software licensing solutions does OL Tech Solutions provide?</dt>
            <dd>
              We provide Microsoft Licensing, Adobe Licensing, Office 365 Solutions,
              Google Workspace, Server Licensing, and enterprise software deployment services.
            </dd>

            <dt>Q. Why is software license management important for businesses?</dt>
            <dd>
              Software license management helps organizations maintain compliance,
              reduce unnecessary costs, and gain complete visibility over software assets.
            </dd>

            <dt>Q. Do you provide Microsoft Office 365 deployment and migration services?</dt>
            <dd>
              Yes. We help businesses deploy, migrate, configure, and manage
              Microsoft 365 environments securely and efficiently.
            </dd>

            <dt>Q. Can OL Tech Solutions help with Google Workspace implementation?</dt>
            <dd>
              Yes. We provide Google Workspace setup, migration,
              configuration, and ongoing support.
            </dd>

            <dt>Q. Do you offer server licensing solutions?</dt>
            <dd>
              Yes. We provide compliant server licensing solutions
              for enterprise IT infrastructure and virtualization environments.
            </dd>

            <dt>Q. Do you provide genuine Microsoft and Adobe licenses?</dt>
            <dd>
              Yes. We provide genuine and authorized Microsoft and Adobe licensing
              solutions for businesses and enterprises.
            </dd>

            <dt>Q. Can you help migrate existing emails to Microsoft 365 or Google Workspace?</dt>
            <dd>
              Yes. Our team can securely migrate emails, users, and business data
              with minimal downtime.
            </dd>

            <dt>Q. Do you provide cloud-based software solutions?</dt>
            <dd>
              Yes. We offer cloud applications, SaaS solutions,
              Office 365, Google Workspace, and business productivity platforms.
            </dd>

          </dl>

        </section>


        {/* CONTACT SECTION */}
        <div className="sl-contact">

          <video ref={videoRef} autoPlay loop muted className="sl-video">
            <source src={aboutVideo} type="video/mp4" />
          </video>

          <div className="sl-overlay"></div>

          <div className="sl-contact-content">

            <h1>
              Transform Your Business with Smart Software Solutions
            </h1>

            <p>
              Connect with OL Tech Solutions
              for enterprise software licensing,
              Office 365 deployment,
              Google Workspace solutions,
              cloud applications,
              and secure business productivity platforms.
            </p>

            <Link to="/contact" className="sl-contact-btn">
              Contact Us
            </Link>

          </div>
        </div>

      </section>

      <AIChatBot/>
      <Footer />

      <Popup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />
    </>
  );
};

export default SoftwareLicence;