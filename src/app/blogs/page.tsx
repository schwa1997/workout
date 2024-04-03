import React from "react";
import { blogs } from "../data/blog";
import { BlogCard } from "../components/reusable/blogCard";

export default function page() {
  return (
    <div className="bg-green-100 flex flex-row gap-6">
      {blogs.map((blog, key) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          img={blog.img}
          content={blog.content}
          tags={blog.tags}
        />
      ))}
    </div>
  );
}
