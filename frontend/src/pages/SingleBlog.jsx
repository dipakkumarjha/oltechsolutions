import React from "react";
import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogs";

const SingleBlog = () => {

  const { slug } = useParams();

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    return <h1>Blog Not Found</h1>;
  }
 
  return (

    <section className="single-blog">

      {/* HERO IMAGE */}

      <div className="single-blog-image">

        <img
          src={blog.image}
          alt={blog.title}
        />

      </div>

      {/* BLOG CONTENT */}

      <div className="single-blog-content">

        <span className="blog-tag">
          Technology Blog
        </span>

        <h1>{blog.title}</h1>

        <p className="blog-date">
          Delhi NCR & PAN India Solutions
        </p>

        {/* EXTRA IMAGE */}

        <div className="inside-blog-image">

          <img
            src={blog.image}
            alt={blog.title}
          />

        </div>

        <div className="blog-full-content">

          {blog.content}

        </div>

        <Link
          to="/blog"
          className="back-btn"
        >
          ← Back To Blogs
        </Link>

      </div>

    </section>

  );
};

export default SingleBlog;