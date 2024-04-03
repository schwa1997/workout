import { data } from "./data/workoutData";
import { CustomizedAccordions } from "./components/accordionMenu";

export default function Home() {
  return (
    <main className="">
      <div className="w-1/4 h-screen bg-slate-50">
        <CustomizedAccordions data={data} />
      </div>
    </main>
  );
}
