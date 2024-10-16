"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";

interface blogCardProps {
  id: number;
  title: string;
  img: string;
  tags: string[];
}

export const BlogCard: FC<blogCardProps> = ({ id, title, img, tags }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blogs/${id}`);
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center">
      <div 
        className="max-w-xs container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
        onClick={handleClick}
      >
        <div>
          <span className="text-white text-xs font-bold rounded-lg mb-2 bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4">
            {title}
          </span>
        </div>
        <div>
          {tags.map((tag) => (
            <div
              className="text-white text-xs font-bold rounded-lg mb-2 bg-green-200 inline-block mt-4 ml-4 py-1.5 px-4"
              key={tag}
            >
              {tag}
            </div>
          ))}
        </div>
        <div>
          <img className="w-full" src={img} alt={title} />
        </div>
       
      </div>
    </div>
  );
};
