import { useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { MdInfo } from "react-icons/md";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";

// Component for rendering button code with copy and detail options
export const ButtonWithCopy: React.FC<{ code: string; coding: ReactNode }> = ({
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
              className="disabled:opacity-100 absolute top-0 right-0 md:opacity-0 opacity-100 group-hover:opacity-100 px-4 z-40 mr-2 rounded-md text-sm transition-opacity duration-300 "
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
