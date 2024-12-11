import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState, ReactNode } from "react";
import { MdInfo } from "react-icons/md";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { FaSearch, FaTimes } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
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

const ButtonWithCopy: React.FC<{ code: string; coding: ReactNode }> = ({
  code,
  coding,
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false); // Reset after 2 seconds
      }, 2000);
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

export default function Inputs() {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");
  const [date, setDate] = useState("");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const clearInput = () => {
    setQuery("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const inputcode1 = `<div className="space-y-2">
      <Label htmlFor="input-01">Simple input</Label>
      <Input id="input-01" placeholder="Email" type="email" />
    </div>`;
  const input1 = (
    <div className="space-y-2">
      <Label htmlFor="input-01">Simple input</Label>
      <Input id="input-01" placeholder="Email" type="email" />
    </div>
  );
  const inputcode2 = `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InputWithPrefix() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-16">Numerical Input</Label>
      <div className="flex rounded-lg shadow-sm shadow-black/5">
        <span className="-z-10 inline-flex items-center rounded-s-lg border border-input bg-background px-3 text-sm text-muted-foreground">
          $ 
        </span>
        <Input
          id="input-16"
          className="-me-px rounded-s-none shadow-none"
          placeholder="Amount"
          type="number"
        />
      </div>
    </div>
  );
}
`;
  const input2 = (
    <div className="space-y-2">
      <Label htmlFor="input-16">Numerical Input</Label>
      <div className="flex rounded-lg shadow-sm shadow-black/5">
        <span className="-z-10 inline-flex items-center rounded-s-lg border border-input bg-background px-3 text-sm text-muted-foreground">
          $
        </span>
        <Input
          id="input-16"
          className="-me-px rounded-s-none shadow-none w-36"
          placeholder="Amount"
          type="number"
        />
      </div>
    </div>
  );
  const inputcode3 = `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Eye, EyeOff } from "react-icons/fa";

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <Label htmlFor="input-17">Password Input with Toggle</Label>
      <div className="relative flex rounded-lg shadow-sm shadow-black/5">
        <Input
          id="input-17"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className="pr-12"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          {showPassword ? <EyeOff /> : <Eye />}
        </button>
      </div>
    </div>
  );
}

`;
  const input3 = (
    <div className="space-y-2">
      <Label htmlFor="input-17">Password Input with Toggle</Label>
      <div className="relative flex rounded-lg shadow-sm shadow-black/5">
        <Input
          id="input-17"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className="pr-12"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
    </div>
  );

  const inputcode4 = `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function InputWithCounter() {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="input-19">Input with Character Counter</Label>
      <div className="flex items-center rounded-lg shadow-sm shadow-black/5">
        <Input
          id="input-19"
          value={value}
          onChange={handleChange}
          placeholder="Type here"
          maxLength={100}
          type="text"
        />
        <span className="ml-2 text-sm text-muted-foreground">{value.length}/100</span>
      </div>
    </div>
  );
}

      
      `;
  const input4 = (
    <div className="space-y-2">
      <Label htmlFor="input-19">Input with Character Counter</Label>
      <div className="flex items-center rounded-lg shadow-sm shadow-black/5">
        <Input
          id="input-19"
          value={value}
          onChange={handleChange}
          placeholder="Type here"
          maxLength={100}
          type="text"
        />
        <span className="ml-2 text-sm text-muted-foreground">
          {value.length}/100
        </span>
      </div>
    </div>
  );

  const inputcode5 = `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

export default function SearchInput() {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const clearInput = () => {
    setQuery("");
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="input-20">Search Input with Clear Button</Label>
      <div className="relative flex rounded-lg shadow-sm shadow-black/5">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <FaSearch />
        </span>
        <Input
          id="input-20"
          value={query}
          onChange={handleChange}
          placeholder="Search..."
          className="pl-8"
        />
        {query && (
          <button
            type="button"
            onClick={clearInput}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <FaTimes />
          </button>
        )}
      </div>
    </div>
  );
}
 `;

  const input5 = (
    <div className="space-y-2">
      <Label htmlFor="input-20">Search Input with Clear Button</Label>
      <div className="relative flex rounded-lg shadow-sm shadow-black/5">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <FaSearch />
        </span>
        <Input
          id="input-20"
          value={query}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="pl-8"
        />
        {query && (
          <button
            type="button"
            onClick={clearInput}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <FaTimes />
          </button>
        )}
      </div>
    </div>
  );
  const inputcode6 = `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function DatePickerInput() {
  const [date, setDate] = useState("");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="input-21">Date Picker Input</Label>
      <Input
        id="input-21"
        type="date"
        value={date}
        onChange={handleDateChange}
      />
    </div>
  );
}
    `;
  const input6 = (
    <div className="space-y-2">
      <Label htmlFor="input-21">Date Picker Input</Label>
      <Input
        id="input-21"
        type="date"
        value={date}
        onChange={handleDateChange}
      />     
    </div>
  );
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-8 px-4 sm:px-8">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-2 text-center mt-[8rem] sm:mt-0">
        <div className="text-3xl sm:text-4xl font-bold">Input and Textarea</div>
        <p className="text-[hsl(var(--muted-foreground))] font-semibold whitespace-normal break-words max-w-md sm:max-w-lg">
          A growing collection of input and textarea components built with React
          TS and TailwindCSS.
        </p>
      </div>

      {/* Button Collection */}
      <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12 w-full">
        <ButtonWithCopy code={inputcode1} coding={input1} />
        <ButtonWithCopy code={inputcode2} coding={input2} />
        <ButtonWithCopy code={inputcode3} coding={input3} />
        <ButtonWithCopy code={inputcode4} coding={input4} />
        <ButtonWithCopy code={inputcode5} coding={input5} />
        <ButtonWithCopy code={inputcode6} coding={input6} />
      </div>
    </div>
  );
}
