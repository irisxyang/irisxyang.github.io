import { Link } from "react-router-dom";
import type { BlogMeta } from "../data/blogs";
import "./BlogLayout.css";

export default function BlogLayout({
  meta,
  children,
}: {
  meta: BlogMeta;
  children: React.ReactNode;
}) {
  return (
    <article className="blog-container">
      <Link to="/blog" className="blog-back">
        ← Blogs
      </Link>
      {/* <span className="post-category">{meta.category}</span> */}
      <h1 className="page-title">{meta.title}</h1>
      <time className="post-date">{meta.date}</time>
      <div className="post-body">{children}</div>
    </article>
  );
}
