import { FaStar } from "react-icons/fa";
import { FlipWords } from "./ui/flip-words";
import { Button } from "@/components/ui/button";

export function Hero() {
    const words = ["modern", "better", "beautiful", "awawesome"];

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-center rounded-full bg-[#FBEBEB] gap-2 p-3 w-[15rem] h-8">
        <span className="text-[#B77171]"><FaStar /></span>
        <span className="text-[#C19C9C]">|</span>
        <span>New releases every week</span>
      </div>

      <div className="mb-2">
        <p className="text-7xl">Make your</p>
        <p className="text-7xl">websites look</p>
        <p className="text-7xl">10x<FlipWords words={words} className="text-[#465FDC]"/></p>
      </div>

      <div className="mb-4">
        <p className="text-xl">Copy paste the most trending components and use them in your </p>
        <p className="text-lg">websites without having to worry about styling and animations. </p>
      </div>

      <div className="mb-4">
        <Button className="rounded-full text-lg">Browse Components</Button>
      </div>
      
      <div className="flex h-14 w-[4rem] gap-5">
        <img src="src/assets/next-js.png" alt="Next js" />
        <img src="src/assets/React.png" alt="React js" />
        <img src="src/assets/Tailwind_CSS.png" alt="Tailwind css" />
        <img src="src/assets/motion.png" alt="motion" />
        <img src="src/assets/shadcn-ui.png" alt="Shadcn" />
      </div>
    </div>
  )
}
