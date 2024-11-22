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
    name: "Monil Parikh",
    designation: "Explorer",
    image: "/src/assets/profile3.jpg",
  },
  {
    id: 2,
    name: "Aditya Pai",
    designation: "Frontend Developer",
    image: "/src/assets/profile2.jpeg",
  },
  {
    id: 3,
    name: "Chirag Varu",
    designation: "Full-stack Developer",
    image: "/src/assets/profile1.jpeg",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full gap-4 ">
      {/* Navbar */}
      <div className="mb-20">
        <Navbar />
      </div>

      {/* Hero and Aside Section */}
      <div className="flex flex-col md:flex-row p-2 gap-6">
        <div className="flex items-center justify-center h-[40rem] w-full">
          <Hero />
        </div>

        <div className="relative w-full mt-20 md:w-auto">
          <Aside_Comp />
          <div className="absolute top-10 left-0 md:static">
            <Moving_card />
          </div>
        </div>
      </div>

      {/* Highlight Section */}
      <div className="mt-10 ml-4 mb-14 md:ml-8">
        <h1 className="font-bold text-2xl sm:text-3xl mb-3">
          Only UI Component Library you will ever need
        </h1>
        <p className="font-semibold text-xl sm:text-2xl mb-4">
          As simple as copy and paste
        </p>
        <p className="text-lg sm:text-xl">
          Copy paste the code into your ui folder and use the
        </p>
        <p className="text-lg sm:text-xl mb-4">
          components in your projects. It's that simple, really.
        </p>
        <Highlight className="text-black dark:text-white">
          Craft Your Perfect Interface.
        </Highlight>
      </div>

      {/* Subscribe Section */}
      <div className="w-full sm:w-[30rem] lg:w-[45rem] mx-auto mt-20 mb-16">
        <Subscribe />
      </div>

      {/* Footer Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center w-full mb-12 p-4 text-center sm:text-left">
        <p className="text-[#696464] text-lg mb-4 sm:mb-0 sm:mr-3 dark:text-white">
          Brought to you by
        </p>
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
}
