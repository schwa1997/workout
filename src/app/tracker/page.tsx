import React from "react";
import { blogs } from "../data/blog";
import { WorkoutCard } from "../components/reusable/workoutCard";
import { workouts } from "../data/workout";

export default function Page() {
  return (
    <div className="bg-white w-full min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Workout Plans</h1>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              id={workout.id}
              title={workout.title}
              img={workout.img}
              category={workout.category}
              tags={workout.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
