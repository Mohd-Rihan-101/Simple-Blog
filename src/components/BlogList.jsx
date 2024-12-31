// import React from 'react'
import BlogItem from "./BlogItem";

function BlogList({ blogs, deleteBlog }) {
  return (
    <div className="blog-list">
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <BlogItem  key={blog.id} blog={blog} deleteBlog={deleteBlog} />
        ))
      ) : (
        <p>No blogs to display.</p>
      )}
    </div>
  );
}

export default BlogList;
