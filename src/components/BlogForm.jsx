import { useState } from "react";

function BlogForm({ addBlog }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((title, content)) {
      addBlog(title, content);
      setTitle("");
      setContent("");
    }
  };

  return (
    
      <form className="blog-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={content}
          placeholder="Enter Content"
          rows={5}
          cols={30}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Add Blog</button>
      </form>
    
  );
}

export default BlogForm;
