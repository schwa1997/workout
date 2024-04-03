import React, { FC } from "react";
import { ValueInput } from "./valueInput";

interface blogCardProps {
  title: string;
  img: string;
  content: string;
  tags: string[];
}
export const BlogCard: FC<blogCardProps> = ({ title, img, content, tags }) => {
  return (
    <div className="bg-gray-100 flex justify-center items-center">
      <div className="max-w-xs container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <div>
          <span className="text-white text-xs font-bold rounded-lg mb-2 bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">
            {title}
          </span>
        </div>
        <div>
          {tags.map((tag) => (
            <div
              className="text-white text-xs font-bold rounded-lg mb-2 bg-green-200 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer"
              key={tag}
            >
              {tag}
            </div>
          ))}
        </div>
        <div>
          <img className="w-full cursor-pointer" src={img} alt="" />
        </div>
        <div className="text-black">{content}</div>
      </div>
    </div>
  );
};
