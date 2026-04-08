import React, { useEffect, useRef } from "react";
import "./ManageSecurity.css";
import Security from "../../Images/productImg/Security.png";
import aboutVideo from "../../Images/aboutVideo.mp4"
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import securityVideo from './productImg/securityVideo.mp4'
import TrendMicro from "../OemImg/Security/TrendMicro.png"
import Sophos from "../OemImg/Security/Sophos.jpg";
import Seqrite from "../OemImg/Security/Seqrite.jpg"
import Safetica from "../OemImg/Security/Safetica.png";
import Palo from "../OemImg/Security/Palo.png";
import Mcafee from "../OemImg/Security/Mcafee.png";
import Kaspersky from "../OemImg/Security/Kaspersky.png";
import Crowdstrike from "../OemImg/Security/Crowdstrike.png";
import Cososys from "../OemImg/Security/Cososys.jpg";
import cctv from "./productImg/cctv.png"
import biometric from "./productImg/biometric.jpg"
import firealarm from "./productImg/firealarm.jpg"
import firewall from "./productImg/firewall.jpg"
import cyber from "./productImg/cyber.png"
import Slider from "../../components/Slider";



const ManageSecurity = () => {

    const videoRef = useRef(null)
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1;
        }
    }, []);

    const images =[TrendMicro, Sophos, Seqrite, Safetica, Palo , Mcafee, Kaspersky, Crowdstrike, Cososys] ; 

    return (
        <>
        <Slider/>
            <div className="manage-security">

                {/* HERO SECTION */}
                <section className="security-hero">
                    {/* <img src={Security} alt="Security" />  */}
                    <video ref={videoRef} autoPlay loop muted className="video">
                              <source src={securityVideo} type="video/mp4" />
                    </video>
                    
                    <div className="hero-overlay">
                        <h1>Managed Security Solutions</h1>
                        <p>Protecting Your Business with Advanced & Intelligent Security Systems</p>
                    </div>
                </section>

                {/* SERVICES GRID */}
                <section className="security-services">
                    <h2>Our Security Expertise</h2>
                    <div className="security-grid">

                        <div className="security-card">
                            <img src={cctv} alt="CCTV" />
                            <h3>CCTV Surveillance</h3>
                            <p>Advanced IP & AI based CCTV monitoring systems with remote access and real-time alerts.</p>
                        </div>

                        <div className="security-card">
                            <img src={firewall} alt="Cyber Security" />
                            <h3>Cyber Security & Firewall</h3>
                            <p>Enterprise grade firewall, endpoint protection, threat detection and vulnerability management.</p>
                        </div>

                        <div className="security-card">
                            <img src={biometric} alt="Access Control" />
                            <h3>Access Control & Biometric</h3>
                            <p>Secure access systems including RFID, biometric attendance, door access and smart locking.</p>
                        </div>

                        <div className="security-card">
                            <img src={firealarm} alt="Fire Safety" />
                            <h3>Fire Alarm & Safety</h3>
                            <p>Intelligent fire detection, alarm systems and complete fire safety infrastructure setup.</p>
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

                {/* ADVANCED SECTION */}
                <section className="advanced-security">
                    <div className="advanced-left">
                        <h2>Integrated Security Management</h2>
                        <p>
                            OL Tech Solutions delivers centralized monitoring systems integrating
                            CCTV, access control, fire alarms and cybersecurity under one
                            intelligent platform. We ensure 24/7 monitoring, instant alerts,
                            and proactive threat prevention.
                        </p>
                    </div>
                    <div className="advanced-right">
                        <img src={cyber} alt="Monitoring" />
                    </div>
                </section>

               
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

export default ManageSecurity;