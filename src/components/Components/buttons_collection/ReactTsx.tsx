"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
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
import { Mail } from "lucide-react";

const [bgColor, _setBgColor] = useState("#d4d4d4");
const [textColor, _setTextColor] = useState("#000000");
const [copied, setCopied] = useState(false);
const [isExpanded, setIsExpanded] = useState(false);
const [searchQuery, setSearchQuery] = useState("");
const [isActive, setIsActive] = useState(false);
const [isExpanded7, setIsExpanded7] = useState<boolean>(false);
const [selectedOption, setSelectedOption] = useState<string>("Action");
const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
const [open, setOpen] = useState<boolean>(false);

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
// const {
//   previewUrl,
//   fileInputRef,
//   handleThumbnailClick,
//   handleFileChange,
//   handleRemove,
//   fileName,
// } = useImageUpload();

export const codeforreactsx = [
  {
    name: "buttonloading",
    fullcode: `// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
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
}
`,
    code: (
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
  },
  {
    name: "buttonsaveandcancel",
    fullcode: `import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <div className="inline-flex items-center gap-2">
      <Button variant="ghost">Cancel</Button>
      <Button>Save</Button>
    </div>
  );
}
`,
    code: (
      <div className="inline-flex items-center gap-2">
        <Button variant="ghost">Cancel</Button>
        <Button style={{ backgroundColor: bgColor, color: textColor }}>
          Save
        </Button>
      </div>
    ),
  },
  {
    name: "buttonCodeToggle",
    fullcode: `import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <Button
      onClick={() => setIsActive(!isActive)}
      className={isActive ? "bg-[${bgColor}] text-[${textColor}]" : "bg-gray-300 text-gray-700"}
    >
      {isActive ? "Active" : "Inactive"}
    </Button>
  );
}`,
    code: (
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
  },
  {
    name: "buttonCodeGradient",
    fullcode: `import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return <Button className="bg-gradient-to-r from-[${bgColor}] to-[#FFD700] text-[${textColor}] shadow-lg hover:shadow-xl transition-shadow">Button</Button>;
}`,
    code: (
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
  },
  {
    name: "buttonCode1",
    fullcode: `import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return <Button className="bg-[${bgColor}] text-[${textColor}]">Button</Button>;
}`,
    code: (
      <Button style={{ backgroundColor: bgColor, color: textColor }}>
        Button
      </Button>
    ),
  },
  {
    name: "buttonCode2",
    fullcode: `import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return <Button className="bg-[${bgColor}] text-[${textColor}] rounded-full">Button</Button>;
}`,
    code: (
      <Button
        className="rounded-full"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        Button
      </Button>
    ),
  },
  {
    name: "buttonCode3",
    fullcode: `import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function ButtonDemo() {
  return (
    <Button variant="secondary">
      <X className="-ms-1 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
      Button
    </Button>
  );
}`,
    code: (
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
  },
  {
    name: "buttonCode4",
    fullcode: `import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ButtonDemo() {
  return (
    <Button className="group" variant="ghost">
      <ArrowLeft className="-ms-1 me-2 opacity-60 transition-transform group-hover:-translate-x-0.5" />
      Button
    </Button>
  );
}`,
    code: (
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
  },
  {
    name: "buttonCode5",
    fullcode: `import { Button } from "@/components/ui/button";
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
}`,
    code: (
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
    ),
  },
  {
    name: "buttonCode6",
    fullcode: `import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ButtonDemo() {
  return (
    <Button className="group bg-[${bgColor}] text-[${textColor}]">
      Button
      <ArrowRight className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5" />
    </Button>
  );
}`,
    code: (
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
    ),
  },
  {
    name: "buttonCode7",
    fullcode: `// Dependencies: pnpm install lucide-react

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
`,
    code: (
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
    ),
  },
  {
    name: "buttonuploadimage",
    fullcode: `// Dependencies: pnpm install lucide-react

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
`,
    code: (
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
  },
  {
    name: "codeuploadimage",
    fullcode: `
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
      {fileName && <p className="mt-2 text-xs text-muted-foreground">{fileName}</p>}
      <div className="sr-only" aria-live="polite" role="status">
        {previewUrl ? "Image uploaded and preview available" : "No image uploaded"}
      </div>
    </div>
  `,
    code: (
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
  },
  {
    name: "buttonCodeSplit",
    fullcode: `import React, { useState } from "react";
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
`,
    code: (
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
    ),
  },
  {
    name: "ExpandableSearchBar",
    fullcode: `import { useState } from "react";
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
`,
    code: (
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
  },
  {
    name: "buttonuploadimage",
    fullcode: `// Dependencies: pnpm install lucide-react

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
`,
    code: (
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
  },
  {
    name: "codeuploadimage",
    fullcode: `
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
      {fileName && <p className="mt-2 text-xs text-muted-foreground">{fileName}</p>}
      <div className="sr-only" aria-live="polite" role="status">
        {previewUrl ? "Image uploaded and preview available" : "No image uploaded"}
      </div>
    </div>
  `,
    code: (
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
  },
  {
    name: "buttonCodeOutline",
    fullcode: `import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return <Button className="border border-[${bgColor}] text-[${textColor}] hover:bg-[${bgColor}] hover:text-white transition-all">Button</Button>;
}`,
    code: (
      <Button className="border border-[${bgColor}] text-[${textColor}] hover:bg-[${bgColor}] hover:text-white transition-all">
        Button
      </Button>
    ),
  },
  {
    name: "buttonemail",
    fullcode: `// Dependencies: pnpm install lucide-react

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
`,
    code: (
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
    ),
  },
  {
    name: "buttongoback",
    fullcode: `// Dependencies: pnpm install lucide-react

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
`,
    code: (
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
    ),
  },
  {
    name: "buttonhamburger",
    fullcode: `"use client";

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
  `,
    code: (
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
    ),
  },
  {
    name: "buttonpreview",
    fullcode: `// Dependencies: pnpm install lucide-react

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
  `,
    code: (
      <div className="inline-flex -space-x-px rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse">
        <Button
          style={{ backgroundColor: bgColor, color: textColor }}
          className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
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
    ),
  },
  {
    name: "buttonpreview",
    fullcode: `// Dependencies: pnpm install lucide-react

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
  `,
    code: (
      <div className="inline-flex -space-x-px rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse">
        <Button
          style={{ backgroundColor: bgColor, color: textColor }}
          className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
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
    ),
  },
  {
    name: "buttoncopy",
    fullcode: `// Dependencies: pnpm install @radix-ui/react-tooltip

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
                  copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
                )}
              >
                <Check className="stroke-emerald-500" size={16} strokeWidth={2} aria-hidden="true" />
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
          <TooltipContent className="px-2 py-1 text-xs">Click to copy</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
  `,
    code: (
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
    ),
  },
  {
    name: "buttonlike",
    fullcode: `// Dependencies: pnpm install lucide-react

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
`,
    code: (
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
    ),
  },
];