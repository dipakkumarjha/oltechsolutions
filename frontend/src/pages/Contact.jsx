import React from "react";
import "./Contact.css";
import Footer from "../components/Footer";
import ContactPage from "../Images/ContactPage.jpg"
import ContactForm from "../components/ContactForm"
import Slider from "../components/Slider";


const Contact = () => {
  return (
    <>
    <Slider/>
      {/* HERO SECTION */}
      <section className="contact-hero">
        <img src={ContactPage} alt="img" className="hero-img" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Let’s Build The Future Together</h1>
          <p>
            Connect with OL Tech experts to transform your digital journey.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-main">
        <div className="contact-container">

          {/* LEFT IMAGE */}
          <div className="contact-image">
            <img src={ContactPage} alt="img" />
          </div>

          {/* RIGHT FORM */}
          {/* <div className="contact-form">
            <h2>Get In Touch</h2>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Company Name" />
              <textarea placeholder="Your Message" rows="5"></textarea>
              <button type="submit">Submit Message</button>
            </form>
          </div> */}
            <ContactForm />
        </div>
      </section>

      {/* OFFICE INFO SECTION */}
      <section className="office-info">
        <h2>Our Office</h2>

        <div className="office-grid">
          <div className="office-card">
            <img src={ContactPage} alt="img" />
            <h3>Noida Headquarters</h3>
            <p>Sector 62, Noida, Uttar Pradesh, India</p>
            <p>📩tasleem.khan@oltechsolutions.co.in</p>
            <p>Phone: 📞+91 9015183068</p>
          </div>

          <div className="office-card">
            <img src={ContactPage}  alt="img" />
            <h3>Support Center</h3>
            <p>24/7 Technical Support</p>
            <p>📩corporatesales@oltechsolutions.co.in</p>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="map-section">
        <img src={ContactPage}  alt="img" />
      </section>

      {/* FINAL CTA */}
      <section className="contact-cta">
        <h2>Ready To Accelerate Your Business?</h2>
        <p>
          Partner with OL Tech to unlock scalable, secure, and future-ready
          technology solutions.
        </p>
        <button>Start Your Project</button>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
