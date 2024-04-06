import Header from "./components/layout/header";
import { CallMade } from "@mui/icons-material";
import { ShowCard } from "./components/reusable/showCard";

export default function Home() {
  return (
    <main className="bg-white dark:bg-green-950 dark:text-white text-black grid lg:grid-cols-2 grid-cols-1 ">
      <div className="">
        <section className="container p-8">
          <div className="w-fit px-4 py-1 rounded-3xl uppercase text-green-600 border-green-600 border-2">
            get results
          </div>
          <div className="pb-4 pt-2 uppercase mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-white md:text-5xl lg:text-6xl">
            <span>perfect fitness app for tracking your {""}</span>
            <span className="normal-case text-green-700">WorkOuts</span>
          </div>
          <div className="w-fit flex gap-10">
            <div className="w-48">
              <div className="grid grid-cols-4 w-fit">
                <div className="col-span-1 " />
                <div className="z-40 col-span-2 -mb-5 w-11 h-11 rounded-full place-content-center bg-white">
                  <img
                    className="w-10 h-10 rounded-full mx-auto"
                    src="https://images.hdqwalls.com/wallpapers/jennie-from-blackpink-3n.jpg"
                    alt=""
                    width="320084"
                    height="512"
                  />
                </div>{" "}
                <div className="col-span-1" />
                <div className="z-50 col-span-2 w-11 h-11 rounded-full place-content-center bg-white">
                  <img
                    className="w-10 h-10 rounded-full mx-auto"
                    src="https://images.hdqwalls.com/wallpapers/jennie-from-blackpink-3n.jpg"
                    alt=""
                    width="320084"
                    height="512"
                  />
                </div>
                <div className="col-span-2 w-11 h-11 rounded-full place-content-center bg-white">
                  <img
                    className="w-10 h-10 rounded-full mx-auto"
                    src="https://images.hdqwalls.com/wallpapers/jennie-from-blackpink-3n.jpg"
                    alt=""
                    width="320084"
                    height="512"
                  />
                </div>
              </div>
              <p className="text-2xl font-extrabold leading-none tracking-tight text-green-500">
                200k+
              </p>
              <span className="text-sm font-bold">Active Users</span>
            </div>
            <div className="place-self-center">
              <span className="">
                Gym workouts, hundreds of exercises toperform and awesome charts
                tomeasureyour gym progress
              </span>
              <div className="flex gap-4 pt-2 lg:text-sm text-sm">
                <button className="bg-white hover:bg-green-600 rounded-3xl text-black hover:text-white hover:font-bold lg:px-4 px-2 py-2 border-gray-300 border-2 hover:border-green-600">
                  Get Started
                  <CallMade />
                </button>
                <button className="bg-white hover:bg-green-600 rounded-3xl text-black hover:text-white hover:font-bold lg:px-4 px-2 py-2 border-gray-300 border-2 hover:border-green-600">
                  Learn More
                  <CallMade />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full mt-10">
            <ShowCard
              title={"live training"}
              img={
                "https://media.self.com/photos/615378c1150f8742ac896749/4:3/w_2560%2Cc_limit/Forearm%2520Plank%2520-%2520Delise_001.jpg"
              }
              content={""}
              tags={[]}
            />
          </div>
        </section>
      </div>
      <div className="">
        <section className="p-8 gap-6 grid sm:grid-cols-2 grid-cols-1">
          <div>
            <ShowCard
              title={""}
              img={
                "https://media.self.com/photos/65c69efc8b73730e74f0142d/master/w_1600,c_limit/Billy-DB-chest-press.gif"
              }
              content={""}
              tags={[]}
            />
          </div>
          <div>
            <ShowCard
              title={""}
              img={
                "https://media.self.com/photos/65b3ed5b803b6f61b98e7f03/master/w_2580%2Cc_limit/Alicia-KB-front-squat.gif"
              }
              content={"USER-FRIENDLYMOBILE APP"}
              tags={[]}
            />
          </div>
          <div>
            <ShowCard
              title={""}
              img={""}
              content={"USER-FRIENDLYMOBILE APP"}
              tags={[]}
            />
          </div>
          <div>
            <ShowCard
              title={""}
              img={
                "https://media.self.com/photos/65b3ed5b803b6f61b98e7f03/master/w_2580%2Cc_limit/Alicia-KB-front-squat.gif"
              }
              content={"USER-FRIENDLYMOBILE APP"}
              tags={[]}
            />
          </div>
          <div className="flex gap-3 flex-col">
            <ShowCard
              title={""}
              img={
                "https://media.self.com/photos/626c318887f84dfd9214af3d/master/w_1600,c_limit/Lanoa-high-plank%20(1).jpg"
              }
              content={""}
              tags={["sports", "equipment"]}
            />
            <ShowCard
              title={""}
              img={
                ""
              }
              content={"this is ahdfsihai hifda;uf dg  ofidua;fud ujjdhfu"}
              tags={[]}
            />
          </div>{" "}
          <div>
            <ShowCard
              title={""}
              img={
                "https://media.self.com/photos/58fa4496feead55f43f7fc95/4:3/w_2240,c_limit/strongest-self-strength-workout-2.jpg"
              }
              content={""}
              tags={["sports", "challenge", "gym"]}
            />
          </div>
        </section>{" "}
      </div>
    </main>
  );
}
