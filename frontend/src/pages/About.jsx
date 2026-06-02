import React, { useRef, useEffect } from 'react'
import aboutUs from '../Images/aboutUsoltechsolutions.jpg'
import photo from "../Images/photooltechsolutions.jpg"
import aboutVideo from "../Images/aboutVideo.mp4"
import "./About.css"
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Slider from '../components/Slider'


const About = () => {

  const videoRef = useRef(null)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []); 
  return (
    <>
        {/* <Slider/> */}
      <div className='headings'>
        <img src={aboutUs} alt='About Us' />
        <h3>We Are OL Tech Solutions</h3>
        <p>At OL Tech Solutions, we are driven by innovation while staying grounded in
          our values of growing with our people, communities, and customers.</p>
      </div>

 

      {/* WHO WE ARE */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              OL Tech Solutions is a trusted provider of end-to-end IT infrastructure and technology services, committed to empowering businesses with secure, scalable, and future-ready solutions. With a strong focus on innovation and reliability, we deliver a wide range of services including Cyber Security, Hardware & Software Solutions, CCTV & Biometric Systems, Wi-Fi (LAN/WAN/MAN) Networking, Servers, and Workstations (Laptops & Desktops).

Our approach is centered on understanding client requirements and delivering customized solutions that enhance operational efficiency, data security, and business continuity. We partner with leading global technology brands to ensure high-quality implementation and long-term support.

At OL Tech Solutions, we believe technology should not just support your business—it should drive growth. Our team of experienced professionals ensures seamless integration, proactive maintenance, and continuous optimization of your IT ecosystem.

Whether you're a startup or an enterprise, OL Tech Solutions is your reliable technology partner in building a smarter, secure, and digitally empowered future.
            </p>
          </div>

          <div className="about-img">
            <img src={aboutUs} alt="about" />
          </div>
        </div>
      </section>


      <div className='about-card-wrapper'>
        <div className='about-card'>
          <p>Business Setup</p>
          <h2>2017</h2>
        </div>

        <div className='about-card'>
          <p>Serving Customers</p>
          <h2>45+ industries</h2>
        </div>
 
      </div>

      {/* MISSION VISION */}
      <section className="about-mv">
        <div className="mv-box">
          <h3>Our Mission</h3>
          <p>At OL Tech Solutions, our mission is to deliver innovative, secure, and scalable IT solutions that empower businesses to succeed in a fast-evolving digital world. We provide end-to-end services including Cyber Security, Networking (LAN/WAN/Wi-Fi), Hardware, Software, Servers, CCTV, and Biometric Systems, ensuring reliability, performance, and long-term value.

We are committed to building future-ready IT infrastructure that enhances efficiency, strengthens security, and supports continuous business growth.</p>
        </div>
 
        <div className="mv-box">
          <h3>Our Vision</h3>
          <p>Our vision is to become a leading and trusted global technology partner, known for delivering intelligent, high-performance, and future-driven IT solutions. We aim to set new standards in innovation, reliability, and customer satisfaction by continuously evolving with the latest technologies.

At OL Tech Solutions, we envision a future where businesses operate with smarter, more secure, and seamlessly integrated digital ecosystems.</p>
        </div>
      </section>

   


      {/* TEAM */}
      <section className="about-team">
        <h2>Our Team</h2>

        <div className="team-grid">
                    <div className="team-card">
            <img src={photo}alt="team" />
            <h4>Shama Parveen</h4>
            <p>Founder</p>
          </div>

          <div className="team-card">
            <img src={photo} alt="team" />
            <h4>Tasleem Khan</h4>
            <p>Director</p>
          </div>


          <div className="team-card">
            <img src={photo} alt="team" />
            <h4>Dipak Jha</h4>
            <p>Developer</p>
          </div>

          <div className="team-card">
            <img src={photo} alt="team" />
            <h4>Ayush Ujjwal</h4>
            <p>Gov Sales Manager</p>
          </div>
          
        </div>
      </section>
 

      <div className='about-contact'>
        <video ref={videoRef} autoPlay loop muted className="video">
          <source src={aboutVideo} type="video/mp4" />
        </video>

        <div className="about-overlay"></div>

        <div className="about-contact-content">
          <h1>Unlock the Power of OL Tech For Your Business</h1>
          <p>Connect with our experts today to accelerate your business with technology.</p>
          <Link to="/contact" className="about-contact-btn">
            Contact Us
          </Link>
        </div>
      </div>




      <Footer />


    </>
  )
}
export default About

// import React, { useRef, useEffect } from "react";
// import "./About.css";

// const About = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = 1;
//     }
//   }, []);

//   return (
//     <div className="about-page">

//       {/* HERO */}
//       <section className="about-hero">
//         <video ref={videoRef} autoPlay loop muted className="about-video">
//           <source src="/video.mp4" type="video/mp4" />
//         </video>

//         <div className="about-overlay"></div>

//         <div className="about-hero-content">
//           <h1>About OL Tech Solutions</h1>
//           <p>Empowering businesses with smart and scalable IT solutions</p>
//         </div>
//       </section>

      

      

//       {/* SERVICES */}
//       <section className="about-services">
//         <h2>What We Do</h2>
//         <div className="services-grid">
//           <div>Managed WiFi</div>
//           <div>Network Infrastructure</div>
//           <div>Hardware Solutions</div>
//           <div>Cloud & Security</div>
//         </div>
//       </section>

//       {/* TEAM */}
//       <section className="about-team">
//         <h2>Our Team</h2>

//         <div className="team-grid">
//           <div className="team-card">
//             <img src="" alt="team" />
//             <h4>Team Member</h4>
//             <p>Position</p>
//           </div>

//           <div className="team-card">
//             <img src="" alt="team" />
//             <h4>Team Member</h4>
//             <p>Position</p>
//           </div>

//           <div className="team-card">
//             <img src="" alt="team" />
//             <h4>Team Member</h4>
//             <p>Position</p>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="about-cta">
//         <h2>Ready to Work With Us?</h2>
//         <button>Contact Us</button>
//       </section>

//     </div>
//   );
// };

// export default About;