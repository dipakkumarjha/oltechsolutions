import React from "react";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import AIChatBot from "../components/AIChatBot/AIChatBot";

const BlogPage = () => {
  return (

    <>

      <section className="blog-hero">

        <div className="blog-hero-overlay"></div>

        <div className="blog-hero-content">

          <span>OL TECH SOLUTIONS</span>

          <h1>
            Smart IT Infrastructure &
            Technology Insights
          </h1>

          <p>
            Explore enterprise-grade IT solutions,
            cyber security, cloud infrastructure,
            networking and smart workplace technologies
            across Delhi NCR & PAN India.
          </p>

        </div>

      </section> 

      <BlogSection />


      <AIChatBot/>
      <Footer/>

    </>

  );
};

export default BlogPage;