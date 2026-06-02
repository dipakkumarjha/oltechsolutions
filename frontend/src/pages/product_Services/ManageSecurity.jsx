// import React, { useState, useEffect, useRef } from "react";
// import "./ManageSecurity.css";
// // import Security from "../../Images/productImg/Security.png";
// import aboutVideo from "../../Images/aboutVideo.mp4"
// import Footer from "../../components/Footer";
// import { Link } from "react-router-dom";
// import securityVideo from './productImg/securityVideo.mp4'
// import TrendMicro from "../OemImg/Security/TrendMicrooltechsolutions.png"
// import Sophos from "../OemImg/Security/Sophosoltechsolutions.jpg";
// import Seqrite from "../OemImg/Security/Seqriteoltechsolutions.jpg"
// import Safetica from "../OemImg/Security/Safeticaoltechsolutions.png";
// import Palo from "../OemImg/Security/Palooltechsolutions.png";
// import Mcafee from "../OemImg/Security/Mcafeeoltechsolutions.png";
// import Kaspersky from "../OemImg/Security/Kasperskyoltechsolutions.png";
// import Crowdstrike from "../OemImg/Security/Crowdstrikeoltechsolutions.png";
// import Cososys from "../OemImg/Security/Cososysoltechsolutions.jpg";
// import Anti from "./productImg/Antioltechsolutions.jpg"
// import edr from "./productImg/edroltechsolutions.png"
// import firewall from "./productImg/firewalloltechsolutions.jpg"
// import email from "./productImg/emailoltechsolutions.jpg"
// import cyber from "./productImg/cyberoltechsolutions.png"
// import Slider from "../../components/Slider";
// import Popup from "../../components/Popup";



// const ManageSecurity = () => {

//     const videoRef = useRef(null)
//     useEffect(() => {
//         if (videoRef.current) {
//             videoRef.current.playbackRate = 1;
//         }
//     }, []);

//     const images = [TrendMicro, Sophos, Seqrite, Safetica, Palo, Mcafee, Kaspersky, Crowdstrike, Cososys];

//     const [showPopup, setShowPopup] = useState(false);

//     return (
//         <>
//             {/* <Slider /> */}
//             <div className="manage-security">

//                 {/* HERO SECTION */}
//                 <section className="security-hero">
//                     {/* <img src={Security} alt="Security" />  */}
//                     <video ref={videoRef} autoPlay loop muted className="video">
//                         <source src={securityVideo} type="video/mp4" />
//                     </video>

//                     <div className="hero-overlay">
//                         <h1>Managed Security Solutions</h1>
//                         <p>Protecting Your Business with Advanced & Intelligent Security Systems</p>
//                     </div>

//                     <div className="security-hero-buttons">
//                         <button
//                             className="security-demo-btn" onClick={() => {
//                                 setShowPopup(true);
//                                 document.body.style.overflow = "hidden";
//                             }}
//                         >
//                             BOOK DEMO
//                         </button>

//                         <Link to="/chat" className="security-whatsapp-btn">
//                             CHAT ON WHATSAPP
//                         </Link>

//                     </div>
//                 </section>

//                 {/* SERVICES GRID */}
//                 <section className="security-services">
//                     <h2>Our Cyber Security Expertise</h2>
//                     <div className="security-grid">

//                         <div className="security-card">
//                             <img src={Anti} alt="CCTV" />
//                             <h3>Antivirus & DLP</h3>
//                             <p>Advanced antivirus and DLP solutions ensure real-time threat protection, data security, and prevention of unauthorized access.</p>
//                         </div>

//                         <div className="security-card">
//                             <img src={firewall} alt="Cyber Security" />
//                             <h3>Cyber Security & Firewall</h3>
//                             <p>Advanced cybersecurity firewalls protect networks by blocking threats, monitoring traffic, and ensuring secure data access in real time.</p>
//                         </div>

//                         <div className="security-card">
//                             <img src={edr} alt="Access Control" />
//                             <h3>EDR & XDR</h3>
//                             <p>Advanced cybersecurity firewalls with EDR & XDR provide real-time threat detection, network protection, and unified security across systems and endpoints.</p>
//                         </div>

//                         <div className="security-card">
//                             <img src={email} alt="Email" />
//                             <h3>Email & Web Security</h3>
//                             <p>Advanced email and web security ensures real-time threat protection, safe browsing, and protection against phishing and malicious attacks.</p>
//                         </div>

//                     </div>
//                 </section>


