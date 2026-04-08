import React, { useRef, useEffect } from 'react'
import aboutUs from '../Images/aboutUs.jpg'
import photo from "../Images/photo.jpg"
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
        <Slider/>
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
              OL Tech Solutions is a leading IT service provider specializing in networking, managed WiFi, hardware solutions, and enterprise IT infrastructure. We help businesses build reliable, secure, and scalable technology environments tailored to their needs. With a strong focus on quality, innovation, and customer satisfaction, we deliver solutions that empower organizations to grow in the digital era.
            </p>
          </div>

          <div className="about-img">
            <img src={aboutUs} alt="about" />
          </div>
        </div>
      </section>


      <div className='card-wrapper'>
        <div className='card'>
          <p>Business Setup</p>
          <h2>2017</h2>
        </div>

        <div className='card'>
          <p>Serving Customers</p>
          <h2>45+ industries</h2>
        </div>

      </div>

      {/* MISSION VISION */}
      <section className="about-mv">
        <div className="mv-box">
          <h3>Our Mission</h3>
          <p>Our mission is to deliver reliable, secure, and scalable IT solutions that help businesses grow and succeed in a digital world. We aim to provide high-quality networking, hardware, and managed services with a strong focus on innovation, customer satisfaction, and long-term partnerships.</p>
        </div>

        <div className="mv-box">
          <h3>Our Vision</h3>
          <p>At OL Tech Solutions, our vision is to lead the future of digital transformation by providing innovative, reliable, and scalable technology solutions. We strive to build long-term relationships with our clients and become their most trusted IT partner.</p>
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