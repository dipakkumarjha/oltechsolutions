import React, { useEffect, useRef } from "react";
import "./DataCenterCloud.css";
import { Link } from "react-router-dom";
import aboutVideo from "../../Images/aboutVideo.mp4"
import Footer from "../../components/Footer";
// import DataCenter from "./productImg/DataCenter.png"
import DatacenterVideo from "../../Images/DatacenterVideo.mp4"

import Yotta from "../OemImg/DataCenter/Yotta.png";
import GoogleCloud from "../OemImg/DataCenter/GoogleCloud.png";
import Azure from "../OemImg/DataCenter/Azure.png";
import AWS from "../OemImg/DataCenter/AWS.png"
import Slider from "../../components/Slider";
const DataCenterCloud = () => {

    const videoRef = useRef(null)
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1;
        }
    }, []);

    const images = [Yotta, Azure, GoogleCloud, AWS]
    return (

        <>
        <Slider/>
            <section className="dc-page">

                {/* HERO */}
                <div className="dc-hero">
                    {/* <img src={DataCenter} alt="Data Center & Cloud" className="dc-hero-bg" /> */}
                    <video autoPlay loop muted className="hero-video">
                        <source src={DatacenterVideo} type="video/mp4" />
                    </video>
                    <div className="dc-overlay"></div>

                    <div className="dc-hero-content">
                        <h1>Data Center & Cloud Solutions</h1>
                        <p>
                            Scalable, secure, and future-ready cloud and data center
                            infrastructures designed to power digital transformation.
                        </p>
                    </div>
                </div>

                {/* OVERVIEW */}
                <div className="dc-overview">
                    <h2>Modern Infrastructure for a Digital World</h2>
                    <p>
                        We design, deploy, and manage high-performance data center and cloud
                        environments that ensure reliability, security, and scalability.
                        From private cloud to hybrid architecture — we deliver solutions
                        built for growth.
                    </p>
                </div>

                {/* SERVICES */}
                <div className="dc-services">
                    <div className="dc-card">
                        <h3>Private & Hybrid Cloud</h3>
                        <p>
                            Customized cloud architectures optimized for performance,
                            compliance, and operational efficiency.
                        </p>
                    </div>

                    <div className="dc-card">
                        <h3>Data Center Design</h3>
                        <p>
                            End-to-end planning and implementation of enterprise-grade
                            data center environments.
                        </p>
                    </div>

                    <div className="dc-card">
                        <h3>Disaster Recovery</h3>
                        <p>
                            Business continuity solutions with automated backup,
                            redundancy, and failover strategies.
                        </p>
                    </div>

                    <div className="dc-card">
                        <h3>Cloud Migration</h3>
                        <p>
                            Seamless migration strategies to modern cloud platforms
                            with minimal downtime.
                        </p>
                    </div>
                </div>

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


                {/* WHY SECTION */}
                <div className="dc-why">
                    <h2>Why Choose OL Tech?</h2>
                    <div className="dc-why-grid">
                        <div>
                            <h4>High Availability</h4>
                            <p>99.99% uptime architecture for mission-critical systems.</p>
                        </div>
                        <div>
                            <h4>Advanced Security</h4>
                            <p>Multi-layer security with compliance-ready frameworks.</p>
                        </div>
                        <div>
                            <h4>Scalable Architecture</h4>
                            <p>Infrastructure designed to grow with your business.</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                {/* <div className="dc-cta">
        <h2>Transform Your Infrastructure Today</h2>
        <button>Request Consultation</button>
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

export default DataCenterCloud;