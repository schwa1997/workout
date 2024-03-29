import React, { FC } from "react";
import { ItemCard } from "./itemCard";
interface workOutListProps {
    workouts: Workout[];
}
export const WorkOutList: FC<workOutListProps> = ({ workouts }) => {
  return (
    <div className="fixed top-0 left-60 grid grid-flow-col gap-8 m-9">
      {workouts.map((workout, workoutIndex) => (
        <ItemCard
          key={workoutIndex}
          title={workout.workoutName}
          img={workout.imgUrl}
        />
      ))}
    </div>
  );
};
