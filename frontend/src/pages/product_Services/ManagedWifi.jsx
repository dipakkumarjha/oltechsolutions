import React, { useEffect, useRef, useState } from "react";
import "./ManagedWifi.css";
import wifi1 from "./productImg/wifi1oltechsolutions.png";
import wifi2 from "./productImg/wifi2oltechsolutions.png";
import wifiVideo from "./productImg/wifiVideo.mp4";
import Footer from "../../components/Footer";
import aboutVideo from "../../Images/aboutVideo.mp4";
import switches from "./productImg/switchesoltechsolutions.jpg";
import router from "./productImg/routeroltechsolutions.jpg";
import racks from "./productImg/racksoltechsolutions.jpg";
import lan from "./productImg/lanoltechsolutions.jpg";
import { Link } from "react-router-dom";

import Cisco from "../OemImg/Ciscooltechsolutions.png";
import HPE from "../OemImg/HPEoltechsolutions.png";
import Ruckus from "../OemImg/Ruckusoltechsolutions.png";
import Ubiquiti from "../OemImg/Ubiquitioltechsolutions.jpg";
import Entegra from "../OemImg/Entegraoltechsolutions.png";
import Cambium from "../OemImg/Cambiumoltechsolutions.png";
import Engenuis from "../OemImg/Engeniusoltechsolutions.jpg";
import Popup from "../../components/Popup";
import AIChatBot from "../../components/AIChatBot/AIChatBot";

