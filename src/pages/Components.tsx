import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Components() {
  const links = [
    { path: "/button", name: "Button" },
    { path: "/inputs", name: "Input and Textarea" },
    { path: "/checks-radios-switches", name: "Checkbox, Radio, and Switch" },
    { path: "/selects", name: "Select" },
    { path: "/sliders", name: "Slider" },
    { path: "/alerts-notifications-banners", name: "Alert, Notification, and Banner" },
    { path: "/dialogs", name: "Dialog" },
    { path: "/Accordion", name: "Accordion" },
    { path: "/Tooltip", name: "Tooltip" },
    { path: "/Dropdown-Popover", name: "Dropdown and Popover" },
    { path: "/Avatar-Badge-Chip", name: "Avatar, Badge, and Chip" },
    { path: "/Tab", name: "Tab" },
    { path: "/Breadcrumb-Pagination", name: "Breadcrumb and Pagination" },
    { path: "/Layouts", name: "Layouts" },
    { path: "/Navigation-menus", name: "Navigation menus" },
    { path: "/Tables", name: "Tables" },
    { path: "/Cards", name: "Cards" },
    { path: "/Loaders", name: "Loader" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="mt-24 mb-24">
          <h1 className="text-5xl mb-10 text-center underline text-[hsl(var(--muted-foreground))]">
            Components
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {links.map((link) => (
              <NavLink key={link.path} to={`/components${link.path}`}>
                <Button
                  variant="outline"
                  className="flex justify-between items-center text-lg w-full h-14 p-5"
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
