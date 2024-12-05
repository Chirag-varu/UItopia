import { Hero } from "../components/hero";
import { Aside_Comp } from "../components/aside";
import { Moving_card } from "../components/Moving_card";
import { Highlight } from "../components/ui/hero-highlight";
import { Subscribe } from "../components/Subscribe";
import { AnimatedTooltip } from "../components/ui/AnimatedTooltip";
import person1 from "../assets/profile3.jpg";
import person2 from "../assets/profile2.jpg";
import person3 from "../assets/profile1.jpeg";

const people = [
  {
    id: 1,
    name: "Monil Parikh",
    designation: "Explorer",
    image: person1,
  },
  {
    id: 2,
    name: "Aditya Pai",
    designation: "Full-Stack Developer",
    image: person2,
  },
  {
    id: 3,
    name: "Chirag Varu",
    designation: "Full-Stack Developer",
    image: person3,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full gap-4">
      <div className="">
        <div className="flex md:flex-row flex-col p-1 mb-8 md:mt-40 mt-24">
          <div className="flex flex-1 justify-around gap-3 w-full mb-2 mr-32">
            <Hero />
          </div>

          <div className="hidden md:block mr-4">
            <Aside_Comp />
            <div className="absolute">
              <Moving_card />
            </div>
          </div>
        </div>

        <div className="mt-10 md:ml-48 ml-4 mb-14 max-w-lg lg:max-w-xl mx-4 ">
          <h1 className="font-bold md:text-2xl text-xl mb-3 ">
            Only UI Component Library you will ever need{" "}
          </h1>
          <p className="font-semibold text-2xl mb-4">
            As simple as copy and paste
          </p>
          <p className="text-lg">
            Copy paste the code into your ui folder and use the
          </p>
          <p className="text-lg mb-4">
            components in your projects. It's that simple, really.
          </p>
          <Highlight className="text-black dark:text-white">
            Craft Your Perfect Interface.
          </Highlight>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="mt-12 mb-16 flex justify-center px-4">
        <div className="w-full max-w-lg lg:max-w-xl">
          <Subscribe />
        </div>
      </div>

      <div className="flex flex-row items-center justify-center w-full mb-5 p-2">
        <p className="text-[#696464] text-lg mb-1 mr-3 dark:text-white">
          Brought to you by{" "}
        </p>
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
}
