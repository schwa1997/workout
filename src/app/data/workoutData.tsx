// 使用类型来验证数据
export const data: WorkoutData = [
  {
    workoutKey: 1,
    organName: "Chest",
    suborgans: [
      {
        suborganName: "Upper Chest",
        workout: {
          dumbbell: [
            {
              equipmentType: "dumbbell",
              workoutName: "上斜哑铃卧推",
              imgUrl:
                "https://static1.keepcdn.com/2018/04/22/14/1524379155506_1080x1080.jpg",
              description: "Description for Dumbbell Bench Press.",
            },
            {
              equipmentType: "dumbbell",
              workoutName: "窄距哑铃卧推",
              imgUrl:
                "https://static1.keepcdn.com/2018/04/22/14/1524379155506_1080x1080.jpg",
              description: "Description for Dumbbell Bench Press.",
            },
            {
              equipmentType: "dumbbell",
              workoutName: "上斜哑铃飞鸟",
              imgUrl:
                "https://static1.keepcdn.com/2018/04/22/14/1524379155506_1080x1080.jpg",
              description: "Description for Dumbbell Bench Press.",
            },
          ],
          rope: [
            {
              equipmentType: "rope",
              workoutName: "上斜绳索夹胸",
              imgUrl:
                "https://static1.keepcdn.com/2018/04/22/14/1524379155506_1080x1080.jpg",
              description: "Description for Dumbbell Bench Press.",
            },
            {
              equipmentType: "dumbbell",
              workoutName: "下斜绳索夹胸",
              imgUrl:
                "https://jianshen8.com/uploads/allimg/160425/4_160425105831_2.jpg",
              description: "Description for Dumbbell Bench Press.",
            },
          ],
        },
      },
      {
        suborganName: "Lower Chest",
        workout: {
          dumbbell: [
            {
              equipmentType: "dumbbell",
              workoutName: "哑铃卧推",
              imgUrl:
                "https://static1.keepcdn.com/2018/04/22/14/1524379155506_1080x1080.jpg",
              description: "Description for Decline Dumbbell Bench Press.",
            },
            {
              equipmentType: "dumbbell",
              workoutName: "平躺哑铃卧推",
              imgUrl:
                "https://static1.keepcdn.com/2018/04/22/14/1524379155506_1080x1080.jpg",
              description: "Description for Decline Dumbbell Bench Press.",
            },
          ],
          SmithMachine: [
            {
              equipmentType: "Smith Machine",
              workoutName: "史密斯机卧推",
              imgUrl:
                "https://static1.keepcdn.com/2018/04/22/14/1524379155506_1080x1080.jpg",
              description: "Description for Dumbbell Bench Press.",
            },
            {
              equipmentType: "Smith Machine",
              workoutName: "下斜史密斯机卧推",
              imgUrl:
                "https://static1.keepcdn.com/2018/04/22/14/1524379155506_1080x1080.jpg",
              description: "Description for Dumbbell Bench Press.",
            },
          ],
        },
      },
    ],
  },
  {
    workoutKey: 2,
    organName: "Back",
    suborgans: [
      {
        suborganName: "Upper Back",
        workout: {
          barbell: [
            {
              equipmentType: "barbell",
              workoutName: "Barbell Deadlift",
              imgUrl: "https://example.com/barbell_deadlift.jpg",
              description: "Description for Barbell Deadlift.",
            },
            // 其他上背锻炼动作
          ],
        },
      },
      {
        suborganName: "Lower Back",
        workout: {
          bodyweight: [
            {
              equipmentType: "bodyweight",
              workoutName: "Hyperextensions",
              imgUrl: "https://example.com/hyperextensions.jpg",
              description: "Description for Hyperextensions.",
            },
            // 其他下背锻炼动作
          ],
        },
      },
    ],
  },
  {
    workoutKey: 3,
    organName: "Shoulder",
    suborgans: [
      {
        suborganName: "Anterior Deltoid",
        workout: {
          dumbbell: [
            {
              equipmentType: "dumbbell",
              workoutName: "上斜哑铃卧推",
              imgUrl:
                "https://static1.keepcdn.com/2018/04/22/14/1524379155506_1080x1080.jpg",
              description: "Description for Dumbbell Bench Press.",
            },
            {
              equipmentType: "dumbbell",
              workoutName: "窄距哑铃卧推",
              imgUrl:
                "https://static1.keepcdn.com/2018/04/22/14/1524379155506_1080x1080.jpg",
              description: "Description for Dumbbell Bench Press.",
            },
            {
              equipmentType: "dumbbell",
              workoutName: "上斜哑铃飞鸟",
              imgUrl:
                "https://static1.keepcdn.com/2018/04/22/14/1524379155506_1080x1080.jpg",
              description: "Description for Dumbbell Bench Press.",
            },
          ],
          rope: [
            {
              equipmentType: "rope",
              workoutName: "上斜绳索夹胸",
              imgUrl:
                "https://static1.keepcdn.com/2018/04/22/14/1524379155506_1080x1080.jpg",
              description: "Description for Dumbbell Bench Press.",
            },
            {
              equipmentType: "dumbbell",
              workoutName: "下斜绳索夹胸",
              imgUrl:
                "https://jianshen8.com/uploads/allimg/160425/4_160425105831_2.jpg",
              description: "Description for Dumbbell Bench Press.",
            },
          ],
        },
      },
      {
        suborganName: "Medial Deltoid",
        workout: {
          dumbbell: [
            {
              equipmentType: "dumbbell",
              workoutName: "哑铃卧推",
              imgUrl:
                "https://static1.keepcdn.com/2018/04/22/14/1524379155506_1080x1080.jpg",
              description: "Description for Decline Dumbbell Bench Press.",
            },
            {
              equipmentType: "dumbbell",
              workoutName: "平躺哑铃卧推",
              imgUrl:
                "https://static1.keepcdn.com/2018/04/22/14/1524379155506_1080x1080.jpg",
              description: "Description for Decline Dumbbell Bench Press.",
            },
          ],
          SmithMachine: [
            {
              equipmentType: "Smith Machine",
              workoutName: "史密斯机卧推",
              imgUrl:
                "https://static1.keepcdn.com/2018/04/22/14/1524379155506_1080x1080.jpg",
              description: "Description for Dumbbell Bench Press.",
            },
            {
              equipmentType: "Smith Machine",
              workoutName: "下斜史密斯机卧推",
              imgUrl:
                "https://static1.keepcdn.com/2018/04/22/14/1524379155506_1080x1080.jpg",
              description: "Description for Dumbbell Bench Press.",
            },
          ],
        },
      },
      {
        suborganName: "Posterior Deltoid",
        workout: {
          dumbbell: [
            {
              equipmentType: "dumbbell",
              workoutName: "哑铃卧推",
              imgUrl:
                "https://static1.keepcdn.com/2018/04/22/14/1524379155506_1080x1080.jpg",
              description: "Description for Decline Dumbbell Bench Press.",
            },
            {
              equipmentType: "dumbbell",
              workoutName: "平躺哑铃卧推",
              imgUrl:
                "https://static1.keepcdn.com/2018/04/22/14/1524379155506_1080x1080.jpg",
              description: "Description for Decline Dumbbell Bench Press.",
            },
          ],
          SmithMachine: [
            {
              equipmentType: "Smith Machine",
              workoutName: "史密斯机卧推",
              imgUrl:
                "https://static1.keepcdn.com/2018/04/22/14/1524379155506_1080x1080.jpg",
              description: "Description for Dumbbell Bench Press.",
            },
            {
              equipmentType: "Smith Machine",
              workoutName: "下斜史密斯机卧推",
              imgUrl:
                "https://static1.keepcdn.com/2018/04/22/14/1524379155506_1080x1080.jpg",
              description: "Description for Dumbbell Bench Press.",
            },
          ],
        },
      },
    ],
  },
];
