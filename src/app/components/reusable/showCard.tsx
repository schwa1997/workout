import React, { FC } from "react";
import { ValueInput } from "./valueInput";
import { ArrowForward } from "@mui/icons-material";

interface showCardProps {
  title: string;
  img: string;
  content: string;
  tags: string[];
}
export const ShowCard: FC<showCardProps> = ({ title, img, content, tags }) => {
  return (
    <div className="min-w-20 container bg-teal-100 bg-opacity-60 rounded-3xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      {title && (
        <div className="-mb-4">
          <span className="uppercase text-xs font-bold rounded-lg mb-2 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">
            {title}
          </span>
          <ArrowForward />
        </div>
      )}
      <div className="px-6 py-4 w-full h-fit min-h-44">
        {img && (
          <img
            className=" w-full rounded-3xl cursor-pointer"
            src={img}
            alt=""
          />
        )}
      </div>
      {tags && (
        <div className="absolute bottom-8 left-4">
          {tags.map((tag) => (
            <div
              className=" bg-white bg-opacity-10 backdrop-opacity-70 backdrop-blur-xl text-white text-xs font-bold rounded-lg mb-2 hover:bg-opacity-100 hover:text-black inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer"
              key={tag}
            >
              {tag}
            </div>
          ))}
        </div>
      )}
      {content && (
        <div className="absolute bottom-2 w-full px-10 text-green-900">
          <div className="pb-4 pt-2 uppercase mb-4  font-extrabold leading-none tracking-tight">
            <span>{content}</span>
          </div>
        </div>
      )}
    </div>
  );
};
