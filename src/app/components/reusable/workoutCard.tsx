"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";

interface workoutCardProps {
  id: number;
  category: string;
  title: string;
  img: string;
  tags: string[];
}

export const WorkoutCard: FC<workoutCardProps> = ({ id, category, title, img, tags }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/tracker/${id}`);
  };

  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer w-96 h-96"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-0  backdrop-filter backdrop-blur-sm hover:backdrop-blur-none">
        <div className="p-4 h-full flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded-full mb-2">
              {category}
            </span>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="text-sm text-gray-300">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-end">
            <button 
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
