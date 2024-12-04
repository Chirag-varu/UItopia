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
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useRef } from "react";

const ButtonWithCopy: React.FC<{ code: string; coding: ReactNode }> = ({
  code,
  coding,
}) => {
  const [copied, setCopied] = useState(false);
  const [checked, _] = useState<boolean | "indeterminate">(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checked === true && inputRef.current) {
      inputRef.current.focus();
    }
  }, [checked]);

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

export default function ChecksRadiosSwitches() {
  const [checked, setChecked] = useState<boolean | "indeterminate">(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checked === true && inputRef.current) {
      inputRef.current.focus();
    }
  }, [checked]);

  const buttonCode1 = `"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useRef, useState } from "react";

export default function CheckboxDemo() {
  const [checked, setChecked] = useState<boolean | "indeterminate">(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checked === true && inputRef.current) {
      inputRef.current.focus();
    }
  }, [checked]);

  return (
    <div>
      <div className="flex items-start gap-2">
        <Checkbox
          id="checkbox-11"
          checked={checked}
          onCheckedChange={setChecked}
          aria-controls="checkbox-input-11"
        />
        <div className="grow">
          <div className="grid gap-2">
            <Label htmlFor="checkbox-11">Checkbox with expansion</Label>
            <p id="checkbox-11-description" className="text-xs text-muted-foreground">
              You can use this checkbox with a label and a description.
            </p>
          </div>
          {/* Expandable field */}
          <div
            role="region"
            id="checkbox-input-11"
            aria-labelledby="checkbox-11"
            className="grid transition-all ease-in-out data-[state=collapsed]:grid-rows-[0fr] data-[state=expanded]:grid-rows-[1fr] data-[state=collapsed]:opacity-0 data-[state=expanded]:opacity-100"
            data-state={checked ? "expanded" : "collapsed"}
          >
            <div className="pointer-events-none -m-2 overflow-hidden p-2">
              <div className="pointer-events-auto mt-3">
                <Input
                  ref={inputRef}
                  type="text"
                  id="checkbox-11-additional-info"
                  placeholder="Enter details"
                  aria-label="Additional Information"
                  disabled={!checked}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`;
  const code1 = <div>
  <div className="flex items-start gap-2">
    <Checkbox
      id="checkbox-11"
      checked={checked}
      onCheckedChange={setChecked}
      aria-controls="checkbox-input-11"
    />
    <div className="grow">
      <div className="grid gap-2">
        <Label htmlFor="checkbox-11">Checkbox with expansion</Label>
        <p id="checkbox-11-description" className="text-xs text-muted-foreground">
          You can use this checkbox with a label and a description.
        </p>
      </div>
      {/* Expandable field */}
      <div
        role="region"
        id="checkbox-input-11"
        aria-labelledby="checkbox-11"
        className="grid transition-all ease-in-out data-[state=collapsed]:grid-rows-[0fr] data-[state=expanded]:grid-rows-[1fr] data-[state=collapsed]:opacity-0 data-[state=expanded]:opacity-100"
        data-state={checked ? "expanded" : "collapsed"}
      >
        <div className="pointer-events-none -m-2 overflow-hidden p-2">
          <div className="pointer-events-auto mt-3">
            <Input
              ref={inputRef}
              type="text"
              id="checkbox-11-additional-info"
              placeholder="Enter details"
              aria-label="Additional Information"
              disabled={!checked}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;

  const buttonCode2 = `import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return <Button className="rounded-full">Button</Button>;
}`;
  const code2 = <Button className="rounded-full">Button</Button>;

  const buttonCode3 = `// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function ButtonDemo() {
  return (
    <Button variant="secondary">
      <X className="-ms-1 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
      Button
    </Button>
  );
}
`;
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

  const buttonCode4 = `// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ButtonDemo() {
  return (
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
}
`;
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

  const buttonCode5 = `// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { QrCode } from "lucide-react";

export default function ButtonDemo() {
  return (
    <div className="inline-flex -space-x-px divide-x divide-primary-foreground/30 rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        size="icon"
        aria-label="QR code"
      >
        <QrCode size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
      <Button className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10">
        Sign in
      </Button>
    </div>
  );
}
`;
  const code5 = (
    <>
      <div className="inline-flex -space-x-px divide-x divide-primary-foreground/30 rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse">
        <Button
          className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
          size="icon"
          aria-label="QR code"
        >
          <QrCode size={16} strokeWidth={2} aria-hidden="true" />
        </Button>
        <Button className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10">
          Sign in
        </Button>
      </div>
    </>
  );

  const buttonCode6 = `// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ButtonDemo() {
  return (
    <Button className="group">
      Button
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
  const code6 = (
    <Button className="group">
      Button
      <ArrowRight
        className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
    </Button>
  );

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-8 px-4 sm:px-8">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-2 text-center mt-[8rem] sm:mt-0">
        <div className="text-3xl sm:text-4xl font-bold">Checkbox, Radio, and Switch</div>
        <p className="text-[hsl(var(--muted-foreground))] font-semibold whitespace-normal break-words max-w-md sm:max-w-lg">
          A growing collection of checkbox, radio and switch components built with React TS and
          TailwindCSS.
        </p>
      </div>

      {/* Button Collection */}
      <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12 w-full">
        <ButtonWithCopy code={buttonCode1} coding={code1} />
        <ButtonWithCopy code={buttonCode2} coding={code2} />
        <ButtonWithCopy code={buttonCode3} coding={code3} />
        <ButtonWithCopy code={buttonCode4} coding={code4} />
        <ButtonWithCopy code={buttonCode5} coding={code5} />
        <ButtonWithCopy code={buttonCode6} coding={code6} />
      </div>
    </div>
  );
}
