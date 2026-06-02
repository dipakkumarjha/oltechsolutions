import React, { useState, useEffect, useRef } from "react";
import "./communication.css";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
// import Security from "../../Images/productImg/Securityoltechsolutions.png"
import aboutVideo from "../../Images/aboutVideo.mp4"
import CommunicationVideo from "./productImg/CommunicationVideo.mp4"
import Commu1 from "./productImg/Commu1oltechsolutions.jpg"
import AudioVideo from "./productImg/AudioVideooltechsolutions.jpg"
import Boardroom from "./productImg/Boardroomoltechsolutions.jpg"
import Display from "./productImg/Displayoltechsolutions.png"
import Clasroom from "./productImg/Classroomoltechsolutions.png"
import Projecter from "./productImg/Projecteroltechsolutions.png"
import WhyChoose from "./productImg/WhyChooseoltechsolutions.png"

import Sony from '../OemImg/Communication/Sonyoltechsolutions.png';
import Samsung from '../OemImg/Communication/Samsungoltechsolutions.png';
import Polycom from "../OemImg/Communication/Polycomoltechsolutions.png";
import Panasonic from "../OemImg/Communication/Panasonicoltechsolutions.png";
import Logitech from "../OemImg/Communication/Logitecholtechsolutions.png"
import Slider from "../../components/Slider";
import Popup from "../../components/Popup";



