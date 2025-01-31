import { useEffect, useState } from "react";
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
import { MdInfo } from "react-icons/md";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
// import ReactDOMServer from "react-dom/server";
import LibrarySelector from "@/components/_components/LibrarySelector";

const inputFiles = [
  "input-01",
  "input-02",
  "input-03",
  "input-04",
  "input-05",
  "input-06",
  "input-07",
  "input-08",
  "input-09",
  "input-10",
  "input-11",
  "input-12",
  "input-13",
  "input-14",
  "input-15",
  "input-16",
  "input-17",
  "input-18",
  "input-19",
  "input-20",
  "input-21",
  "input-22",
  "input-23",
  "input-24",
  "input-25",
  "input-26",
  "input-27",
  "input-28",
  "input-29",
  "input-30",
  "input-31",
  "input-32",
  "input-33",
  "input-34",
  "input-35",
  "input-36",
  "input-37",
  "input-38",
  "input-39",
  "input-40",
  "input-41",
  "input-42",
  "input-43",
  "input-44",
  "input-45",
  "input-46",
  "input-47",
  "input-48",
  "input-49",
  "input-50",
  "input-51",
  "input-52",
  "input-53",
  "input-54",
  "input-55",
  "input-56",
  "input-57",
  "textarea-01",
  "textarea-02",
  "textarea-03",
  "textarea-04",
  "textarea-05",
  "textarea-06",
  "textarea-07",
  "textarea-08",
  "textarea-09",
  "textarea-10",
  "textarea-11",
  "textarea-12",
  "textarea-13",
  "textarea-14",
  "textarea-15",
  "textarea-16",
  "textarea-17",
  "textarea-18",
  "textarea-19",
];

export default function Select() {
  const [copied, setCopied] = useState<string | null>(null);
  const [components, setComponents] = useState<any[]>([]);

  useEffect(() => {
    const loadComponents = async () => {
      const importedComponents = await Promise.all(
        inputFiles.map(async (fileName) => {
          const sourceCode = await import(
            `../../../components/inputs/${fileName}.tsx?raw`
          ).then((module) => module.default);

          const Component = (await import(`../../../components/inputs/${fileName}.tsx`)).default;
          return { id: fileName, Component, code: sourceCode };
        })
      );
      setComponents(importedComponents);
    };

    loadComponents();
  }, []);

  // Handles copying code to clipboard
  const handleCopy = (code: string) => {
    if (code) {
      navigator.clipboard.writeText(code).then(() => {
        setCopied(code);
        setTimeout(() => setCopied(null), 2000);
      });
    }
  };

  return (
    <div className="w-full px-4 py-8">
      <div className="max-w-7xl mx-auto mt-28">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800 dark:text-gray-100">
          Inputs Components
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          A beautiful collection of 57 inputs and 19 textarea components built with using Shadcn
          UI and TailwindCSS.
        </p>
        <div className="flex flex-col w-full justify-center items-center md:flex-row gap-4 mb-7">
          <LibrarySelector />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {components.map(({ id, Component, code }) => (
            <div
              key={id}
              className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-200"
            >
              <div className="group flex flex-col items-center justify-center p-4 relative w-full text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center h-20 mb-4">
                  <Component />
                </div>
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
                          Button Details
                        </DialogTitle>
                        <DialogDescription asChild>
                          <div className="p-6 flex items-center justify-center">
                            <p>Details about {id}</p>
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
                        onClick={() => handleCopy(code)}
                        aria-label={
                          copied === code ? "Copied" : "Copy to clipboard"
                        }
                        disabled={copied === code}
                      >
                        <div
                          className={cn(
                            "transition-all",
                            copied === code
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
                            copied === code
                              ? "scale-0 opacity-0"
                              : "scale-100 opacity-100"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