//                 {/* ===TOP BENEFITS OL TECH CYBER SECURITY========== */}

//                 <section className="security-features">
//                     <h2>✅ Top Benefits of OL Tech Solutions Cyber Security </h2>
//                     <p>From delivering omnipresent Security solutions to customers and enhanced revenue opportunities to partners, OL Tech Security makes connectivity smart, convenient and productive.</p>
//                     <div className="security-grid">

//                         <div className="security-card">
//                             <h3>🔒 Strong Threat Protection</h3>
//                             <p>
//                                 Protects systems from malware, ransomware, and cyber attacks with advanced security layers.
//                             </p>
//                         </div>

//                         <div className="security-card">
//                             <h3>⚡ Real-Time Monitoring</h3>
//                             <p>
//                                 Continuously monitors network activity to detect and respond to threats instantly.
//                             </p>
//                         </div>

//                         <div className="security-card">
//                             <h3>🛡️ Data Protection</h3>
//                             <p>
//                                 Ensures sensitive data is secured with encryption and access control mechanisms.
//                             </p>
//                         </div>

//                         <div className="security-card">
//                             <h3>🌐 Secure Network Access</h3>
//                             <p>
//                                 Provides safe and controlled access to networks, preventing unauthorized entry.
//                             </p>
//                         </div>

//                     </div>
//                 </section>

//                 {/* ==================Slider Section ============================ */}
//                 < section className="security-slider-wrapper" >
//                     <h2 >Building Innovative Businesses with Strong Alliance and Business Partners</h2>
//                     <div className="security-slider-track">
//                         {images.concat(images).map((img, index) => (
//                             <div className="security-slider-card" key={index}>
//                                 <img src={img} alt="sllider" />
//                             </div>
//                         ))}

//                     </div>
//                 </section >

//                 {/* ADVANCED SECTION */}
//                 <section className="advanced-security">
//                     <div className="advanced-left">
//                         <h2>Integrated Cyber Security Management</h2>
//                         <p>
//                             Integrated Security Management at OL Tech Solutions focuses on providing a unified and comprehensive approach to securing your entire IT environment. Instead of managing multiple standalone security systems, we integrate network security, endpoint protection, and cloud security into a single, centralized framework. This enables real-time threat detection, faster response, and better visibility across all layers of your infrastructure.

//                             Our solutions are designed to protect sensitive data, manage user access securely, and ensure compliance with industry standards. With continuous monitoring, advanced encryption, and intelligent risk assessment, we help businesses stay protected against evolving cyber threats. By combining technology with expert support, OL Tech Solutions ensures a scalable and future-ready security ecosystem that safeguards your operations without compromising performance.
//                         </p>
//                     </div>
//                     <div className="advanced-right">
//                         <img src={cyber} alt="Monitoring" />
//                     </div>
//                 </section>


//                 <div className='security-contact'>
//                     <video ref={videoRef} autoPlay loop muted className="video">
//                         <source src={aboutVideo} type="video/mp4" />
//                     </video>

//                     <div className="security-overlay"></div>

//                     <div className="security-contact-content">
//                         <h1>Unlock the Power of OL Tech For Your Business</h1>
//                         <p>Connect with our experts today to accelerate your business with technology.</p>
//                         <Link to="/contact" className="security-contact-btn">
//                             Contact Us
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             <Footer />

//             <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
//         </>
//     );
// };

// export default ManageSecurity;






import React, { useState, useEffect, useRef } from "react";
import "./ManageSecurity.css";
import aboutVideo from "../../Images/aboutVideo.mp4";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import securityVideo from "./productImg/securityVideo.mp4";

import TrendMicro from "../OemImg/Security/TrendMicrooltechsolutions.png";
import Sophos from "../OemImg/Security/Sophosoltechsolutions.jpg";
import Seqrite from "../OemImg/Security/Seqriteoltechsolutions.jpg";
import Safetica from "../OemImg/Security/Safeticaoltechsolutions.png";
import Palo from "../OemImg/Security/Palooltechsolutions.png";
import Mcafee from "../OemImg/Security/Mcafeeoltechsolutions.png";
import Kaspersky from "../OemImg/Security/Kasperskyoltechsolutions.png";
import Crowdstrike from "../OemImg/Security/Crowdstrikeoltechsolutions.png";
import Cososys from "../OemImg/Security/Cososysoltechsolutions.jpg";

