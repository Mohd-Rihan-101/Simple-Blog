import { useState } from 'react'
import BlogForm from './components/BlogForm';

function App() {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (blog)=>{
   setBlogs([...blogs, blog]);
  }

  const deleteBlog = (id)=>{
    setBlogs(blogs.filter((blog) => blog.id !== id));

  };
  return (
    <div>
      <h1>Simple Blog</h1>
      <BlogForm  addBlog={addBlog}/>
    </div>
  )
}

export default App
