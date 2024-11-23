import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { Aside_Comp } from "../components/aside";
import { Moving_card } from "../components/Moving_card";
import { Highlight } from "../components/ui/hero-highlight";
import { Subscribe } from "../components/Subscribe";
import { AnimatedTooltip } from "../components/ui/AnimatedTooltip";

const people = [
  {
    id: 1,
    name: "Monil parikh",
    designation: "Explorer",
    image: "/src/assets/profile3.jpg",
  },
  {
    id: 2,
    name: "Aditya pai",
    designation: "Full-Stack Developer",
    image: "/src/assets/profile2.jpeg",
  },
  {
    id: 3,
    name: "Chirag varu",
    designation: "Full-Stack Developer",
    image: "/src/assets/profile1.jpeg",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full gap-1">
      <div className="mb-40">
        <Navbar />
      </div>

      <div className="flex p-1 mb-8">
        <div className="flex items-center justify-center gap-3 w-full mb-2">
          <Hero />
        </div>

        <div>
          <Aside_Comp />
          <div className="absolute">
            <Moving_card />
          </div>
        </div>
      </div>

      <div className="mt-10 ml-6 mb-14">
        <h1 className="font-bold text-2xl mb-3">
          Only UI Component Library you will ever need{" "}
        </h1>
        <p className="font-semibold text-2xl mb-4">As simple as copy and paste</p>
        <p className="text-lg">Copy paste the code into your ui folder and use the</p>
        <p className="text-lg mb-4">components in your projects. It's that simple, really.</p>
        <Highlight className="text-black dark:text-white">
          Craft Your Perfect Interface.
        </Highlight>
      </div>

      <div className="w-[45rem] mt-20 mb-16 ml-80">
        <Subscribe />
      </div>

      <div className="flex flex-row items-center justify-center w-full mb-12 p-2">
        <p className="text-[#696464] text-lg mb-2 mr-3 dark:text-white">Brought to you by </p>
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
}
