import React from 'react'

function BlogList({blogs, deleteBlog}) {
  return (
    <div className='blog-list'>
      {blogs.length > 0 ? blogs.map((blog)=>)}
    </div>
  )
}

export default BlogList
