import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Components() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-40">
        <h1 className="text-lg mb-4 ">Components</h1>
        <div className="flex flex-col gap-4 w-80">
        {[
            { path: "/buttons", name: "Button" },
            { path: "/inputs", name: "Input and Textarea" },
            { path: "/checks-radios-switches", name: "Checkbox, Radio, and Switch" },
            { path: "/selects", name: "Select" },
            { path: "/sliders", name: "Slider" },
            { path: "/alerts-notifications-banners", name: "Alert, Notification, and Banner" },
            { path: "/dialogs", name: "Dialog" },
          ].map((link) => (
            <Button variant="outline" className="flex justify-between">
            {link.name}
            <span className="-me-1 ms-3 inline-flex h-5 max-h-full items-center rounded border border-border px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground">
              <ChevronRight
                className="opacity-60 transition-transform group-hover:translate-x-0.5"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </span>
          </Button>
          
        ))}

        </div>
      </div>
    </div>
  );
}
