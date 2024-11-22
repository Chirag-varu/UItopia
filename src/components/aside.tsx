"use client";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export function Aside_Comp() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] dark:bg-gray-800/50 h-[17rem] rounded-2xl w-[97%]">
      <TextRevealCard
        text="Hover over me to reveal"
        revealText="Welcome to UI-Topia "
      >
        <TextRevealCardTitle>
            Beautify your website within minutes
        </TextRevealCardTitle>
        <TextRevealCardDescription>
            With UI-Topia, you can build great looking websites within minutes.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
