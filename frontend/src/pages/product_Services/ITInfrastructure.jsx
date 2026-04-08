import React, { useEffect, useRef } from "react";
import "./ITInfrastructure.css";
import Footer from "../../components/Footer";
// import infraImg from "../assets/infra.jpg"; // placeholder
import ItInfrastructure from "./productImg/ItInfrastructure.png"
import aboutVideo from "../../Images/aboutVideo.mp4"
import { Link } from "react-router-dom";
// import wifi from "./productImg/wifi.jpeg";

const ITInfrastructure = () => {

    const videoRef = useRef(null)
         useEffect(() => {
           if (videoRef.current) {
             videoRef.current.playbackRate = 1;
           }
         }, []);
    
    return (
        <>
            <section className="it-infra-page">

                {/* HERO SECTION */}
                <div className="infra-hero">
                    <img src={ItInfrastructure} alt="IT Infrastructure" className="hero-bg" />

                    <div className="hero-overlay"></div>

                    <div className="infra-hero-content">
                        <h1>IT Infrastructure & Computing</h1>
                        <p> 
                            Empowering enterprises with scalable, secure and high-performance
                            IT infrastructure solutions designed for the future.
                        </p>
                    </div>
                </div>

                {/* OVERVIEW SECTION */}
                <div className="infra-overview">
                    <h2>Enterprise-Grade Infrastructure Solutions</h2>
                    <p>
                        OL Tech delivers robust computing environments that enhance
                        operational efficiency, reduce downtime, and improve overall
                        business performance. From servers and storage to virtualization
                        and networking — we build reliable foundations for digital growth.
                    </p>
                </div>

                {/* FEATURES SECTION */}
                <div className="infra-features">
                    <div className="feature-card">
                        <h3>Server & Storage Solutions</h3>
                        <p>
                            High-availability server architecture and scalable storage
                            designed to support mission-critical workloads.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h3>Virtualization & Cloud Integration</h3>
                        <p>
                            Optimized virtualization strategies and hybrid cloud integration
                            to maximize resource utilization.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h3>Network Architecture</h3>
                        <p>
                            Secure and high-performance networking infrastructure tailored
                            to enterprise needs.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h3>End-User Computing</h3>
                        <p>
                            Modern workplace solutions including device management,
                            collaboration tools, and secure access systems.
                        </p>
                    </div>
                </div>

                {/* CTA SECTION */}
                {/* <div className="infra-cta">
                    <h2>Build a Strong IT Foundation Today</h2>
                    <button>Get Consultation</button>
                </div> */}

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




            </section>
            <Footer />

        </>


    );
};

export default ITInfrastructure;