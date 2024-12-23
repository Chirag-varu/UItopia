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
import ReactDOMServer from "react-dom/server";

const checkboxFiles = [
  "checkbox-01",
  "checkbox-02",
  "checkbox-03",
  "checkbox-04",
  "checkbox-05",
  "checkbox-06",
  "checkbox-07",
  "checkbox-08",
  "checkbox-09",
  "checkbox-10",
  "checkbox-11",
  "checkbox-12",
  "checkbox-13",
  "checkbox-14",
  "checkbox-15",
  "checkbox-16",
  // "checkbox-17",
  "checkbox-18",
];

export default function Checkbox() {
  const [copied, setCopied] = useState<string | null>(null);
  const [components, setComponents] = useState<any[]>([]);

  useEffect(() => {
    const loadComponents = async () => {
      const importedComponents = await Promise.all(
        checkboxFiles.map(async (fileName) => {
          const Component = (
            await import(`../../../components/checkboxs/${fileName}.tsx`)
          ).default;
          return { id: fileName, Component, code: `<${fileName} />` }; // Example code string
        })
      );
      setComponents(importedComponents);
    };

    loadComponents();
  }, []);

  // Handles copying code to clipboard
  const handleCopy = (code: React.ReactNode) => {
    navigator.clipboard
      .writeText(ReactDOMServer.renderToStaticMarkup(code))
      .then(() => {
        setCopied(ReactDOMServer.renderToStaticMarkup(code));
        setTimeout(() => setCopied(null), 2000);
      });
  };

  return (
    <div className="w-full px-4 py-8">
      <div className="max-w-7xl mx-auto mt-28">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800 dark:text-gray-100">
          Checkbox Components
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          A beautiful collection of 17 checkbox components built with using
          Shadcn UI and TailwindCSS.!
        </p>
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
                        onClick={() => handleCopy(<Component />)}
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
