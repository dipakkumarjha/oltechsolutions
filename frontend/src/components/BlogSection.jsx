import React from "react";
import blogs from "../data/blogs";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (

    <section className="blog-section">

      {/* HEADING */}
 
      <div className="blog-heading">

        <span>OUR BLOGS</span>

        <h2>
          Latest Technology Insights &
          Smart Business Solutions
        </h2>

        <p>
          Explore enterprise IT infrastructure, cyber security,
          cloud solutions, networking, telecom systems and
          digital transformation technologies across Delhi NCR
          & PAN India.
        </p>

      </div>

      {/* BLOG GRID */}

      <div className="blog-grid">

        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
          />
        ))}

      </div>

    </section>

  );
};

export default BlogSection;