const Communication = () => {

    const images = [Sony, Samsung, Polycom, Panasonic, Logitech]

    const services = [
        {
            title: "Audio / Video Conferencing",
            desc: "Enable seamless remote collaboration with high-quality audio and video conferencing solutions designed for modern workplaces.",
            img: AudioVideo,
        },
        {
            title: "Boardroom / Auditorium",
            desc: "Transform your boardrooms and auditoriums with professional AV systems for presentations, meetings and events.",
            img: Boardroom,
        },
        {
            title: "Interactive Display",
            desc: "Enhance engagement with touch-enabled interactive displays ideal for meetings, classrooms and collaboration spaces.",
            img: Display,
        },
        {
            title: "Classroom Solutions",
            desc: "Smart classroom technologies that improve learning experiences through interactive and digital teaching tools.",
            img: Clasroom,
        },
        {
            title: "Projector Solutions",
            desc: "High-performance projectors designed for offices, training rooms and educational institutions.",
            img: Projecter,
        }
    ];

    const videoRef = useRef(null)
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1;
        }
    }, []);

    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="communication-page">
            {/* <Slider/> */}
            {/* HERO SECTION */}
            <section className="comm-hero">

                <video autoPlay loop muted className="hero-video">
                    <source src={CommunicationVideo} type="video/mp4" />
                </video>

                {/* <div className="hero-overlay"></div> */}

                {/* <div className="hero-content">
                    <h1>Communications & Collaboration</h1>
                    <p>
                        Empower your organization with modern communication and
                        collaboration technologies designed for productivity,
                        engagement and seamless connectivity.
                    </p>
                </div> */}

                <div className="comm-hero-buttons">
                    <button
                        className="comm-demo-btn" onClick={() => {
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

            </section>


            {/* SERVICES / CARDS */}

            <section className="comm-services">

                <h2>Our Communication Solutions</h2>

                <div className="comm-services-grid">

                    {services.map((item, index) => (
                        <div className="comm-service-card" key={index}>

                            <div className="comm-service-img">
                                <img src={item.img} alt="service" />
                            </div>

                            <h3>{item.title}</h3>

                            <p>{item.desc}</p>

                        </div>
                    ))}

                </div>

            </section>



            {/* OVERVIEW SECTION */}

            <section className="comm-overview">

                <div className="comm-overview-container">

                    <div className="comm-overview-text">
                        <h2>Smart Communication for Modern Businesses</h2>

                        <p>
                            Smart Communication for Modern Businesses enables organizations to stay connected through advanced and unified communication technologies. It brings together IP telephony, video conferencing, messaging platforms, and collaboration tools into a single ecosystem, ensuring smooth and uninterrupted communication across teams and clients. This integration helps businesses improve coordination, speed up decision-making, and maintain consistent communication in both on-site and remote work environments.
                        </p>

                        <p>
                            With a focus on scalability and security, modern communication systems are designed to adapt to growing business needs while maintaining data protection and reliability. By streamlining communication channels and reducing operational complexity, businesses can enhance productivity, improve customer engagement, and build a more agile and future-ready digital infrastructure.
                        </p>

                    </div>

                    <div className="comm-overview-image">
                        <img src={Commu1} alt="communication overview" />
                    </div>

                </div>

            </section>






            {/* BENEFITS */}

            <section className="comm-benefits">

                <div className="benefits-container">

                    <div className="benefits-image">
                        <img src={WhyChoose} alt="benefits" />
                    </div>

                    <div className="benefits-text">

                        <h2>Why Choose Our Collaboration Solutions?</h2>

                        <ul>
                            <li>✔ Seamless team collaboration across devices and locations</li>
                            <li>✔ High-quality video conferencing with low latency</li>
                            <li>✔ Secure communication with advanced encryption</li>
                            <li>✔ Enhanced remote work and hybrid collaboration support</li>
                            <li>✔ Cost-effective and productivity-driven tools</li>
                            <li>✔ Centralized communication management system</li>
                        </ul>

                    </div>

                </div>

            </section>


            {/* ==================Slider Section ============================ */}
            < section className="comm-slider-wrapper" >
                <h2 >Building Innovative Businesses with Strong Alliance and Business Partners</h2>
                <div className="comm-slider-track">
                    {images.concat(images).map((img, index) => (
                        <div className="comm-slider-card" key={index}>
                            <img src={img} alt="sllider" />
                        </div>
                    ))}

                </div>
            </section >


            {/* ==============FAQs Section================ */}

            <section className="comm-faq-section">

                <h2>Frequently Asked Questions</h2>

                <dl className="comm-faq-list">

                    <dt>Q. What are Communication & Collaboration Solutions?</dt>
                    <dd>
                        Communication & Collaboration Solutions help organizations improve teamwork, streamline communication, and enhance productivity through modern technologies such as video conferencing, interactive displays, and digital collaboration platforms.
                    </dd>

                    <dt>Q. Do you provide Audio & Video Conferencing Solutions?</dt>
                    <dd>
                        Yes. We provide enterprise-grade audio and video conferencing solutions designed to support seamless communication, remote collaboration, and hybrid work environments.
                    </dd>

                    <dt>Q. Which industries can benefit from Communication Solutions?</dt>
                    <dd>
                        Communication solutions are ideal for corporate offices, educational institutions, healthcare facilities, hospitality businesses, government organizations, and modern workspaces.
                    </dd>

                    <dt>Q. Do you provide Communication & Collaboration Solutions across India?</dt>
                    <dd>
                        Yes. OL Tech Solutions provides Communication & Collaboration Solutions across Delhi NCR and PAN India for businesses of all sizes.
                    </dd>

                    <dt>Q. Why are modern collaboration tools important for businesses?</dt>
                    <dd>
                        Modern collaboration tools improve team productivity, support hybrid work models, simplify communication, and enable faster decision-making across organizations.
                    </dd>

                </dl>

            </section>

            {/* CONTACT CTA */}

            <div className="comm-contact">
                <video autoPlay loop muted className="comm-video">
                    <source src={aboutVideo} type="video/mp4" />
                </video>
                <div className="comm-overlay"></div>
                <div className="comm-contact-content">
                    <h1>Upgrade Your Communication Experience</h1>
                    <p>
                        Connect with our experts today to implement powerful
                        communication and collaboration solutions.
                    </p>
                    <Link to="/contact" className="comm-contact-btn">
                        Contact Us
                    </Link>
                </div>
            </div>


            


            <Footer />

            <Popup showPopup={showPopup} setShowPopup={setShowPopup} />

        </div>
    );
};

export default Communication;  