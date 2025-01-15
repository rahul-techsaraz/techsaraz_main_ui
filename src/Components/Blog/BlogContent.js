import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({
  image,
  author,
  date,
  comments,
  heading,
  paragraph,
  readMoreLink,
}) => {
  return (
    <div className="blog-down-section-leftbox-1stbox">
      <div className="blog-down-section-leftbox-1stbox-img">
        <img src={image} alt="blog-img" />
      </div>
      <div className="blog-down-section-leftbox-1stbox-img-icongroup">
        <div className="blog-down-section-leftbox-1stbox-img-icongroup-icon-text">
          <div className="blog-down-section-leftbox-1stbox-img-icongroup-icon">
            <i className="fa-regular fa-user"></i>
            <span className="blog-down-section-leftbox-1stbox-img-icongroup-text">
              by {author}
            </span>
          </div>
        </div>

        <div className="blog-down-section-leftbox-1stbox-img-icongroup-icon-text">
          <div className="blog-down-section-leftbox-1stbox-img-icongroup-icon">
            <i className="fa-regular fa-calendar-days"></i>
            <span className="blog-down-section-leftbox-1stbox-img-icongroup-text">
              {date}
            </span>
          </div>
        </div>

        <div className="blog-down-section-leftbox-1stbox-img-icongroup-icon-text">
          <div className="blog-down-section-leftbox-1stbox-img-icongroup-icon">
            <i className="fa-regular fa-comment"></i>
            <span className="blog-down-section-leftbox-1stbox-img-icongroup-text">
              {comments} Comments
            </span>
          </div>
        </div>
      </div>
      <div className="blog-down-section-leftbox-1stbox-heading">{heading}</div>
      <p className="blog-down-section-leftbox-1stbox-paragraph">{paragraph}</p>
      <div className="blog-down-section-leftbox-1stbox-btn">
        <Link
          className="blog-down-section-leftbox-1stbox-btn-btn"
          to={readMoreLink}
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
