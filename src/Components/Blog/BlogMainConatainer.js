import React, { useState } from 'react';
import BlogPost from './BlogContent';
import {
  blogCategories,
  blogPosts,
  blogRecentPosts,
  blogTags,
} from '../../Constant/config/blogPost';
import BlogSidebar from './BlogSideBar';

const BlogMainConatainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogPosts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(blogPosts.length / itemsPerPage);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <section className="blog-down-section">
        <div className="blog-down-section-layer">
          <div className="blog-down-section-leftbox">
            {currentItems.map((post) => (
              <BlogPost
                key={post.id}
                image={post.image}
                author={post.author}
                date={post.date}
                comments={post.comments}
                heading={post.heading}
                paragraph={post.paragraph}
                readMoreLink={post.readMoreLink}
              />
            ))}

            <div className="paginaion">
              <button className='pagination-item' onClick={handlePreviousPage} disabled={currentPage === 1}>Prev</button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    disabled={page === currentPage}
                    className='pagination-item'
                  >
                    {page}
                  </button>
                )
              )}
              <button className='pagination-item' onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
              {/* <Link to="#" class="pagination-item">
                Prev
              </Link>
              <Link to="#" class="pagination-item active">
                1
              </Link>
              <Link to="#" class="pagination-item">
                2
              </Link>
              <Link to="#" class="pagination-item">
                3
              </Link>
              <Link to="#" class="pagination-item">
                Next
              </Link> */}
            </div>
          </div>
          <BlogSidebar
            categories={blogCategories}
            recentPosts={blogRecentPosts}
            tags={blogTags}
          />
        </div>
      </section>
    </>
  );
};

export default BlogMainConatainer;
