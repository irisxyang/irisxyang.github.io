import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "../data/projects";
import BlogCard from "../components/BlogCard";
import { blogsByDate } from "../data/blogs";
import "./BlogSection.css";

export default function BlogSection() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [hash]);
  return (
    <div className="page-container">
      <h1 className="page-title">Blogs</h1>
      <p className="page-overview">Here is some of my writing :)</p>
      <div className="project-grid">
        {blogsByDate.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
