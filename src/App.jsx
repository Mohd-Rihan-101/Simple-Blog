import { useState } from 'react'
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';

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
      <BlogList  blogs={blogs} deleteBlog={deleteBlog}/>

    </div>
  )
}

export default App
