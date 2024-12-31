

function BlogItem({blog, deleteBlog}) {
  return (
    <div className='blog-item'>
      <h3>{blog.title}</h3>
      <p>{blog.content}</p>
      <button onClick={()=> deleteBlog(blog.id)}>Delete</button>
    </div>
  )
}

export default BlogItem
