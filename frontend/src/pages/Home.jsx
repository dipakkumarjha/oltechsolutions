import React from "react";
import sliderimage from "../Images/sliderimage.png";
import "./Home.css";
import ContactForm from "../components/ContactForm";
import BgVideo from "../Images/BgVideo.mp4"
import cpu from "../Images/cpu.jpg";
import wifi from "../Images/productImg/wifi.png";
import Hardware from "../Images/productImg/Hardware.png"
import DataCenter from "../Images/productImg/DataCenter.png"
import Software from "../Images/productImg/Software.png"
import Security from "../Images/productImg/Security.png"
import Survillance from "../Images/productImg/Survillance.png"
import Communication from "../Images/productImg/Communication.png"
import Telecome from "../Images/productImg/Telecome.png"
import Cdac from "../Images/SliderImg/Cdac.jpg";
import Defence from "../Images/SliderImg/Defence.jpg"
import Ntpc from "../Images/SliderImg/Ntpc.png";
import Railway from "../Images/SliderImg/Railway.jpg"
import Telecom from "../Images/SliderImg/Telecom.png";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import Footer from "../components/Footer";
import Popup from "../components/Popup";
import Slider from "../components/Slider";


const Home = () => {

  const cardServices = [
    {
      id: "managed-wifi",
      title: "OL Tech Solutions provides fast, secure, and reliable Wi-Fi networking solutions to keep your business connected and productive.",
      img: wifi,
    },
    {
      id: "manage-security",
      title: "OL Tech Solutions provides fast,secure,and reliable Cyber solutions to protect your business from digital threats and keep your systems safe.",
      img: Security,
    },
    {
      id: "Communication-Collaboration",
      title: "OL Tech Solutions provides fast, reliable Communication & Collaboration solutions to keep your teams connected and productive.",
      img: Communication,
    },
    {
      id: "software-licence",
      title: "OL Tech Solutions provides genuine and reliable Software & License solutions to ensure secure, compliant, and efficient business operations.",
      img: Software,
    },
    {
      id: "hardware",
      title: "OL Tech Solutions provides reliable Hardware solutions to support smooth,efficient,and high-performance business.",
      img: Hardware,
    },
    {
      id: "cloud-data-center",
      title: "OL Tech Solutions provides reliable Cloud & Data Center solutions to ensure secure, scalable, and efficient data management.",
      img: DataCenter,
    }, 
    {
      id: "surveillance",
      title: "OL Tech Solutions provides reliable Surveillance Solutions to ensure smart monitoring, enhanced security, and complete protection for your business.",
      img: Survillance,
    },
    {
      id: "telecom",
      title: "OL Tech Solutions provides reliable Telecom Services to ensure seamless connectivity and efficient business communication.",
      img: Telecome,
    }

  ]
 

  // ====Slider Img Data=====

  const images = [Cdac, Defence, Ntpc, Railway, Telecom];
  
  const navigate = useNavigate();

 
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  // ============Why Choose Us Scrolling event================
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".scroll-left, .scroll-right"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <> 

      <Popup />
      <Slider/>


     

      {/* ================= HERO SECTION ================= */}
      <section className="hero-section">
        <video ref={videoRef} autoPlay loop muted className="video">
          <source src={BgVideo} type="video/mp4" />
        </video>

        <div className="hero-container">
          <div className="left">
            <ContactForm />
          </div>

          <div className="right">
            <h2>
              India’s Trusted Partner for{" "}
              <span className="gradient-text">Sovereign Digital</span>{" "}
              Infrastructure
            </h2>
          </div>
        </div>
      </section >

      {/* ================= SERVICES SECTION ================= */}
      < section className="services-section" >
        <h2 className="heading">India’s Tech Stack for the Future</h2>

        <div className="services">
          {cardServices.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.img} alt={item.title} className="card-img" />
              <p className="about-services">{item.title}</p>
              <button className="read-more" onClick={() =>
                window.open(`/${item.id}`)}>Read More
              </button>
            </div>
          ))}
        </div>
      </section >



      {/* ===============WHY CHOODE US========*/}


      < section className="why-choose-us" >
        {/* TOP HEADING */}
        < div className="why-choose-top" >
          <h2>The Future is Built on OL Tech Solutions</h2>
          <p>OL Tech Strategies For Your Business</p>
        </div >

        {/* MAIN CONTENT */}
        < div className="why-choose-content" >
          {/* LEFT CARDS */}
          < div className="choose-column left" >
            <div className="choose-card scroll-left">
              <img src={cpu} alt="cpu" />
              <div className="card-content">
                <h5>Robust IT Infrastructure</h5>
                <p>
                  We design and implement reliable IT infrastructures that form the backbone of your business.
                </p>
              </div>
            </div>

            <div className="choose-card scroll-left">
              <img src={cpu} alt="cpu" />
              <div className="card-content">
                <h5>Modern Security Solutions</h5>
                <p>
                  We provide advanced cybersecurity and physical security solutions for your business.
                </p>
              </div>
            </div>

            <div className="choose-card scroll-left">
              <img src={cpu} alt="cpu" />
              <div className="card-content">
                <h5>Cloud Solutions Management</h5>
                <p>
                  We deliver integrated, future-ready cloud solutions that enhance safety and communication.
                </p>
              </div>
            </div>
          </div >

          {/* CENTER IMAGE */}
          < div className="choose-center-img" >
            <img src={sliderimage} alt="center" />
          </div >

          {/* RIGHT CARDS */}
          < div className="choose-column right" >
            <div className="choose-card scroll-right">
              <img src={cpu} alt="cpu" />
              <div className="card-content">
                <h5>Analytics & BI</h5>
                <p>
                  Tailored IT solutions that empower your business objectives and unlock growth opportunities.
                </p>
              </div>
            </div>

            <div className="choose-card scroll-right">
              <img src={cpu} alt="cpu" />
              <div className="card-content">
                <h5>Custom Software Development</h5>
                <p>
                  We build reliable, scalable, and innovative custom web and software solutions.
                </p>
              </div>
            </div>

            <div className="choose-card scroll-right">
              <img src={cpu} alt="cpu" />
              <div className="card-content">
                <h5>Innovative Web Development</h5>
                <p>
                  We create dynamic, user-friendly, and responsive websites tailored to your brand.
                </p>
              </div>
            </div>
          </div >
        </div >
      </section >



      {/* ====================Slider For Company Partnership============================ */}

      < section className="home-slider-wrapper" >
        <h2 >Building Innovative Businesses with Strong Alliance and Business Partners</h2>
        <div className="home-slider-track">
          {images.concat(images).map((img, index) => (
            <div className="home-slider-card" key={index}>
              <img src={img} alt="sllider" />
            </div>
          ))}

        </div>
      </section >





      {/* ================= CLIENT FEEDBACK SECTION ================= */}
      < section className="client-section" >
        <h2>Clients Feedbacks</h2>
        <div className="feedback">
          {[1, 2, 3].map((index) => (
            <div className="client" key={index}>
              <img src={sliderimage} alt="sliderImg" className="client-img" />

              <p className="about-client">
                Technology is powerful, but only when it’s safe. OL Tech
                Solutions goes beyond IT services.
              </p>

              <button className="read-more">Read More</button>
              <p className="ratings">★★★★★</p>
            </div>
          ))}
        </div>
      </section >


      <Footer />
    </>
  );
};


export default Home;