const ManagedWifi = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  const images = [
    Cisco,
    HPE,
    Ruckus,
    Ubiquiti,
    Entegra,
    Cambium,
    Engenuis,
  ];

  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="managed-wifi-page">

      {/* HERO SECTION */}
      <section className="wifi-hero">
        <video ref={videoRef} autoPlay loop muted className="hero-video">
          <source src={wifiVideo} type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        {/* <div className="wifi-hero-content">
          <h1>Managed WiFi Solutions for Modern Enterprises</h1>
 
          <p>
            Build secure, scalable, and high-performance wireless network
            infrastructure for offices, campuses, warehouses, hotels,
            healthcare facilities, educational institutions, and enterprise
            environments with OL Tech Solutions.
          </p>
        </div> */}

        <div className="wifi-hero-buttons">
          <button
            className="wifi-demo-btn"
            onClick={() => {
              setShowPopup(true);
              document.body.style.overflow = "hidden";
            }} 
          >
            BOOK DEMO
          </button>

          <Link to="/chat" className="wifi-whatsapp-btn">
            CHAT ON WHATSAPP
          </Link>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="wifi-card-services">
        <h2>Our Enterprise Wi-Fi Expertise</h2>

        <div className="wifi-grid">

          <div className="wifi-card">
            <img
              src={switches}
              alt="Enterprise Network Switch Solutions"
            />

            <h3>Enterprise Switches</h3>

            <p>
              Deploy high-performance enterprise network switches designed
              for seamless connectivity, intelligent traffic management,
              VLAN support, secure data transfer, and reliable business
              communication across modern IT infrastructures.
            </p>
          </div>

          <div className="wifi-card">
            <img
              src={router}
              alt="Business Router Solutions"
            />

            <h3>Business Routers</h3>

            <p>
              Our enterprise-grade router solutions deliver secure internet
              connectivity, VPN integration, advanced firewall protection,
              bandwidth optimization, and uninterrupted high-speed network
              performance for growing organizations.
            </p>
          </div>

          <div className="wifi-card">
            <img
              src={racks}
              alt="Network Rack Infrastructure"
            />

            <h3>🗄️ Network Racks</h3>

            <p>
              Organize and secure your IT infrastructure with premium
              network rack systems engineered for cable management,
              airflow optimization, equipment protection, and scalable
              enterprise deployment.
            </p>
          </div>

          <div className="wifi-card">
            <img
              src={lan}
              alt="LAN WAN Network Infrastructure"
            />

            <h3>LAN / WAN Solutions</h3>

            <p>
              Build reliable LAN and WAN connectivity solutions for secure
              communication, optimized data transmission, remote access,
              and enterprise-wide networking across multiple business locations.
            </p>
          </div>

        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="wifi-overview">
        <div className="overview-container">

          <div className="overview-text">
            <h2>Enterprise Managed WiFi Infrastructure Solutions</h2>

            <p>
              OL Tech Solutions delivers advanced Managed WiFi Solutions
              designed to provide secure wireless connectivity,
              centralized network management, seamless roaming,
              and enterprise-grade performance for modern businesses.
            </p>

            <p>
              From WiFi deployment and network optimization to
              performance monitoring and security management,
              our team ensures reliable wireless infrastructure
              for offices, corporate buildings, educational campuses,
              healthcare facilities, warehouses, hotels,
              retail stores, and large enterprise environments.
            </p>

            <p>
              Our scalable wireless networking solutions help businesses
              improve productivity, support cloud applications,
              simplify communication, and maintain uninterrupted
              connectivity for employees, customers, and smart devices.
            </p>
          </div>

          <div className="overview-image">
            <img
              src={wifi1}
              alt="Enterprise WiFi Infrastructure"
            />
          </div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="wifi-keyfeatures">
        <h2>Key Features of OL Tech Managed WiFi Solutions</h2>

        <div className="features-grid">

          <div className="wifi-feature-card">
            <h3>📡 24/7 Network Monitoring</h3>

            <p>
              Continuous real-time network monitoring and proactive
              troubleshooting ensure uninterrupted connectivity,
              reduced downtime, and optimized wireless performance.
            </p>
          </div>

          <div className="wifi-feature-card">
            <h3>Advanced WiFi Security</h3>

            <p>
              Protect business data with enterprise-grade encryption,
              firewall integration, secure authentication,
              access control, and advanced wireless security protocols.
            </p>
          </div>

          <div className="wifi-feature-card">
            <h3>⚙️ Automated Recovery</h3>

            <p>
              Intelligent failover systems and automated recovery
              mechanisms minimize disruptions and maintain stable
              wireless connectivity across your organization.
            </p>
          </div>

          <div className="wifi-feature-card">
            <h3>Centralized Management</h3>

            <p>
              Manage multiple office locations and wireless access
              points through a centralized dashboard with simplified
              monitoring, reporting, and configuration management.
            </p>
          </div>

          <div className="wifi-feature-card">
            <h3>Cloud Integration</h3>

            <p>
              Seamlessly integrate with Microsoft 365, Azure,
              AWS, Google Workspace, and cloud platforms
              for enhanced collaboration and productivity.
            </p>
          </div>

          <div className="wifi-feature-card">
            <h3>Enterprise Access Points</h3>

            <p>
              High-performance wireless access points provide
              seamless coverage, faster speeds,
              and reliable enterprise connectivity
              across large and high-density environments.
            </p>
          </div>

        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="ai-features">
        <h2>Top Benefits of OL Tech Managed WiFi Solutions</h2>

        <p>
          Empower your business with secure, scalable,
          and high-speed wireless networking solutions
          designed to improve productivity,
          communication, collaboration,
          and digital transformation.
        </p>

        <div className="ai-grid">

          <div className="ai-card">
            <h3>High-Speed Connectivity</h3>

            <p>
              Experience ultra-fast internet connectivity
              for cloud applications, business operations,
              streaming, collaboration, and enterprise workflows.
            </p>
          </div>

          <div className="ai-card">
            <h3>Scalable Infrastructure</h3>

            <p>
              Easily expand your wireless infrastructure
              as your business grows with scalable
              enterprise WiFi networking solutions.
            </p>
          </div>

          <div className="ai-card">
            <h3>Smart Optimization</h3>

            <p>
              AI-powered bandwidth optimization and
              intelligent traffic management improve
              user experience and network efficiency.
            </p>
          </div>

          <div className="ai-card">
            <h3>Wide Coverage</h3>

            <p>
              Deliver strong and reliable wireless coverage
              across offices, campuses, warehouses,
              hotels, and enterprise buildings.
            </p>
          </div>

        </div>
      </section>

      {/* PARTNER SECTION */}
      <section className="wifi-slider-wrapper">
        <h2>
          Building Innovative Businesses with Strong Alliance and Technology Partners
        </h2>

        <div className="wifi-slider-track">
          {images.concat(images).map((img, index) => (
            <div className="wifi-slider-card" key={index}>
              <img src={img} alt="Technology Partners" />
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="wifi-benefits">
        <div className="benefits-container">

          <div className="benefits-image">
            <img src={wifi2} alt="Managed WiFi Benefits" />
          </div>

          <div className="benefits-text">
            <h2>Why Businesses Choose OL Tech Managed WiFi Solutions</h2>

            <ul>
              <li>✔ Seamless WiFi Coverage Across Enterprise Environments</li>
              <li>✔ Scalable Infrastructure Supporting Thousands of Devices</li>
              <li>✔ Industrial-Grade Wireless Networking Solutions</li>
              <li>✔ AI-Powered Security Integration with Firewall & EDR</li>
              <li>✔ ISO 27001 Aligned Network Security Standards</li>
              <li>✔ Centralized Wireless Network Management</li>
              <li>✔ Secure Guest WiFi & Employee Access Control</li>
              <li>✔ Reliable Connectivity for Cloud & Hybrid Workspaces</li>
            </ul>
          </div>

        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="wifi-usecase">
        <h2>Industries We Serve with Enterprise WiFi Solutions</h2>

        <div className="usecase-grid">

          <div>
            <h3>Educational Campuses & Universities</h3>

            <p>
              Deliver high-density campus WiFi solutions
              for digital classrooms, e-learning platforms,
              libraries, hostels, research labs,
              and student collaboration environments.
            </p>
          </div>

          <div>
            <h3>Corporate Offices & Business Parks</h3>

            <p>
              Enable secure enterprise communication,
              hybrid work environments,
              cloud collaboration,
              and high-speed connectivity
              for modern corporate offices.
            </p>
          </div>

          <div>
            <h3>Government & Public Sector Organizations</h3>

            <p>
              Deploy secure wireless infrastructure
              with enterprise-grade security,
              encrypted communication,
              and centralized network management.
            </p>
          </div>

          <div>
            <h3>Manufacturing & Industrial Enterprises</h3>

            <p>
              Support industrial automation,
              warehouse operations,
              IoT connectivity,
              robotics,
              and real-time monitoring
              with rugged enterprise WiFi solutions.
            </p>
          </div>

          <div>
            <h3>IT Parks & Workforce Buildings</h3>

            <p>
              Provide scalable wireless networking infrastructure
              for IT parks, enterprise workspaces,
              startups, and large workforce environments.
            </p>
          </div>

        </div>
      </section>


      {/* ================= FAQ SECTION ================= */}

      <section className="wifi-faq-section">

        <h2>Frequently Asked Questions</h2>

        <dl className="wifi-faq-list">

          <dt>Q. What are Managed WiFi Solutions?</dt>
          <dd>
            Managed WiFi Solutions provide centralized monitoring, security, optimization, and management of wireless networks to ensure reliable and high-performance connectivity across business environments.
          </dd>

          <dt>Q. Do you provide Enterprise WiFi Solutions across India?</dt>
          <dd>
            Yes. OL Tech Solutions delivers Enterprise WiFi, LAN/WAN, Switching, Routing, and Wireless Infrastructure Solutions across Delhi NCR and PAN India.
          </dd>

          <dt>Q. Which industries can benefit from Managed WiFi Solutions?</dt>
          <dd>
            Managed WiFi Solutions are ideal for corporate offices, educational institutions, healthcare facilities, hotels, manufacturing units, warehouses, retail stores, and government organizations.
          </dd>

          <dt>Q. Do you provide WiFi Security and Network Monitoring?</dt>
          <dd>
            Yes. Our solutions include advanced WiFi security, firewall integration, network monitoring, access control, secure authentication, and proactive performance management.
          </dd>

          <dt>Q. Why is Enterprise WiFi important for modern businesses?</dt>
          <dd>
            Enterprise WiFi improves productivity, supports cloud applications, enables hybrid work environments, enhances collaboration, and provides secure connectivity for employees and devices.
          </dd>

          <dt>Q. Do you provide LAN, WAN, Switches, and Router Solutions?</dt>
          <dd>
            Yes. We offer complete networking solutions including enterprise switches, business routers, network racks, structured cabling, LAN/WAN infrastructure, and wireless deployments.
          </dd>

        </dl>

      </section>

      {/* CONTACT SECTION */}
      <div className="wifi-contact">
        <video ref={videoRef} autoPlay loop muted className="wifi-video">
          <source src={aboutVideo} type="video/mp4" />
        </video>

        <div className="wifi-overlay"></div>

        <div className="wifi-contact-content">
          <h1>
            Transform Your Business with Enterprise Managed WiFi Solutions
          </h1>

          <p>
            Connect with OL Tech Solutions to deploy secure,
            scalable, and high-performance wireless infrastructure
            tailored for your business environment.
          </p>

          <Link to="/contact" className="wifi-contact-btn">
            Contact Us
          </Link>
        </div>
      </div>

      <AIChatBot />
      <Footer />

      <Popup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />

    </div>
  );
};

export default ManagedWifi;