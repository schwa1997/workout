import React from "react";
import { blogs } from "../data/blog";
import { BlogCard } from "../components/reusable/blogCard";

export default function page() {
  return (
    <div className="bg-green-100 flex flex-row gap-6">
      {blogs.map((blog, key) => (
        <BlogCard
          id={blog.id}
          key={blog.id}
          title={blog.title}
          img={blog.img}
          tags={blog.tags}
        />
      ))}
    </div>
  );
}
