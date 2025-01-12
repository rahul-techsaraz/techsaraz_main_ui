import React from 'react'
import BlogPost from './BlogContent'
import { Link } from 'react-router-dom'
import { blogCategories, blogPosts, blogRecentPosts, blogTags } from '../../Constant/config/blogPost'
import BlogSidebar from './BlogSideBar'

const BlogMainConatainer = () => {
  return (
    <>
     <section class="blog-down-section">
		<div class="blog-down-section-layer">
			<div class="blog-down-section-leftbox">
                {blogPosts.map(post => (
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
             
             <div class="paginaion">
          <Link to="#" class="pagination-item">Prev</Link>
          <Link to="#" class="pagination-item active">1</Link>
          <Link to="#" class="pagination-item">2</Link>
          <Link to="#" class="pagination-item">3</Link>
          <Link to="#" class="pagination-item">Next</Link>
        </div>

            </div>
            <BlogSidebar categories={blogCategories} recentPosts={blogRecentPosts} tags={blogTags} />
        </div>
    </section>    
    </>
  )
}

export default BlogMainConatainer