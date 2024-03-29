import Image from "next/image";
import { ItemCard } from "./components/itemCard";
import { data } from "./data/workoutData";
import { CustomizedAccordions } from "./components/accordionMenu";

export default function Home() {
  return (
    <main className="">
      <div className="w-60 h-screen bg-slate-50">
        <CustomizedAccordions data={data} />
      </div>
    </main>
  );
}