import Anti from "./productImg/Antioltechsolutions.jpg";
import edr from "./productImg/edroltechsolutions.png";
import firewall from "./productImg/firewalloltechsolutions.jpg";
import email from "./productImg/emailoltechsolutions.jpg";
import cyber from "./productImg/cyberoltechsolutions.png";

import Popup from "../../components/Popup";

const ManageSecurity = () => {

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1;
        }
    }, []);

    const images = [
        TrendMicro,
        Sophos,
        Seqrite,
        Safetica,
        Palo,
        Mcafee,
        Kaspersky,
        Crowdstrike,
        Cososys
    ];

    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <div className="manage-security">

                {/* HERO SECTION */}
                <section className="security-hero">

                    <video ref={videoRef} autoPlay loop muted className="video">
                        <source src={securityVideo} type="video/mp4" />
                    </video>

                    {/* <div className="sec-hero-overlay">
                        <h1>
                            Managed Cyber Security Solutions for Modern Businesses
                        </h1>

                        <p>
                            Protect your organization with enterprise-grade
                            cyber security solutions including firewall protection,
                            endpoint security, email security,
                            threat detection, and advanced data protection systems.
                        </p>
                    </div> */}

                    <div className="security-hero-buttons">

                        <button
                            className="security-demo-btn"
                            onClick={() => {
                                setShowPopup(true);
                                document.body.style.overflow = "hidden";
                            }}
                        >
                            BOOK DEMO
                        </button>

                        <Link to="/chat" className="security-whatsapp-btn">
                            CHAT ON WHATSAPP
                        </Link>

                    </div>
                </section>

                {/* SERVICES GRID */}
                <section className="security-services">

                    <h2>Our Enterprise Cyber Security Expertise</h2>

                    <div className="security-grid">

                        <div className="security-card">
                            <img
                                src={Anti}
                                alt="Antivirus and Data Loss Prevention Solutions"
                            />

                            <h3>Antivirus & DLP</h3>

                            <p>
                                Advanced antivirus and Data Loss Prevention solutions
                                provide real-time threat protection,
                                ransomware defense,
                                sensitive data security,
                                and prevention of unauthorized access across business environments.
                            </p>
                        </div>

                        <div className="security-card">
                            <img
                                src={firewall}
                                alt="Cyber Security Firewall Solutions"
                            />

                            <h3>Cyber Security & Firewall</h3>

                            <p>
                                Enterprise firewall security solutions help businesses
                                block cyber threats,
                                monitor network traffic,
                                secure applications,
                                and maintain safe enterprise connectivity in real time.
                            </p>
                        </div>

                        <div className="security-card">
                            <img
                                src={edr}
                                alt="EDR and XDR Security Solutions"
                            />

                            <h3>EDR & XDR</h3>

                            <p>
                                Advanced EDR and XDR solutions provide
                                endpoint threat detection,
                                centralized monitoring,
                                rapid incident response,
                                and intelligent security analytics across enterprise systems.
                            </p>
                        </div>

                        <div className="security-card">
                            <img
                                src={email}
                                alt="Email and Web Security Solutions"
                            />

                            <h3>Email & Web Security</h3>

                            <p>
                                Secure your business communication with
                                advanced email and web security solutions
                                that protect against phishing attacks,
                                malicious websites,
                                spam,
                                and online threats.
                            </p>
                        </div>

                    </div>
                </section>

                {/* BENEFITS SECTION */}
                <section className="security-features">

                    <h2>
                        Top Benefits of OL Tech Cyber Security Solutions
                    </h2>

                    <p>
                        OL Tech Solutions delivers enterprise cyber security services
                        designed to protect business networks,
                        secure sensitive data,
                        improve operational safety,
                        and strengthen digital infrastructure
                        against modern cyber threats.
                    </p>

                    <div className="security-grid">

                        <div className="security-card">
                            <h3>Strong Threat Protection</h3>

                            <p>
                                Protect business systems against malware,
                                ransomware,
                                phishing attacks,
                                spyware,
                                and advanced cyber threats using layered security technologies.
                            </p>
                        </div>

                        <div className="security-card">
                            <h3>Real-Time Monitoring</h3>

                            <p>
                                Continuous security monitoring and intelligent threat detection
                                help businesses respond quickly
                                to suspicious activities and cyber incidents.
                            </p>
                        </div>

                        <div className="security-card">
                            <h3>Data Protection</h3>

                            <p>
                                Secure sensitive business data using
                                encryption,
                                access control,
                                endpoint protection,
                                and compliance-focused security solutions.
                            </p>
                        </div>

                        <div className="security-card">
                            <h3>Secure Network Access</h3>

                            <p>
                                Enable secure remote access,
                                protected enterprise connectivity,
                                and controlled user authentication
                                for employees and business environments.
                            </p>
                        </div>

                    </div>
                </section>

                {/* PARTNER SECTION */}
                <section className="security-slider-wrapper">

                    <h2>
                        Building Secure Businesses with Strong Technology Partnerships
                    </h2>

                    <div className="security-slider-track">

                        {images.concat(images).map((img, index) => (
                            <div className="security-slider-card" key={index}>
                                <img src={img} alt="Cyber Security Partners" />
                            </div>
                        ))}

                    </div>
                </section>

                {/* ADVANCED SECURITY SECTION */}
                <section className="advanced-security">

                    <div className="advanced-left">

                        <h2>
                            Integrated Enterprise Cyber Security Management
                        </h2>

                        <p>
                            OL Tech Solutions delivers integrated cyber security
                            management services designed to secure your complete IT infrastructure
                            through a centralized and intelligent security framework.
                        </p>

                        <p>
                            Our enterprise security solutions combine
                            firewall security,
                            endpoint protection,
                            cloud security,
                            email protection,
                            network monitoring,
                            and threat intelligence into a unified ecosystem
                            for better visibility and faster incident response.
                        </p>

                        <p>
                            We help businesses protect sensitive information,
                            secure user access,
                            prevent data breaches,
                            and maintain compliance with modern security standards.
                            With continuous monitoring,
                            intelligent risk analysis,
                            and scalable security architecture,
                            we ensure future-ready cyber protection for organizations.
                        </p>

                    </div>

                    <div className="advanced-right">
                        <img
                            src={cyber}
                            alt="Enterprise Cyber Security Monitoring"
                        />
                    </div>

                </section>

                {/* ================= FAQ SECTION ================= */}

