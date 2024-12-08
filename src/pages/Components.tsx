import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Components() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="mt-32 mb-24">
          <h1 className="text-5xl mb-6 text-[hsl(var(--muted-foreground))]">
            Components
          </h1>

          <div className="flex flex-1 flex-col gap-6 w-full max-w-3xl">
            {[
              { path: "/button", name: "Button" },
              { path: "/inputs", name: "Input and Textarea" },
              {
                path: "/checks-radios-switches",
                name: "Checkbox, Radio, and Switch",
              },
              { path: "/selects", name: "Select" },
              { path: "/sliders", name: "Slider" },
              {
                path: "/alerts-notifications-banners",
                name: "Alert, Notification, and Banner",
              },
              { path: "/dialogs", name: "Dialog" },
              { path: "/Accordion", name: "Accordion" },
              { path: "/Tooltip", name: "Tooltip" },
            ].map((link) => (
              <NavLink key={link.path} to={`/components${link.path}`}>
                <Button
                  variant="outline"
                  className="flex justify-between text-lg w-full sm:w-[30rem] h-14 p-5"
                >
                  {link.name}
                  <span className="-me-1 ms-3 inline-flex h-6 max-h-full items-center rounded border border-border px-2 font-[inherit] text-[0.75rem] font-medium text-muted-foreground">
                    <ChevronRight
                      className="opacity-60 transition-transform group-hover:translate-x-0.5"
                      size={18}
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
    </motion.div>
  );
}
