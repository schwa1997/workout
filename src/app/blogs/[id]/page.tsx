"use client";
import React from "react";
import { blogs } from "../../data/blog";
import { useParams } from "next/navigation";

export default function BlogPage() {
  const params = useParams();
  const blogId = Number(params.id);
  
  const blog = blogs.find(b => b.id === blogId);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="bg-green-100 min-h-screen p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <h1 className="text-3xl font-bold text-center py-6">{blog.title}</h1>
        <img 
          src={blog.img} 
          alt={blog.title} 
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <p className="text-gray-700 text-lg">{blog.content}</p>
        </div>
        <div className="px-6 pb-4">
          {blog.tags.map((tag) => (
            <span 
              key={tag} 
              className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

