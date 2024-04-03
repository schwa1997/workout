import { Fab } from "@mui/material";
import React, { FC } from "react";
import AddIcon from "@mui/icons-material/Add";
import { ValueInput } from "./valueInput";
import { Edit } from "@mui/icons-material";

interface itemCardProps {
  title: string;
  img: string;
}
export const ItemCard: FC<itemCardProps> = ({ title, img }) => {
  return (
    <div className="bg-gray-100 flex justify-center items-center">
      <div className="max-w-xs container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <div>
          <span className="text-white text-xs font-bold rounded-lg mb-2 bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">
            {title}
          </span>
        </div>
        <div>
          <img className="w-full cursor-pointer" src={img} alt="" />
        </div>
        <div className="flex gap-2 p-2 justify-between">
          <div className="flex items-center space-x-2">
            <ValueInput title={"kg"} value={10} measureUnit={"kg"} />
            <ValueInput title={"次"} value={8} measureUnit={"次"} />
          </div>
          <div className="flex space-x-1 items-center ">
            <Fab aria-label="add" color="success" className="bg-green-500 ">
              <AddIcon />
            </Fab>
          </div>
        </div>
      </div>
    </div>
  );
};
