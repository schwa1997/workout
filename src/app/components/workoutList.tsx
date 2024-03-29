import React, { FC } from "react";
import { Typography } from "@mui/material";
import { ItemCard } from "./itemCard";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface WorkOutListProps {
  workoutGroupByEquipment: WorkoutGroupByEquipment[];
}

export const WorkOutList: FC<WorkOutListProps> = ({
  workoutGroupByEquipment,
}) => {
  return (
    <div className="fixed top-0 left-60 h-fit ">
      {workoutGroupByEquipment.map((group, index) => (
        <div key={index}>
          <div className="bg-purple-200">
            <Typography>{group.equipmentName}</Typography>
          </div>
          <div className="grid grid-flow-col gap-8 m-9">
            {group.workout.map((workout, workoutIndex) => (
              <ItemCard
                key={workout.key}
                title={workout.workoutName}
                img={workout.imgUrl}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
