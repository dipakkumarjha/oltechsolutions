import React, { useState, useEffect, useRef } from "react";
import "./DataCenterCloud.css";
import { Link } from "react-router-dom";
import aboutVideo from "../../Images/aboutVideo.mp4"
import Footer from "../../components/Footer";
// import DataCenter from "./productImg/DataCenter.png"
import DatacenterVideo from "../../Images/DatacenterVideo.mp4"
import nas from "./productImg/nasoltechsolutions.png"
import san from "./productImg/sanoltechsolutions.jpg"
import soc from "./productImg/socoltechsolutions.jpg"
import colocation from "./productImg/colocationoltechsolutions.jpg"

import Yotta from "../OemImg/DataCenter/Yottaoltechsolutions.png";
import GoogleCloud from "../OemImg/DataCenter/GoogleCloudoltechsolutions.png";
import Azure from "../OemImg/DataCenter/Azureoltechsolutions.png";
import AWS from "../OemImg/DataCenter/AWSoltechsolutions.png"
import Slider from "../../components/Slider";
import Popup from "../../components/Popup";
import AIChatBot from "../../components/AIChatBot/AIChatBot";
const DataCenterCloud = () => {

    const videoRef = useRef(null)
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1;
        }
    }, []);

    const images = [Yotta, Azure, GoogleCloud, AWS]

    const [showPopup, setShowPopup] = useState(false);
    return (

        <>
            {/* <Slider /> */}
            <section className="dc-page">

                {/* HERO */}
                <div className="dc-hero">
                    {/* <img src={DataCenter} alt="Data Center & Cloud" className="dc-hero-bg" /> */}
                    <video autoPlay loop muted className="hero-video">
                        <source src={DatacenterVideo} type="video/mp4" />
                    </video>
                    <div className="hero-overlay"></div>

                    {/* <div className="dc-hero-content">
                        <h1>Data Center & Cloud Solutions</h1>
                        <p>
                            Scalable, secure, and future-ready cloud and data center
                            infrastructures designed to power digital transformation.
                        </p>
                    </div> */}


                    <div className="dc-hero-buttons">
                        <button
                            className="dc-demo-btn" onClick={() => {
                                setShowPopup(true);
                                document.body.style.overflow = "hidden";
                            }}
                        >
                            BOOK DEMO
                        </button>

                        <Link to="/chat" className="dc-whatsapp-btn">
                            CHAT ON WHATSAPP
                        </Link>

                    </div>
                </div>



                {/* ===============Services Card Section=================== */}

                <section className="dc-card-services">
                    <h2>Our Cloud & Data Center Expertise</h2>
                    <div className="dc-grid">

                        <div className="dc-card-list">
                            <img src={nas} alt="NAS" />
                            <h3>NAS</h3>
                            <p>Advanced NAS solutions provide centralized data storage, secure file access, and reliable backup support for modern business environments.
                            </p>
                        </div>

                        <div className="dc-card-list">
                            <img src={san} alt="SAN" />
                            <h3>SAN</h3>
                            <p>Advanced SAN solutions provide high-speed storage networking, centralized data management, and scalable enterprise storage for modern IT environments.
                            </p>
                        </div>

                        <div className="dc-card-list">
                            <img src={colocation} alt="Colocation" />
                            <h3>Cloud & Colocation</h3>
                            <p>Advanced cloud and colocation solutions provide scalable infrastructure, secure hosting, and reliable data center support for modern business environments.
                            </p>
                        </div>

                        <div className="dc-card-list">
                            <img src={soc} alt="SOC" />
                            <h3>SOC</h3>
                            <p>Advanced SOC solutions provide continuous security monitoring, real-time threat detection, and proactive incident response for modern business environments.
                            </p>
                        </div>

                    </div>
                </section>



                {/* OVERVIEW */}
                <div className="dc-overview">
                    <h2>Modern Infrastructure for a Digital World</h2>
                    <p>
                        Modern Infrastructure for a Digital World empowers businesses with robust, scalable, and high-performance data center solutions designed to handle today’s demanding digital workloads. By combining advanced servers, storage systems, and networking technologies, it ensures seamless data processing, high availability, and efficient resource management. This modern approach enables organizations to support critical applications, manage large volumes of data, and maintain uninterrupted business operations.

                        With a strong focus on security, reliability, and scalability, data center infrastructure is built to adapt to evolving business needs while protecting sensitive information. It enhances operational efficiency, reduces downtime, and provides the flexibility required for cloud integration and future expansion, making it a foundation for sustainable digital growth.
                    </p>
                </div>

                {/* SERVICES */}

                <section>

                    <div className="dc-services">
                        <h3 className="dc-heading">Key Features Of Cloud & Data Center</h3>
                        <div className="dc-card">
                            <h3>Private & Hybrid Cloud</h3>
                            <p>
                                Private & Hybrid Cloud solutions provide businesses with the perfect balance of control, flexibility, and scalability. A private cloud ensures dedicated resources with enhanced security, while a hybrid cloud combines on-premise infrastructure with public cloud benefits for better workload management. This approach allows organizations to store sensitive data securely while leveraging the cloud for performance and cost efficiency. It also supports seamless scaling, disaster recovery, and improved business continuity.
                            </p>
                        </div>

                        <div className="dc-card">
                            <h3>Data Center Design</h3>
                            <p>
                                Data Center Design focuses on building a reliable, scalable, and high-performance infrastructure tailored to business needs. It involves strategic planning of servers, storage, networking, power, and cooling systems to ensure maximum efficiency and uptime. A well-designed data center supports smooth operations, faster data processing, and optimized resource utilization.

                                With a strong emphasis on security, redundancy, and future scalability, modern data center design ensures protection against failures and cyber threats while allowing easy expansion as business demands grow.
                            </p>
                        </div>

                        <div className="dc-card">
                            <h3>Disaster Recovery</h3>
                            <p>
                                Disaster Recovery ensures business continuity by protecting critical data and IT systems from unexpected failures, cyberattacks, or natural disasters. It involves creating secure backups, failover systems, and recovery strategies to minimize downtime and data loss. With a well-defined disaster recovery plan, businesses can quickly restore operations and maintain productivity even during disruptions.

                                By leveraging advanced technologies like cloud backup, replication, and automated recovery processes, organizations can ensure data integrity, reduce risks, and stay operational without major interruptions.
                            </p>
                        </div>

                        <div className="dc-card">
                            <h3>Cloud Migration</h3>
                            <p>
                                Cloud Migration enables businesses to move their applications, data, and workloads from on-premise infrastructure to the cloud with minimal disruption. It helps organizations improve flexibility, reduce infrastructure costs, and access resources on demand without heavy hardware investments.

                                With a well-planned migration strategy, businesses can ensure secure data transfer, minimal downtime, and seamless integration with existing systems. Cloud migration also enhances performance, scalability, and reliability, allowing organizations to adapt quickly to changing business needs and drive digital transformation.
                            </p>
                        </div>
                    </div>
                </section>


                {/* ==================Slider Section ============================ */}
                < section className="data-slider-wrapper" >
                    <h2 >Building Innovative Businesses with Strong Alliance and Business Partners</h2>
                    <div className="data-slider-track">
                        {images.concat(images).map((img, index) => (
                            <div className="data-slider-card" key={index}>
                                <img src={img} alt="sllider" />
                            </div>
                        ))}

                    </div>
                </section >

                <section className="cloud-section">
                    <h2>Benefits of OL Tech Cloud Data Center</h2>

                    <div className="cloud-grid">
                        <div className="cloud-card">
                            <h3>High Availability</h3>
                            <p>Ensures 24/7 uptime with reliable infrastructure and minimal downtime.</p>
                        </div>

                        <div className="cloud-card">
                            <h3>Data Security</h3>
                            <p>Advanced security measures protect sensitive data from threats and breaches.</p>
                        </div>

                        <div className="cloud-card">
                            <h3>Scalability</h3>
                            <p>Easily scale resources as your business grows without performance issues.</p>
                        </div>

                        <div className="cloud-card">
                            <h3>Remote Access</h3>
                            <p>Access your data and applications securely from anywhere, anytime.</p>
                        </div>

                        <div className="cloud-card">
                            <h3>Data Backup</h3>
                            <p>Automated backups ensure data recovery and business continuity.</p>
                        </div>

                        <div className="cloud-card">
                            <h3>Cost Efficiency</h3>
                            <p>Reduce infrastructure and maintenance costs with cloud-based solutions.</p>
                        </div>
                    </div>
                </section>



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


                {/* USE CASE */}
                <section className="wifi-usecase">
                    <h2>Industries We Serve</h2>

                    <div className="usecase-grid">
                        <div>Corporate</div>
                        <div>Manufacturing</div>
                        <div>Retail</div>
                        <div>Hospitals</div>
                        <div>Education</div>
                    </div>
                </section>


                {/* ======================FAQs==================== */}

                {/* ================= FAQ SECTION ================= */}

                <section className="dc-faq-section">

                    <h2>Frequently Asked Questions</h2>

                    <dl className="dc-faq-list">

                        <dt>Q. What are Cloud & Data Center Solutions?</dt>
                        <dd>
                            Cloud & Data Center Solutions provide secure, scalable, and high-performance infrastructure for storing, managing, and processing business data and applications.
                        </dd>

                        <dt>Q. Do you provide Cloud Migration Services?</dt>
                        <dd>
                            Yes. We help organizations migrate applications, workloads, and business data to secure cloud environments with minimal downtime.
                        </dd>

                        <dt>Q. What is the difference between NAS and SAN storage?</dt>
                        <dd>
                            NAS provides file-level storage over a network, while SAN delivers high-speed block-level storage designed for enterprise applications and critical workloads.
                        </dd>

                        <dt>Q. Do you provide Cloud & Data Center Solutions across India?</dt>
                        <dd>
                            Yes. OL Tech Solutions delivers Cloud, Data Center, Storage, and Infrastructure Solutions across Delhi NCR and PAN India.
                        </dd>

                        <dt>Q. Why are Data Center Solutions important for modern businesses?</dt>
                        <dd>
                            Data Center Solutions improve availability, security, scalability, disaster recovery, and overall business continuity for mission-critical operations.
                        </dd>

                    </dl>

                </section>



                <div className='data-contact'>
                    <video ref={videoRef} autoPlay loop muted className="data-video">
                        <source src={aboutVideo} type="video/mp4" />
                    </video>

                    <div className="data-overlay"></div>

                    <div className="data-contact-content">
                        <h1>Unlock the Power of OL Tech For Your Business</h1>
                        <p>Connect with our experts today to accelerate your business with technology.</p>
                        <Link to="/contact" className="data-contact-btn">
                            Contact Us
                        </Link>
                    </div>
                </div>

            </section>

            <AIChatBot />
            <Footer />

            <Popup showPopup={showPopup} setShowPopup={setShowPopup} />

        </>


    );
};

export default DataCenterCloud;