<section className="security-faq-section">

    <h2>Frequently Asked Questions</h2>

    <dl className="security-faq-list">

        <dt>Q. What Cyber Security Solutions do you provide?</dt>
        <dd>
            We provide Firewall Security, Antivirus, Data Loss Prevention (DLP), EDR, XDR, Email Security, Web Security, Endpoint Protection, and Enterprise Cyber Security Solutions.
        </dd>

        <dt>Q. Do you provide Firewall & UTM Security Solutions?</dt>
        <dd>
            Yes. We offer enterprise-grade Firewall and UTM solutions that help businesses protect their networks, applications, users, and critical business data from cyber threats.
        </dd>

        <dt>Q. What is the difference between EDR and XDR?</dt>
        <dd>
            EDR focuses on endpoint threat detection and response, while XDR provides extended threat detection across endpoints, networks, cloud platforms, email systems, and security tools.
        </dd>

        <dt>Q. Do you provide Cyber Security Solutions across India?</dt>
        <dd>
            Yes. OL Tech Solutions provides Cyber Security, Firewall, Endpoint Security, and Data Protection Solutions across Delhi NCR and PAN India.
        </dd>

        <dt>Q. Why is Cyber Security important for modern businesses?</dt>
        <dd>
            Cyber Security protects organizations from ransomware, malware, phishing attacks, data breaches, unauthorized access, and evolving cyber threats while ensuring business continuity.
        </dd>

        <dt>Q. Do you provide Email Security and Data Protection Solutions?</dt>
        <dd>
            Yes. Our solutions include Email Security, Web Security, DLP, Encryption, Access Control, and Threat Protection to safeguard business communications and sensitive information.
        </dd>

    </dl>

</section>

                {/* CONTACT SECTION */}
                <div className="security-contact">

                    <video ref={videoRef} autoPlay loop muted className="video">
                        <source src={aboutVideo} type="video/mp4" />
                    </video>

                    <div className="security-overlay"></div>

                    <div className="security-contact-content">

                        <h1>
                            Secure Your Business with Advanced Cyber Security Solutions
                        </h1>

                        <p>
                            Connect with OL Tech Solutions to protect your business
                            with enterprise-grade cyber security,
                            firewall protection,
                            endpoint security,
                            and intelligent threat management solutions.
                        </p>

                        <Link to="/contact" className="security-contact-btn">
                            Contact Us
                        </Link>

                    </div>
                </div>

            </div>

            <Footer />

            <Popup
                showPopup={showPopup}
                setShowPopup={setShowPopup}
            />
        </>
    );
};

export default ManageSecurity;