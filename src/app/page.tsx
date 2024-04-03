import { data } from "./data/workoutData";
import { CustomizedAccordions } from "./components/accordian/accordionMenu";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-1/4 h-screen flex flex-col place-content-between bg-slate-50">
      <div className=" bg-slate-50">
        <CustomizedAccordions data={data} />
      </div>
      <div className="bg-green-100">
        <Link href={"/blog"}>blogs</Link>
      </div>
    </main>
  );
}
