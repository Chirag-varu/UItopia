"use client";
import { Button } from "@/components/ui/button";
import { useState, ReactNode } from "react";
import { X } from "lucide-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { QrCode } from "lucide-react";
import { MdInfo } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";

// Component for rendering button code with copy and detail options
const ButtonWithCopy: React.FC<{ code: string; coding: ReactNode }> = ({
  code,
  coding,
}) => {
  const [copied, setCopied] = useState(false);
  const [_, _setIsExpanded7] = useState<boolean>(false);

  // Handles copying code to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    });
  };

  return (
    <div className="group flex flex-col items-center justify-center p-4 relative w-full h-32 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
      <div>{coding}</div>
      <Dialog>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogTrigger asChild>
                <button
                  className="absolute top-0 left-0 md:opacity-0 opacity-100 group-hover:opacity-100 py-3 px-5 mr-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="More Info"
                >
                  <MdInfo className="text-xl text-gray-700 group-hover:text-blue-500" />
                </button>
              </DialogTrigger>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              align="center"
              className="z-50 border border-input bg-popover px-2 py-1 text-xs text-muted-foreground"
            >
              Click for details
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:hidden">
          <div className="overflow-y-auto">
            <DialogHeader className="contents space-y-0 text-left">
              <DialogTitle className="px-6 pt-6 text-base flex items-center justify-center border-b-[1px] dark:border-white border-black">
                <div className="mb-6">{coding}</div>
              </DialogTitle>
              <DialogDescription asChild>
                <div className="p-6 flex items-center justify-center">
                  <div className="space-y-4 [&_strong]:font-semibold [&_strong]:text-foreground">
                    <p className="text-6xl">This is a card Dialog box</p>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </div>
          <DialogFooter className="border-t border-border px-6 py-4">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="button">Okay</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="disabled:opacity-100 absolute top-0 right-0 md:opacity-0 opacity-100 group-hover:opacity-100 py-2 px-4 z-50 mr-2 rounded-md text-sm transition-opacity duration-300 "
              onClick={handleCopy}
              aria-label={copied ? "Copied" : "Copy to clipboard"}
              disabled={copied}
            >
              <div
                className={cn(
                  "transition-all",
                  copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
                )}
              >
                <Check
                  className="stroke-emerald-500"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </div>
              <div
                className={cn(
                  "absolute transition-all",
                  copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
                )}
              >
                <Copy size={16} strokeWidth={2} aria-hidden="true" />
              </div>
            </Button>
          </TooltipTrigger>
          <TooltipContent className="border border-input bg-popover px-2 py-1 text-xs text-muted-foreground">
            Click to copy
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default function Buttons() {
  const [bgColor, setBgColor] = useState("#d4d4d4");
  const [textColor, setTextColor] = useState("#000000");
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isExpanded7, setIsExpanded7] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded7((prevState) => !prevState);
  };

  // Toggle button
  const buttonCodeToggle = `import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <Button
      onClick={() => setIsActive(!isActive)}
      className={isActive ? "bg-[${bgColor}] text-[${textColor}]" : "bg-gray-300 text-gray-700"}
    >
      {isActive ? "Active" : "Inactive"}
    </Button>
  );
}`;
  const codeToggle = (
    <Button
      onClick={() => setIsActive(!isActive)}
      style={{
        backgroundColor: isActive ? bgColor : "gray",
        color: isActive ? textColor : "#000000",
      }}
    >
      {isActive ? "Active" : "Inactive"}
    </Button>
  );

  // Gradient button
  const buttonCodeGradient = `import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return <Button className="bg-gradient-to-r from-[${bgColor}] to-[#FFD700] text-[${textColor}] shadow-lg hover:shadow-xl transition-shadow">Button</Button>;
}`;
  const codeGradient = (
    <Button
      className="shadow-lg hover:shadow-xl"
      style={{
        background: `linear-gradient(to right, ${bgColor}, #FFD700)`,
        color: textColor,
      }}
    >
      Button
    </Button>
  );

  // Split button
  const buttonCodeSplit = `import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function ButtonDemo() {
  return (
    <div className="inline-flex">
      <Button className="bg-[${bgColor}] text-[${textColor}]">
        Action
      </Button>
      <Button
        size="icon"
        className="bg-[${bgColor}] text-[${textColor}]"
      >
        <ChevronDown size={16} />
      </Button>
    </div>
  );
}`;
  const codeSplit = (
    <div className="inline-flex">
      <Button style={{ backgroundColor: bgColor, color: textColor }}>
        Action
      </Button>
      <Button
        size="icon"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <ChevronDown size={16} />
      </Button>
    </div>
  );

  // ExpandableSearchBar
  const ExpandableSearchBar = `import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

export default function ExpandableSearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex items-center space-x-2">
      <Button
        size="icon"
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-gray-200 text-gray-800 hover:bg-gray-300 transition-all"
      >
        {isExpanded ? <X size={20} strokeWidth={2} /> : <Search size={20} strokeWidth={2} />}
      </Button>
      {isExpanded && (
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          className="px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 transition-all"
        />
      )}
    </div>
  );
}
`;
  const codeExpandableSearchBar = (
    <div className="flex items-center space-x-2">
      <Button
        size="icon"
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-gray-200 text-gray-800 hover:bg-gray-300 transition-all"
      >
        {isExpanded ? (
          <X size={20} strokeWidth={2} />
        ) : (
          <Search size={20} strokeWidth={2} />
        )}
      </Button>
      {isExpanded && (
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          className="px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 transition-all"
        />
      )}
    </div>
  );

  // Outline Button
  const buttonCodeOutline = `import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return <Button className="border border-[${bgColor}] text-[${textColor}] hover:bg-[${bgColor}] hover:text-white transition-all">Button</Button>;
}`;
  const codeOutline = (
    <Button
      className={`border border-[${bgColor}] bg-transparent text-[${bgColor}] hover:bg-[${bgColor}] transition-all`}
    >
      Button
    </Button>
  );

  // Button code and its rendered JSX for the first button
  const buttonCode1 = `import { Button } from "@/components/ui/button";

  export default function ButtonDemo() {
    return <Button className="bg-[${bgColor}] text-[${textColor}]">Button</Button>;
  }`;
  const code1 = (
    <Button style={{ backgroundColor: bgColor, color: textColor }}>
      Button
    </Button>
  );

  // Button code and its rendered JSX for the second button
  const buttonCode2 = `import { Button } from "@/components/ui/button";

  export default function ButtonDemo() {
    return <Button className="bg-[${bgColor}] text-[${textColor}] rounded-full">Button</Button>;
  }`;
  const code2 = (
    <Button
      className="rounded-full"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      Button
    </Button>
  );

  // Button code and its rendered JSX for the third button
  const buttonCode3 = `import { Button } from "@/components/ui/button";
  import { X } from "lucide-react";

  export default function ButtonDemo() {
    return (
      <Button variant="secondary">
        <X className="-ms-1 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
        Button
      </Button>
    );
  }`;
  const code3 = (
    <Button variant="secondary">
      <X
        className="-ms-1 me-2 opacity-60"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
      Button
    </Button>
  );

  // Button code and its rendered JSX for the fourth button
  const buttonCode4 = `import { Button } from "@/components/ui/button";
  import { ArrowLeft } from "lucide-react";

  export default function ButtonDemo() {
    return (
      <Button className="group" variant="ghost">
        <ArrowLeft className="-ms-1 me-2 opacity-60 transition-transform group-hover:-translate-x-0.5" />
        Button
      </Button>
    );
  }`;
  const code4 = (
    <Button className="group" variant="ghost">
      <ArrowLeft
        className="-ms-1 me-2 opacity-60 transition-transform group-hover:-translate-x-0.5"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
      Button
    </Button>
  );

  // Button code and its rendered JSX for the fifth button
  const buttonCode5 = `import { Button } from "@/components/ui/button";
  import { QrCode } from "lucide-react";

  export default function ButtonDemo() {
    return (
      <div className="inline-flex -space-x-px divide-x divide-primary-foreground/30 rounded-lg">
        <Button size="icon" aria-label="QR code" className="bg-[${bgColor}] text-[${textColor}]">
          <QrCode size={16} strokeWidth={2} aria-hidden="true" />
        </Button>
        <Button>Sign in</Button>
      </div>
    );
  }`;
  const code5 = (
    <div className="inline-flex -space-x-px divide-x divide-primary-foreground/30 rounded-lg">
      <Button
        size="icon"
        aria-label="QR code"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <QrCode size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
      <Button style={{ backgroundColor: bgColor, color: textColor }}>
        Sign in
      </Button>
    </div>
  );

  // Button code and its rendered JSX for the sixth button
  const buttonCode6 = `import { Button } from "@/components/ui/button";
  import { ArrowRight } from "lucide-react";

  export default function ButtonDemo() {
    return (
      <Button className="group bg-[${bgColor}] text-[${textColor}]">
        Button
        <ArrowRight className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5" />
      </Button>
    );
  }`;
  const code6 = (
    <Button
      className="group"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      Button
      <ArrowRight
        className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
    </Button>
  );

  const buttonCode7 = `// Dependencies: pnpm install lucide-react

"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function ButtonDemo() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <Button
      variant="ghost"
      onClick={toggleExpand}
      aria-expanded={isExpanded}
      aria-controls="expandable-content" // Use this ID on the element that this button controls
    >
      {isExpanded ? "Show less" : "Show more"}
      {isExpanded ? (
        <ChevronUp className="-me-1 ms-1" size={16} strokeWidth={2} aria-hidden="true" />
      ) : (
        <ChevronDown className="-me-1 ms-1" size={16} strokeWidth={2} aria-hidden="true" />
      )}
    </Button>
  );
}
`;
  const code7 = (
    <Button
      variant="ghost"
      onClick={toggleExpand}
      aria-expanded={isExpanded7}
      aria-controls="expandable-content" // Use this ID on the element that this button controls
    >
      {isExpanded7 ? "Show less" : "Show more"}
      {isExpanded7 ? (
        <ChevronUp
          className="-me-1 ms-1"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
      ) : (
        <ChevronDown
          className="-me-1 ms-1"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
      )}
    </Button>
  );

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-4 px-4 sm:px-8 ">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-2 text-center mt-[8rem] sm:mt-0 md:mt-40">
        <h1 className="text-3xl sm:text-4xl font-bold">Button</h1>
        <p className="text-[hsl(var(--muted-foreground))] font-semibold max-w-md sm:max-w-lg">
          A growing collection of button components built with ReactTS and
          TailwindCSS.
        </p>
      </div>

      {/* Color Picker for customizing button colors */}
      <div className="flex flex-row items-center justify-center gap-6 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        {/* Background Color Picker */}
        <div className="flex items-center gap-2">
          <label
            htmlFor="bgColor"
            className="font-semibold text-sm text-gray-800 dark:text-gray-200"
          >
            Background Color
          </label>
          <input
            id="bgColor"
            type="color"
            className="h-8 w-8 rounded-lg border-none outline-none cursor-pointer transition-transform transform hover:scale-110"
            onChange={(e) => setBgColor(e.target.value)}
            value={bgColor}
          />
        </div>

        {/* Text Color Picker */}
        <div className="flex items-center gap-2">
          <label
            htmlFor="textColor"
            className="font-semibold text-sm text-gray-800 dark:text-gray-200"
          >
            Text Color
          </label>
          <input
            id="textColor"
            type="color"
            className="h-8 w-8 rounded-lg border-none outline-none cursor-pointer transition-transform transform hover:scale-110"
            onChange={(e) => setTextColor(e.target.value)}
            value={textColor}
          />
        </div>
      </div>

      {/* Grid for displaying button examples */}
      <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12 w-full">
        {" "}
        <ButtonWithCopy code={buttonCode1} coding={code1} />
        <ButtonWithCopy code={buttonCode2} coding={code2} />
        <ButtonWithCopy code={buttonCode3} coding={code3} />
        <ButtonWithCopy code={buttonCode4} coding={code4} />
        <ButtonWithCopy code={buttonCode5} coding={code5} />
        <ButtonWithCopy code={buttonCode6} coding={code6} />
        <ButtonWithCopy code={buttonCodeOutline} coding={codeOutline} />
        <ButtonWithCopy
          code={ExpandableSearchBar}
          coding={codeExpandableSearchBar}
        />
        <ButtonWithCopy code={buttonCodeToggle} coding={codeToggle} />
        <ButtonWithCopy code={buttonCodeGradient} coding={codeGradient} />
        <ButtonWithCopy code={buttonCodeSplit} coding={codeSplit} />
        <ButtonWithCopy code={buttonCode7} coding={code7} />
      </div>
    </div>
  );
}
