import React from 'react';
import { Link } from 'react-router-dom';

const BlogSidebar = ({ categories = [], recentPosts = [], tags = [] }) => {
  return (
    <div className="blog-down-section-rightbox">
      {/* Search Section */}
      <div className="blog-down-section-rightbox-input-parent">
        <input
          type="text"
          id="blog-down-section-rightbox-input"
          placeholder="Search..."
        />
        <span className="blog-down-section-rightbox-input-parent-search-i">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>

      {/* Categories Section */}
      <div className="category">
        <h1 className="category-heading">Category</h1>
        <div className="category-all-short-box">
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <Link key={index} to={category.link}>
                <div className="category-short-box">
                  <div className="category-short-box-heading">{category.name}</div>
                  <div className="category-short-box-i">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No categories available</p>
          )}
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="recent-post">
        <h1 className="recent-heading">Recent Post</h1>
        <div className="recent-post-all-box">
          {recentPosts.length > 0 ? (
            recentPosts.map((post, index) => (
              <div key={index} className="recent-post-box">
                <div className="recent-post-box-img">
                  <img src={post.image} alt={post.heading} />
                </div>
                <div className="recent-post-box-user-heading">
                  <div className="recent-post-box-user">
                    <div className="recent-post-box-user-icon-text">
                      <div className="recent-post-box-user-icon">
                        <i className="fa-regular fa-user"></i>
                      </div>
                      <div className="recent-post-box-user-text">by {post.author}</div>
                    </div>
                    <div className="recent-post-box-user-text-heading">
                      <Link to={post.link}>{post.heading}</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No recent posts available</p>
          )}
        </div>
      </div>

      {/* Tags Section */}
      <div className="blog-rightbox-tag">
        <h3 className="blog-tag">Tag</h3>
        <div className="blog-tag-flex">
          {tags.length > 0 ? (
            tags.map((tag, index) => (
              <a key={index} href={tag.link}>
                <button className="blog-tag-button">{tag.name}</button>
              </a>
            ))
          ) : (
            <p>No tags available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
