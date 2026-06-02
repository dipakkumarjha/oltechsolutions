import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (

    <Link
      to={`/blog/${blog.slug}`} 
      className="blog-card"
    >
 
      <div className="blog-image">
        <img src={blog.image} alt={blog.title} />
      </div>

      <div className="blog-content">

        <h3>{blog.title}</h3>

        <p>{blog.shortDescription}</p>

        <button>Read More</button>

      </div>

    </Link>

  );
};

export default BlogCard;