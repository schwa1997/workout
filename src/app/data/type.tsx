type Workout = {
  key: number;
  workoutName: string;
  imgUrl: string;
  description: string;
};
type WorkoutGroupByEquipment = {
  key: number;
  equipmentName: string;
  workout: Workout[];
};
type WorkoutGroupBySubOrgan = {
  key: number;
  suborganName: string;
  workoutGroupByEquipment: WorkoutGroupByEquipment[];
};

type WorkoutGroupByOrgan = {
  key: number;
  organName: string;
  workoutGroupBySubOrgan: WorkoutGroupBySubOrgan[];
};

type WorkoutData = WorkoutGroupByOrgan[];
