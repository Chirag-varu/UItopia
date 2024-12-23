"use client";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import {
  SquareArrowOutUpRight,
  ThumbsDownIcon,
  ThumbsUpIcon,
  X,
} from "lucide-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { QrCode } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { Check, Copy } from "lucide-react";
import { Search } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { LoaderCircle } from "lucide-react";
import { useImageUpload } from "@/hooks/use-image-upload";
import { CircleUserRound } from "lucide-react";
import { Mail } from "lucide-react";
import { ButtonWithCopy } from "./ButtonWithCopy";
import { HexColorPicker } from "react-colorful";
import useOnClickOutside from "use-onclickoutside";
import AvatarImg from "../../../assets/favicon-removebg.png";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  RiCodeFill,
  RiFacebookFill,
  RiMailLine,
  RiTwitterXFill,
} from "@remixicon/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bolt, BookOpen, Layers2, LogOut, Pin, UserPen } from "lucide-react";

export default function Buttons() {
  const [bgColor, setBgColor] = useState("#d4d4d4");
  const [textColor, setTextColor] = useState("#000000");
  const [selectedLibrary, setSelectedLibrary] = useState("React.ts");
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isExpanded7, setIsExpanded7] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("Action");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const options = ["Active", "Inactive", "Pending"];

  const toggleExpand = () => {
    setIsExpanded7((prevState) => !prevState);
  };

  const handleCopy = async () => {
    try {
      // await navigator.clipboard.writeText("string to copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleCopy2 = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  const [isBgPickerOpen, setBgPickerOpen] = useState(false);
  const bgPickerRef = useRef(null);
  useOnClickOutside(bgPickerRef, () => setBgPickerOpen(false));

  const [isTextPickerOpen, setTextPickerOpen] = useState(false);
  const textPickerRef = useRef(null);
  useOnClickOutside(textPickerRef, () => setTextPickerOpen(false));

  const {
    previewUrl,
    fileInputRef,
    handleThumbnailClick,
    handleFileChange,
    handleRemove,
    fileName,
  } = useImageUpload();

  const buttonComponents = [
    {
      name: "Basic Button",
      component: (
        <Button style={{ backgroundColor: bgColor, color: textColor }}>
          Button
        </Button>
      ),
      code: `import { Button } from "@/components/ui/button";
      
  export default function ButtonDemo() {
    return <Button style={{ backgroundColor: bgColor, color: textColor }}>Button</Button>;
  }`,
    },
    {
      name: "Rounded Button",
      component: (
        <Button
          className="rounded-full"
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          Button
        </Button>
      ),
      code: `import { Button } from "@/components/ui/button";
      
  export default function ButtonDemo() {
    return <Button className="rounded-full" style={{ backgroundColor: bgColor, color: textColor }}>Button</Button>;
  }`,
    },
    {
      name: "Button with Icon",
      component: (
        <Button variant="secondary">
          <X
            className="-ms-1 me-2 opacity-60"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          Button
        </Button>
      ),
      code: `import { Button } from "@/components/ui/button";
  import { X } from "lucide-react";
      
  export default function ButtonDemo() {
    return (
      <Button variant="secondary">
        <X className="-ms-1 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
        Button
      </Button>
    );
  }`,
    },
    {
      name: "Ghost Button with Hover",
      component: (
        <Button className="group" variant="ghost">
          <ArrowLeft
            className="-ms-1 me-2 opacity-60 transition-transform group-hover:-translate-x-0.5"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          Button
        </Button>
      ),
      code: `import { Button } from "@/components/ui/button";
  import { ArrowLeft } from "lucide-react";
      
  export default function ButtonDemo() {
    return (
      <Button className="group" variant="ghost">
        <ArrowLeft className="-ms-1 me-2 opacity-60 transition-transform group-hover:-translate-x-0.5" />
        Button
      </Button>
    );
  }`,
    },
    {
      name: "Expandable Search Bar",
      component: (
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
      ),
      code: `import { useState } from "react";
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
    }`,
    },
    {
      name: "Outline Button",
      component: (
        <Button
          className={`border border-[${bgColor}] bg-transparent text-[${bgColor}] hover:bg-[${bgColor}] transition-all`}
        >
          Button
        </Button>
      ),
      code: `import { Button } from "@/components/ui/button";
    
    export default function ButtonDemo() {
      return <Button className="border border-[${bgColor}] text-[${textColor}] hover:bg-[${bgColor}] hover:text-white transition-all">Button</Button>;
    }`,
    },
    {
      name: "Copy Button",
      component: (
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="disabled:opacity-100 bg-[${bgColor}] text-[${textColor}]"
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
            <TooltipContent className="px-2 py-1 text-xs">
              Click to copy
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ),
      code: `import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
    import { Button } from "@/components/ui/button";
    import { Check, Copy } from "lucide-react";
    import { cn } from "@/lib/utils";
    import { useState } from "react";
    
    export default function ButtonDemo() {
      const [copied, setCopied] = useState(false);
    
      const handleCopy = async () => {
        try {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch (err) {
          console.error("Failed to copy text: ", err);
        }
      };
    
      return (
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="disabled:opacity-100 bg-[${bgColor}] text-[${textColor}]"
                onClick={handleCopy}
                aria-label={copied ? "Copied" : "Copy to clipboard"}
                disabled={copied}
              >
                <div
                  className={cn(
                    "transition-all",
                    copied ? "scale-100 opacity-100" : "scale-0 opacity-0",
                  )}
                >
                  <Check className="stroke-emerald-500" size={16} strokeWidth={2} aria-hidden="true" />
                </div>
                <div
                  className={cn(
                    "absolute transition-all",
                    copied ? "scale-0 opacity-0" : "scale-100 opacity-100",
                  )}
                >
                  <Copy size={16} strokeWidth={2} aria-hidden="true" />
                </div>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="px-2 py-1 text-xs">Click to copy</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }`,
    },
    {
      name: "Save and Cancel Buttons",
      component: (
        <div className="inline-flex items-center gap-2">
          <Button variant="ghost">Cancel</Button>
          <Button style={{ backgroundColor: bgColor, color: textColor }}>
            Save
          </Button>
        </div>
      ),
      code: `import { Button } from "@/components/ui/button";
      
  export default function ButtonDemo() {
    return (
      <div className="inline-flex items-center gap-2">
        <Button variant="ghost">Cancel</Button>
        <Button>Save</Button>
      </div>
    );
  }`,
    },
    {
      name: "Toggle Button",
      component: (
        <Button
          onClick={() => setIsActive(!isActive)}
          style={{
            backgroundColor: isActive ? bgColor : "gray",
            color: isActive ? textColor : "#000000",
          }}
        >
          {isActive ? "Active" : "Inactive"}
        </Button>
      ),
      code: `import { Button } from "@/components/ui/button";
      
  export default function ButtonDemo() {
    const [isActive, setIsActive] = useState(false);
    
    return (
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
  }`,
    },
    {
      name: "Gradient Button",
      component: (
        <Button
          className="shadow-lg hover:shadow-xl"
          style={{
            background: `linear-gradient(to right, ${bgColor}, #FFD700)`,
            color: textColor,
          }}
        >
          Button
        </Button>
      ),
      code: `import { Button } from "@/components/ui/button";
      
  export default function ButtonDemo() {
    return (
      <Button
        style={{
          background: "linear-gradient(to right, ${bgColor}, #FFD700)",
          color: textColor,
        }}
        className="shadow-lg hover:shadow-xl"
      >
        Button
      </Button>
    );
  }`,
    },
    {
      name: "Loading Button",
      component: (
        <Button disabled>
          <LoaderCircle
            className="-ms-1 me-2 animate-spin"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          Button
        </Button>
      ),
      code: `import { Button } from "@/components/ui/button";
  import { LoaderCircle } from "lucide-react";
      
  export default function ButtonDemo() {
    return (
      <Button disabled>
        <LoaderCircle
          className="-ms-1 me-2 animate-spin"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        Button
      </Button>
    );
  }`,
    },
    {
      name: "profilewithtext",
      component: (
        <Button className="rounded-full py-0 ps-0">
          <div className="me-0.5 flex aspect-square h-full p-1.5">
            <img
              className="h-auto w-full rounded-full"
              src={AvatarImg}
              alt="Profile image"
              width={24}
              height={24}
              aria-hidden="true"
            />
          </div>
          @UI-Topia
        </Button>
      ),
      code: `import { Button } from "@/components/ui/button";
import AvatarImg from "@/assets/favicon.png";

export default function ButtonDemo() {
  return (
    <Button className="rounded-full py-0 ps-0">
      <div className="me-0.5 flex aspect-square h-full p-1.5">
        <img
          className="h-auto w-full rounded-full"
          src={AvatarImg}
          alt="Profile image"
          width={24}
          height={24}
          aria-hidden="true"
        />
      </div>
      @UI-Topia
    </Button>
  );
}
`,
    },
    {
      name: "image dropdown",
      component: (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-auto p-0 hover:bg-transparent"
              >
                <Avatar>
                  <AvatarImage src="./avatar.jpg" alt="Profile image" />
                  <AvatarFallback>UI</AvatarFallback>
                </Avatar>
                <ChevronDown
                  size={16}
                  strokeWidth={2}
                  className="ms-2 opacity-60"
                  aria-hidden="true"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-w-64">
              <DropdownMenuLabel className="flex min-w-0 flex-col">
                <span className="truncate text-sm font-medium text-foreground">
                  UI-Topia
                </span>
                <span className="truncate text-xs font-normal text-muted-foreground">
                  uitopia@gmail.com
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Bolt
                    size={16}
                    strokeWidth={2}
                    className="opacity-60"
                    aria-hidden="true"
                  />
                  <span>Option 1</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Layers2
                    size={16}
                    strokeWidth={2}
                    className="opacity-60"
                    aria-hidden="true"
                  />
                  <span>Option 2</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BookOpen
                    size={16}
                    strokeWidth={2}
                    className="opacity-60"
                    aria-hidden="true"
                  />
                  <span>Option 3</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Pin
                    size={16}
                    strokeWidth={2}
                    className="opacity-60"
                    aria-hidden="true"
                  />
                  <span>Option 4</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <UserPen
                    size={16}
                    strokeWidth={2}
                    className="opacity-60"
                    aria-hidden="true"
                  />
                  <span>Option 5</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                <LogOut
                  size={16}
                  strokeWidth={2}
                  className="opacity-60"
                  aria-hidden="true"
                />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
      code: `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Bolt, BookOpen, ChevronDown, Layers2, LogOut, Pin, UserPen } from "lucide-react";

export default function DropdownDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
          <Avatar>
            <AvatarImage src="./avatar.jpg" alt="Profile image" />
            <AvatarFallback>KK</AvatarFallback>
          </Avatar>
          <ChevronDown size={16} strokeWidth={2} className="ms-2 opacity-60" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-medium text-foreground">Keith Kennedy</span>
          <span className="truncate text-xs font-normal text-muted-foreground">
            k.kennedy@originui.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Bolt size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
            <span>Option 1</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Layers2 size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
            <span>Option 2</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BookOpen size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
            <span>Option 3</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Pin size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
            <span>Option 4</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UserPen size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
            <span>Option 5</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
`,
    },
    {
      name: "share",
      component: (
        <div className="flex flex-col gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Share</Button>
            </PopoverTrigger>
            <PopoverContent className="w-72">
              <div className="flex flex-col gap-3 text-center">
                <div className="text-sm font-medium">Share code</div>
                <div className="flex flex-wrap justify-center gap-2">
                  <Button size="icon" variant="outline" aria-label="Embed">
                    <RiCodeFill size={16} strokeWidth={2} aria-hidden="true" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    aria-label="Share on Twitter"
                  >
                    <RiTwitterXFill
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    aria-label="Share on Facebook"
                  >
                    <RiFacebookFill
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    aria-label="Share via email"
                  >
                    <RiMailLine size={16} strokeWidth={2} aria-hidden="true" />
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <Input
                      ref={inputRef}
                      id="input-53"
                      className="pe-9"
                      type="text"
                      defaultValue="https://uitopia-psi.vercel.app/"
                      aria-label="Share link"
                      readOnly
                    />
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            onClick={handleCopy2}
                            className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg border border-transparent text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed"
                            aria-label={copied ? "Copied" : "Copy to clipboard"}
                            disabled={copied}
                          >
                            <div
                              className={cn(
                                "transition-all",
                                copied
                                  ? "scale-100 opacity-100"
                                  : "scale-0 opacity-0"
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
                                copied
                                  ? "scale-0 opacity-0"
                                  : "scale-100 opacity-100"
                              )}
                            >
                              <Copy
                                size={16}
                                strokeWidth={2}
                                aria-hidden="true"
                              />
                            </div>
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="px-2 py-1 text-xs">
                          Copy to clipboard
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      ),
      code: `// Dependencies: pnpm install lucide-react @remixicon/react

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { RiCodeFill, RiFacebookFill, RiMailLine, RiTwitterXFill } from "@remixicon/react";
import { Check, Copy } from "lucide-react";
import { useRef, useState } from "react";

export default function PopoverDemo() {
  const [copied, setCopied] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCopy2 = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Share</Button>
        </PopoverTrigger>
        <PopoverContent className="w-72">
          <div className="flex flex-col gap-3 text-center">
            <div className="text-sm font-medium">Share code</div>
            <div className="flex flex-wrap justify-center gap-2">
              <Button size="icon" variant="outline" aria-label="Embed">
                <RiCodeFill size={16} strokeWidth={2} aria-hidden="true" />
              </Button>
              <Button size="icon" variant="outline" aria-label="Share on Twitter">
                <RiTwitterXFill size={16} strokeWidth={2} aria-hidden="true" />
              </Button>
              <Button size="icon" variant="outline" aria-label="Share on Facebook">
                <RiFacebookFill size={16} strokeWidth={2} aria-hidden="true" />
              </Button>
              <Button size="icon" variant="outline" aria-label="Share via email">
                <RiMailLine size={16} strokeWidth={2} aria-hidden="true" />
              </Button>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Input
                  ref={inputRef}
                  id="input-53"
                  className="pe-9"
                  type="text"
                  defaultValue="https://originui.com/Avx8HD"
                  aria-label="Share link"
                  readOnly
                />
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={handleCopy2}
                        className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg border border-transparent text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed"
                        aria-label={copied ? "Copied" : "Copy to clipboard"}
                        disabled={copied}
                      >
                        <div
                          className={cn(
                            "transition-all",
                            copied ? "scale-100 opacity-100" : "scale-0 opacity-0",
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
                            copied ? "scale-0 opacity-0" : "scale-100 opacity-100",
                          )}
                        >
                          <Copy size={16} strokeWidth={2} aria-hidden="true" />
                        </div>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="px-2 py-1 text-xs">Copy to clipboard</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
`,
    },
  ];

  // Split button
  const buttonCodeSplit = `import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function ButtonDemo() {
  const [selectedOption, setSelectedOption] = useState<string>("Action");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const options = ["Active", "Inactive", "Pending"];

  return (
    <div className="relative inline-flex items-center">
      {/* Main button displaying the selected option */}
      <Button className="bg-black text-white">{selectedOption}</Button>

      {/* Chevron button to toggle the dropdown */}
      <Button
        size="icon"
        className="bg-black text-white"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <ChevronDown size={16} />
      </Button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className="absolute top-full mt-2 w-full bg-white shadow-md border rounded-md z-10">
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 text-black cursor-pointer hover:bg-gray-200"
              onClick={() => {
                setSelectedOption(option);
                setIsDropdownOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
`;
  const codeSplit = (
    <div className="relative inline-flex items-center">
      {/* Main button displaying the selected option */}
      <Button style={{ backgroundColor: bgColor, color: textColor }}>
        {selectedOption}
      </Button>

      {/* Chevron button to toggle the dropdown */}
      <Button
        size="icon"
        style={{ backgroundColor: bgColor, color: textColor }}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <ChevronDown size={16} />
      </Button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          className="absolute top-full mt-2 w-full bg-[${bgcolor}] shadow-md border rounded-md z-10"
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 text-black cursor-pointer hover:bg-gray-200"
              style={{ backgroundColor: bgColor, color: textColor }}
              onClick={() => {
                setSelectedOption(option);
                setIsDropdownOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
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

  const buttonuploadimage = `// Dependencies: pnpm install lucide-react

"use client";

import { Button } from "@/components/ui/button";
import { useImageUpload } from "@/hooks/use-image-upload";
import { CircleUserRound, X } from "lucide-react";
import Image from "next/image";

export default function ButtonDemo() {
  const {
    previewUrl,
    fileInputRef,
    handleThumbnailClick,
    handleFileChange,
    handleRemove,
    fileName,
  } = useImageUpload();

  return (
    <div>
      <div className="relative inline-flex">
        <Button
          variant="outline"
          className="relative size-16 overflow-hidden"
          onClick={handleThumbnailClick}
          aria-label={previewUrl ? "Change image" : "Upload image"}
        >
          {previewUrl ? (
            <Image
              className="h-full w-full object-cover"
              src={previewUrl}
              alt="Preview of uploaded image"
              width={40}
              height={40}
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div aria-hidden="true">
              <CircleUserRound className="opacity-60" size={16} strokeWidth={2} />
            </div>
          )}
        </Button>
        {previewUrl && (
          <Button
            onClick={handleRemove}
            size="icon"
            variant="destructive"
            className="absolute -right-2 -top-2 size-6 rounded-full border-2 border-background"
            aria-label="Remove image"
          >
            <X size={16} />
          </Button>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
          aria-label="Upload image file"
        />
      </div>
      {fileName && <p className="mt-2 text-xs text-muted-foreground">{fileName}</p>}
      <div className="sr-only" aria-live="polite" role="status">
        {previewUrl ? "Image uploaded and preview available" : "No image uploaded"}
      </div>
    </div>
  );
}
`;
  const codeuploadimage = (
    <div>
      <div className="relative inline-flex">
        <Button
          variant="outline"
          className="relative size-16 overflow-hidden"
          onClick={handleThumbnailClick}
          aria-label={previewUrl ? "Change image" : "Upload image"}
        >
          {previewUrl ? (
            <img
              className="h-full w-full object-cover"
              src={previewUrl}
              alt="Preview of uploaded image"
              width={40}
              height={40}
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div aria-hidden="true">
              <CircleUserRound
                className="opacity-60"
                size={16}
                strokeWidth={2}
              />
            </div>
          )}
        </Button>
        {previewUrl && (
          <Button
            onClick={handleRemove}
            size="icon"
            variant="destructive"
            className="absolute -right-2 -top-2 size-6 rounded-full border-2 border-background"
            aria-label="Remove image"
          >
            <X size={16} />
          </Button>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
          aria-label="Upload image file"
        />
      </div>
      {fileName && (
        <p className="mt-2 text-xs text-muted-foreground">{fileName}</p>
      )}
      <div className="sr-only" aria-live="polite" role="status">
        {previewUrl
          ? "Image uploaded and preview available"
          : "No image uploaded"}
      </div>
    </div>
  );

  const buttonemail = `// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export default function ButtonDemo() {
  return (
    <Button className="group" variant="secondary bg-[${bgColor}] text-[${textColor}]">
      <Mail className="-ms-1 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
      Email
      <ArrowRight
        className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
    </Button>
  );
}
`;
  const codeemail = (
    <Button
      className="group"
      variant="secondary"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <Mail
        className="-ms-1 me-2 opacity-60"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
      Email
      <ArrowRight
        className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
    </Button>
  );

  const buttongoback = `// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function ButtonDemo() {
  return (
    <Button variant="link" bg-[${bgColor}] text-[${textColor}]>
      <ChevronLeft className="me-1 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
      Go back
    </Button>
  );
}
`;
  const codegoback = (
    <Button
      variant="link"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <ChevronLeft
        className="me-1 opacity-60"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
      Go back
    </Button>
  );

  const buttonhamburger = `"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ButtonDemo() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Button
      className="group bg-[${bgColor}] text-[${textColor}]"
      variant="outline"
      size="icon"
      onClick={() => setOpen((prevState) => !prevState)}
      aria-expanded={open}
      aria-label={open ? "Close menu" : "Open menu"}
    >
      <svg
        className="pointer-events-none"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 12L20 12"
          className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
        />
        <path
          d="M4 12H20"
          className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
        />
        <path
          d="M4 12H20"
          className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
        />
      </svg>
    </Button>
  );
}
`;

  const codehamburger = (
    <Button
      style={{ backgroundColor: bgColor, color: textColor }}
      className="group"
      variant="outline"
      size="icon"
      onClick={() => setOpen((prevState) => !prevState)}
      aria-expanded={open}
      aria-label={open ? "Close menu" : "Open menu"}
    >
      <svg
        className="pointer-events-none"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 12L20 12"
          className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
        />
        <path
          d="M4 12H20"
          className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
        />
        <path
          d="M4 12H20"
          className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
        />
      </svg>
    </Button>
  );
  const buttonpreview = `// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";

export default function ButtonDemo() {
  return (
    <div className="inline-flex -space-x-px rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse">
      <Button
      
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10 bg-[${bgColor}] text-[${textColor}]"
        variant="outline"
      >
        Preview
      </Button>
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10 bg-[${bgColor}] text-[${textColor}]"
        variant="outline"
        size="icon"
        aria-label="Open link"
      >
        <SquareArrowOutUpRight size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
    </div>
  );
}
`;

  const codepreview = (
    <div className="inline-flex -space-x-px rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse">
      <Button
        style={{ backgroundColor: bgColor, color: textColor }}
        className={`rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10`}
        variant="outline"
      >
        Preview
      </Button>
      <Button
        style={{ backgroundColor: bgColor, color: textColor }}
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
        size="icon"
        aria-label="Open link"
      >
        <SquareArrowOutUpRight size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
    </div>
  );

  const buttoncopy = `// Dependencies: pnpm install @radix-ui/react-tooltip

"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function ButtonDemo() {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      // await navigator.clipboard.writeText("string to copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="disabled:opacity-100 bg-[${bgColor}] text-[${textColor}]"
            onClick={handleCopy}
            aria-label={copied ? "Copied" : "Copy to clipboard"}
            disabled={copied}
          >
            <div
              className={cn(
                "transition-all",
                copied ? "scale-100 opacity-100" : "scale-0 opacity-0",
              )}
            >
              <Check className="stroke-emerald-500" size={16} strokeWidth={2} aria-hidden="true" />
            </div>
            <div
              className={cn(
                "absolute transition-all",
                copied ? "scale-0 opacity-0" : "scale-100 opacity-100",
              )}
            >
              <Copy size={16} strokeWidth={2} aria-hidden="true" />
            </div>
          </Button>
        </TooltipTrigger>
        <TooltipContent className="px-2 py-1 text-xs">Click to copy</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
`;

  const codecopy = (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="disabled:opacity-100"
            onClick={handleCopy}
            aria-label={copied ? "Copied" : "Copy to clipboard"}
            disabled={copied}
            style={{ backgroundColor: bgColor, color: textColor }}
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
        <TooltipContent className="px-2 py-1 text-xs">
          Click to copy
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  const buttonlike = `// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";
import { ThumbsDown } from "lucide-react";

export default function ButtonDemo() {
  return (
  <div className="flex flex-row gap-4">
    <Button className="py-0 pe-0" variant="outline" style={{ backgroundColor: ${bgColor}, color: ${textColor} }}>
      <ThumbsUp className="opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
      Like
      <span className="relative ms-3 inline-flex h-full items-center justify-center rounded-full px-3 text-xs font-medium text-muted-foreground before:absolute before:inset-0 before:left-0 before:w-px before:bg-input style={{ backgroundColor: ${bgColor}, color: ${textColor} }}">
        86
      </span>
    </Button>
        <Button className="py-0 pe-0" variant="outline" style={{ backgroundColor: ${bgColor}, color: ${textColor} }}>
      <ThumbsDownIcon className="opacity-60" size={16} strokeWidth={2} aria-hidden="true" style={{ backgroundColor: ${bgColor}, color: ${textColor} }} />
      Dislike
      <span className="relative ms-3 inline-flex h-full items-center justify-center rounded-full px-3 text-xs font-medium text-muted-foreground before:absolute before:inset-0 before:left-0 before:w-px before:bg-input" >
        27
      </span>
    </Button>
    </div>
  );
}
`;

  const codelike = (
    <div className="flex flex-row gap-4">
      <Button
        className="py-0 pe-0"
        variant="outline"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <ThumbsUpIcon
          className="opacity-60"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        <span
          className="relative ms-3 inline-flex h-full items-center justify-center rounded-full px-3 text-xs font-medium text-muted-foreground before:absolute before:inset-0 before:left-0 before:w-px before:bg-input"
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          72
        </span>
      </Button>
      <Button
        className="py-0 pe-0"
        variant="outline"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <ThumbsDownIcon
          className="opacity-60"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        <span
          className="relative ms-3 inline-flex h-full items-center justify-center rounded-full px-3 text-xs font-medium text-muted-foreground before:absolute before:inset-0 before:left-0 before:w-px before:bg-input"
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          27
        </span>
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-8 px-4 sm:px-8">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-2 text-center mt-[8rem] sm:mt-32">
        <div className="text-3xl sm:text-4xl font-bold">Buttons</div>
        <p className="text-[hsl(var(--muted-foreground))] font-semibold whitespace-normal break-words max-w-md sm:max-w-lg">
          A growing collection of button components built with React TS and
          TailwindCSS.
        </p>
        <div className="flex flex-col w-[71rem] justify-between items-center md:flex-row gap-4">
          <div className="flex items-center gap-2 w-full justify-center md:justify-start">
            <label
              htmlFor="librarySelect"
              className="font-semibold text-gray-800 dark:text-gray-200"
            >
              Select Framework:
            </label>
            <select
              id="librarySelect"
              className="h-10 px-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900/70 text-gray-700 dark:text-gray-200 outline-none cursor-pointer transition focus:ring-2 focus:ring-blue-500 object-"
              onChange={(e) => setSelectedLibrary(e.target.value)}
              value={selectedLibrary}
            >
              <option value="React.js" className="dark:bg-gray-900">
                React.js
              </option>
              <option value="React.ts" className="dark:bg-gray-900">
                React.ts
              </option>
              <option value="Next.js" className="dark:bg-gray-900">
                Next.js
              </option>
              <option value="Next.ts" className="dark:bg-gray-900">
                Next.ts
              </option>
            </select>
          </div>
          <div className="flex items-center justify-center gap-5">
            <div className="flex items-center gap-3">
              {/* Label for Background Color */}
              <label className="font-semibold text-sm">Background Color:</label>

              {/* Background Color preview button */}
              <div
                className="w-14 h-10 rounded cursor-pointer border border-black dark:border-gray-300"
                style={{ backgroundColor: bgColor }}
                onClick={() => setBgPickerOpen(!isBgPickerOpen)}
              ></div>

              {/* Popover for the Background Color Picker */}
              {isBgPickerOpen && (
                <div
                  ref={bgPickerRef}
                  className="absolute mt-2 z-10 bg-white p-2 shadow-lg rounded"
                >
                  <HexColorPicker color={bgColor} onChange={setBgColor} />
                  <p className="mt-1 text-center text-xs">{bgColor}</p>
                </div>
              )}
            </div>
            <div className="flex items-center gap-3">
              {/* Label for Text Color */}
              <label className="font-semibold text-sm">Text Color:</label>

              {/* Text Color preview button */}
              <div
                className="w-14 h-10 rounded cursor-pointer border border-black dark:border-gray-300"
                style={{ backgroundColor: textColor }}
                onClick={() => setTextPickerOpen(!isTextPickerOpen)}
              ></div>

              {/* Popover for the Text Color Picker */}
              {isTextPickerOpen && (
                <div
                  ref={textPickerRef}
                  className="absolute mt-2 z-10 bg-white p-2 shadow-lg rounded"
                >
                  <HexColorPicker color={textColor} onChange={setTextColor} />
                  <p className="mt-1 text-center text-xs">{textColor}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Button Collection */}
      <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12 w-full">
        {" "}
        {buttonComponents.map((button, _index) => (
          <ButtonWithCopy code={button.code} coding={button.component} />
        ))}
        <ButtonWithCopy code={buttonCode5} coding={code5} />
        <ButtonWithCopy code={buttonCode6} coding={code6} />
        <ButtonWithCopy code={buttonCodeSplit} coding={codeSplit} />
        <ButtonWithCopy code={buttonCode7} coding={code7} />
        <ButtonWithCopy code={buttonuploadimage} coding={codeuploadimage} />
        <ButtonWithCopy code={buttonemail} coding={codeemail} />
        <ButtonWithCopy code={buttongoback} coding={codegoback} />
        <ButtonWithCopy code={buttonhamburger} coding={codehamburger} />
        <ButtonWithCopy code={buttoncopy} coding={codecopy} />
        <ButtonWithCopy code={buttonpreview} coding={codepreview} />
        <ButtonWithCopy code={buttonlike} coding={codelike} />
        {/* <Page /> */}
      </div>
    </div>
  );
}
