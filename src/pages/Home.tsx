import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { Aside_Comp } from "../components/aside";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full gap-1">
      <div className="mb-40">
        <Navbar />
      </div>

      <div className="flex p-1">
        <div className="flex items-center justify-center gap-3 w-full mb-2">
          <Hero />
        </div>

        <div>
          <Aside_Comp />
        </div>
      </div>
    </div>
  );
}
