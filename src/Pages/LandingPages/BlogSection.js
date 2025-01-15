import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { constants } from '../../Constant/constants';
import { Link } from 'react-router-dom';

const BlogSection = ({ blogs }) => {
  const { earthImage } = constants.images;
  return (
    <section className="blog">
      <div className="blog-pulse">
        <img src={earthImage.imageURL} alt={earthImage.alt} />
      </div>
      <div className="blog-in-box">
        <div className="blog-heading">
          <button className="blog-heading-text">
            NEWS & LATEST UPDATES<span className="blog-span-circle"></span>
          </button>
        </div>
        <div className="blog-heading">
          <h1 className="blog-h1">Our latest news & articles from the blog</h1>
        </div>
        {blogs.map((blog, index) => (
          <div className="blog-box" key={index}>
            <div className="blog-box-wraper">
              <div className="blog-box-img">
                <img src={blog.blogImages.imageURL} alt={blog.blogImages.alt} />
              </div>
              <div className="blog-box-in-text">
                <div className="blog-icon-text">
                  <div className="blog-icon-text-main">
                    <i className="fa-regular fa-clock"></i>
                    <span className="blog-icon-date">{blog.updatedOn}</span>
                  </div>
                  <div className="blog-icon-text-main">
                    <i className="fa-regular fa-user"></i>
                    <span className="blog-icon-date">{blog.postedDate}</span>
                  </div>
                </div>
                <div className="blog-box-in-text-h1">{blog.blogSummary}</div>
                <div className="blog-btn">
                  <Link className="blog-btn-btn" to={blog.blogDetailURL}>
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Prop validation for BlogSection
BlogSection.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      blogImages: PropTypes.shape({
        imageURL: PropTypes.string.isRequired, // The URL of the blog image
        alt: PropTypes.string.isRequired, // The alt text for the image
      }).isRequired,
      updatedOn: PropTypes.string.isRequired, // The date the blog was last updated
      postedDate: PropTypes.string.isRequired, // The original posting date
      blogSummary: PropTypes.string.isRequired, // A brief summary of the blog
      blogDetailURL: PropTypes.string.isRequired, // The URL for the full blog post
    }),
  ).isRequired, // Ensure blogs is an array of blog objects
};

export default BlogSection;
