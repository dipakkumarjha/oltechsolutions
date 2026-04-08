import React, { useEffect, useRef } from "react";
import "./communication.css";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Security from "../../Images/productImg/Security.png"
import aboutVideo from "../../Images/aboutVideo.mp4"
import CommunicationVideo from "./productImg/CommunicationVideo.mp4"
import Commu1 from "./productImg/Commu1.jpg"
import AudioVideo from "./productImg/AudioVideo.jpg"
import Boardroom from "./productImg/Boardroom.jpg"
import Display from "./productImg/Display.png"
import Clasroom from "./productImg/Classroom.png"
import Projecter from "./productImg/Projecter.png"
import WhyChoose from "./productImg/WhyChoose.png"

import Sony from '../OemImg/Communication/Sony.png';
import Samsung from '../OemImg/Communication/Samsung.png';
import Polycom from "../OemImg/Communication/Polycom.png";
import Panasonic from "../OemImg/Communication/Panasonic.jpg";
import Logitech from "../OemImg/Communication/Logitech.png"
import Slider from "../../components/Slider";



const Communication = () => {
    
    const images =[Sony, Samsung, Polycom, Panasonic, Logitech]
    
    const services = [
        {
            title: "Audio / Video Conferencing",
            desc: "Enable seamless remote collaboration with high-quality audio and video conferencing solutions designed for modern workplaces.",
            img : AudioVideo,
        },
        {
            title: "Boardroom / Auditorium",
            desc: "Transform your boardrooms and auditoriums with professional AV systems for presentations, meetings and events.",
            img : Boardroom,
        },
        {
            title: "Interactive Display",
            desc: "Enhance engagement with touch-enabled interactive displays ideal for meetings, classrooms and collaboration spaces.",
            img : Display,
        },
        {
            title: "Classroom Solutions",
            desc: "Smart classroom technologies that improve learning experiences through interactive and digital teaching tools.",
            img: Clasroom,
        },
        {
            title: "Projector Solutions",
            desc: "High-performance projectors designed for offices, training rooms and educational institutions.",
            img : Projecter,
        }
    ];

    const videoRef = useRef(null)
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1;
        }
    }, []);

    return (
        <div className="communication-page">
                <Slider/>
            {/* HERO SECTION */}
            <section className="comm-hero">

                <video autoPlay loop muted className="hero-video">
                    <source src={CommunicationVideo} type="video/mp4" />
                </video>

                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <h1>Communications & Collaboration</h1>
                    <p>
                        Empower your organization with modern communication and
                        collaboration technologies designed for productivity,
                        engagement and seamless connectivity.
                    </p>
                </div>

            </section>


            {/* OVERVIEW SECTION */}

            <section className="comm-overview">

                <div className="overview-container">

                    <div className="overview-text">
                        <h2>Smart Communication for Modern Businesses</h2>

                        <p>
                            Effective communication is the backbone of every successful
                            organization. Our Communication & Collaboration solutions help
                            businesses connect teams, improve productivity and simplify
                            meetings across locations.
                        </p>

                        <p>
                            From boardrooms to classrooms, we deliver advanced AV
                            technologies that enhance engagement, improve presentations and
                            enable seamless collaboration.
                        </p>

                    </div>

                    <div className="overview-image">
                        <img src={Commu1} alt="communication overview" />
                    </div>

                </div>

            </section>


            {/* SERVICES / CARDS */}

            <section className="comm-services">

                <h2>Our Communication Solutions</h2>

                <div className="services-grid">

                    {services.map((item, index) => (
                        <div className="service-card" key={index}>

                            <div className="service-img">
                                <img src={item.img} alt="service" />
                            </div>

                            <h3>{item.title}</h3>

                            <p>{item.desc}</p>

                        </div>
                    ))}

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
                            <li>✔ High quality communication infrastructure</li>
                            <li>✔ Improved team collaboration</li>
                            <li>✔ Advanced AV technology integration</li>
                            <li>✔ Scalable enterprise solutions</li>
                            <li>✔ Seamless remote meeting experience</li>
                        </ul>

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

            {/* CONTACT CTA */}

            <div className="contact-section">

                <video autoPlay loop muted className="hero-video">
                    <source src={aboutVideo} type="video/mp4" />
                </video>

                <div className="overlay"></div>

                <div className="contact-content">

                    <h1>Upgrade Your Communication Experience</h1>

                    <p>
                        Connect with our experts today to implement powerful
                        communication and collaboration solutions.
                    </p>

                    <Link to="/contact" className="contact-btn">
                        Contact Us
                    </Link>

                </div>

            </div>


            <Footer />

        </div>
    );
};

export default Communication;