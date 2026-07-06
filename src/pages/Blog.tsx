import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import BlogLayout from "../components/BlogLayout";
import NotFoundPage from "./NotFound";

export default function Blog() {
  const { id } = useParams();
  const meta = blogs.find((p) => p.id === id);
  if (!meta) return <NotFoundPage />;

  // filename must equal slug — this replaces a manual registry
  const Body = React.lazy(() => import(`../blogs/${id}`));

  return (
    <BlogLayout meta={meta}>
      <Suspense fallback={<p>Loading…</p>}>
        <Body />
      </Suspense>
    </BlogLayout>
  );
}
