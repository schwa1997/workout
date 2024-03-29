type Workout = {
  equipmentType: string;
  workoutName: string;
  imgUrl: string;
  description: string;
};

type Suborgan = {
  suborganName: string;
  workout: {
    [key: string]: Workout[];
  };
};

type WorkoutGroup = {
  workoutKey: number;
  organName: string;
  suborgans: Suborgan[];
};

type WorkoutData = WorkoutGroup[];
