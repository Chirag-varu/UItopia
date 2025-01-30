import { FaStar } from "react-icons/fa";
import { FlipWords } from "./ui/flip-words";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NextLogo from "../assets/next-js.png";
import ReactLogo from "../assets/React.png";
import MotionLogo from "../assets/motion.png";
import TailwindLogo from "../assets/Tailwind_CSS.png";
import ShadCnLogo from "../assets/shadcn-ui-bg.png";

export function Hero() {
  const words = ["modern", "better", "beautiful", "awesome"];

  return (
    <div className="flex flex-col gap-3 ml-4">
      {/* Announcement Banner */}
      <div className="flex items-center justify-center rounded-full bg-[#FBEBEB] gap-2 p-3 w-[15rem] h-8">
        <span className="text-[#B77171]">
          <FaStar />
        </span>
        <span className="text-[#C19C9C]">|</span>
        <span className="text-black">New releases every week</span>
      </div>

      {/* Hero Text */}
      <div className="mb-2">
        <p className="md:text-7xl text-6xl">Make your</p>
        <p className="md:text-7xl text-6xl">websites look</p>
        <p className="md:text-7xl text-6xl">
          10x
          <FlipWords
            words={words}
            className="text-[#465FDC] dark:text-[#465FDC] font-medium"
          />
        </p>
      </div>

      {/* Subheading */}
      <div className="mb-4">
        <p className="text-xl">
          Copy paste the most trending components and use them in your{" "}
          <span className="inline md:block">
            websites without having to worry about styling and animations.
          </span>
        </p>
      </div>

      {/* Browse Components Button */}
      <div className="mb-4">
        <Link to="/components">
          <Button className="px-6 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
            Browse Components
          </Button>
        </Link>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap justify-center items-center gap-5 md:w-[26rem] w-[22rem] left-3">
        <img
          src={NextLogo}
          alt="Next.js"
          className="dark:invert dark:brightness-200 w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem]"
        />
        <img
          src={ReactLogo}
          alt="React.js"
          className="w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem]"
        />
        <img
          src={TailwindLogo}
          alt="Tailwind CSS"
          className="w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem]"
        />
        <img
          src={MotionLogo}
          alt="Motion"
          className="w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem]"
        />
        <img
          src={ShadCnLogo}
          alt="ShadCN"
          className="dark:invert dark:brightness-200 w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem]"
        />
      </div>
    </div>
  );
}
