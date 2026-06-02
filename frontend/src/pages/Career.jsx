import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Career.css";
import Footer from "../components/Footer";
import CareerImg from "../Images/CareerImgoltechsolutions.jpg"
import aboutVideo from "../Images/aboutVideo.mp4"
import Slider from "../components/Slider";

const Career = () => {


  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []); 


  const jobsRef = useRef(null);
  const scrollToJobs = () => {
    jobsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return ( 
    <>
    {/* <Slider/> */}
      {/* HERO SECTION */}
      <section className="career-hero">
        <img src={CareerImg} alt="img" className="hero-img" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Build The Future With OL Tech</h1>
          <p>
            Join a team driven by innovation, security, and technology excellence.
          </p>
          <Link to="/career" className="career-btn" onClick={scrollToJobs}>
            Explore Opportunities
          </Link>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="career-about">
        <div className="career-container">
          <div className="career-text">
            <h2>Why Work With OL Tech?</h2>
            <p>
             Why Work With OL Tech? Because we deliver complete, reliable, and future-ready IT solutions tailored to your business needs. With strong partnerships with leading global technology brands and a team of experienced professionals, we ensure high-performance, secure, and scalable infrastructure. Our focus on innovation, fast deployment, and cost-effective strategies helps businesses achieve maximum efficiency with minimal downtime. We don’t just provide solutions—we build long-term relationships by offering continuous support, proactive maintenance, and a commitment to quality you can trust.
            </p>
          </div>
          <div className="career-image">
            <img src={CareerImg} alt="img" />
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="career-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We continuously evolve to stay ahead in technology.</p>
          </div>
          <div className="value-card">
            <h3>Integrity</h3>
            <p>Trust and transparency define our work culture.</p>
          </div>
          <div className="value-card">
            <h3>Growth</h3>
            <p>We empower individuals to achieve their full potential.</p>
          </div>
        </div>
      </section>
 
     


      {/* OPEN POSITIONS */}
      <section className="career-jobs" ref={jobsRef}>
        <h2>Open Positions</h2>

        <div className="job-card">
          <div>
            <h3>Frontend Developer</h3>
            <p>Noida | Full-Time</p>
          </div>
          <Link to="/contact" className="apply-btn">
            Apply Now
          </Link>
        </div>

        <div className="job-card">
          <div>
            <h3>Cybersecurity Analyst</h3>
            <p>Noida | Full-Time</p>
          </div>
          <Link to="/contact" className="apply-btn">
            Apply Now
          </Link>
        </div>

        <div className="job-card">
          <div>
            <h3>Cloud Engineer</h3>
            <p>Noida | Full-Time</p>
          </div>
          <Link to="/contact" className="apply-btn">
            Apply Now
          </Link>
        </div>
      </section>


       {/* Contect Us */}

      <div className='career-contact'>
        <video ref={videoRef} autoPlay loop muted className="video">
          <source src={aboutVideo} type="video/mp4" />
        </video>

        <div className="career-overlay"></div>

        <div className="career-contact-content">
          <h1>Unlock the Power of OL Tech For Your Business</h1>
          <p>Connect with our experts today to accelerate your business with technology.</p>
          <Link to="/contact" className="career-contact-btn">
            Contact Us
          </Link>
        </div>
      </div>


      <Footer />
    </>
  );
};

export default Career;
