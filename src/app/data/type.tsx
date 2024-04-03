export type blog = {
  id: number;
  title: string;
  tags: string[];
  img:string;
  content: string;
};
export type Workout = {
  key: number;
  workoutName: string;
  imgUrl: string;
  description: string;
};
export type WorkoutGroupByEquipment = {
  key: number;
  equipmentName: string;
  workout: Workout[];
};
export type WorkoutGroupBySubOrgan = {
  key: number;
  suborganName: string;
  workoutGroupByEquipment: WorkoutGroupByEquipment[];
};

export type WorkoutGroupByOrgan = {
  key: number;
  organName: string;
  workoutGroupBySubOrgan: WorkoutGroupBySubOrgan[];
};

export type WorkoutData = WorkoutGroupByOrgan[];
