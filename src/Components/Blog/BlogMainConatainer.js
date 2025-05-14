import React, { useEffect, useState } from 'react';
import BlogPost from './BlogContent';
import {
  blogCategories,
  blogPosts,
  blogRecentPosts,
  blogTags,
} from '../../Constant/config/blogPost';
import BlogSidebar from './BlogSideBar';
import CustomPagination from '../../Utils/CustomComponents/CustomPagination';

const BlogMainConatainer = () => {
  const [filterOn, setFilterOn] = useState('');
  const [currentItems, setCurrentItems] = useState([]);
  const [filterdeData, setFilteredData] = useState([]);

  useEffect(() => {
    if (filterOn) {
      setFilteredData(
        blogPosts.filter(
          (data) => data.categorie.toLowerCase() === filterOn.toLowerCase(),
        ),
      );
    }
  }, [filterOn]);

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
              <CustomPagination
                data={!filterOn ? blogPosts : filterdeData}
                itemsPerPage={3}
                currentItemsParent={setCurrentItems}
              />
              {/* <button className='pagination-item' onClick={handlePreviousPage} disabled={currentPage === 1}>Prev</button>
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
              <button className='pagination-item' onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button> */}
            </div>
          </div>
          <BlogSidebar
            categories={blogCategories}
            recentPosts={blogRecentPosts}
            tags={blogTags}
            setFilterOn={setFilterOn}
          />
        </div>
      </section>
    </>
  );
};

export default BlogMainConatainer;
