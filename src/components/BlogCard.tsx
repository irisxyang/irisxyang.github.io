import { Link } from "react-router-dom";
import type { BlogMeta } from "../data/blogs";
import { formatDate } from "../utils/date";
import "./BlogCard.css";

export default function BlogCard({ blog }: { blog: BlogMeta }) {
  return (
    <Link to={`/blog/${blog.id}`} className="blog-card">
      {blog.thumbnail && (
        <img src={blog.thumbnail} alt="" className="blog-image" />
      )}
      <h3 className="blog-card-title">{blog.title}</h3>
      <p className="blog-card-blurb">{blog.blurb}</p>
      <div className="blog-date-container">
        <time className="blog-card-date">{formatDate(blog.date)}</time>
      </div>
    </Link>
  );
}
