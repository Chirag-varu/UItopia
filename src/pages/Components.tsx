import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Components() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-40">
        <h1 className="text-3xl mb-4 text-[hsl(var(--muted-foreground))]">Components</h1>
        
        <div className="flex flex-col gap-4 w-80">
          {[ 
            { path: "/button", name: "Button" },
            { path: "/inputs", name: "Input and Textarea" },
            { path: "/checks-radios-switches", name: "Checkbox, Radio, and Switch" },
            { path: "/selects", name: "Select" },
            { path: "/sliders", name: "Slider" },
            { path: "/alerts-notifications-banners", name: "Alert, Notification, and Banner" },
            { path: "/dialogs", name: "Dialog" },
          ].map((link) => (
            <NavLink key={link.path} to={`/components${link.path}`}>
              <Button variant="outline" className="flex justify-between text-md w-[25rem] h-12 p-4">
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
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
