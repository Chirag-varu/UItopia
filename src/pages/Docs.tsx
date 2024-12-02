import { useState } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import Alert from "@/components/documentation/Alert";
import Authentication from "@/components/documentation/Authentication";
import Button from "@/components/documentation/Button";
import CheckboxRadioSwitch from "@/components/documentation/CheckboxRadioSwitch";
import Contribution from "@/components/documentation/Contribution";
import Dialog from "@/components/documentation/Dialog";
import Discord from "@/components/documentation/Discord";
import GitHub from "@/components/documentation/GitHub";
import Input from "@/components/documentation/Input";
import Installation from "@/components/documentation/Installation";
import Introduction from "@/components/documentation/Introduction";
import Select from "@/components/documentation/Select";
import Slider from "@/components/documentation/Slider";
import Twitter from "@/components/documentation/Twitter";
import { Separator } from "@/components/ui/Separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/Sidebar";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";

export default function Docs() {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b">
            <div className="flex items-center gap-2 px-3">
              <SidebarTrigger className="md:hidden block" />
              <Separator orientation="vertical" className="mr-2 h-4" />
            </div>
          </header>
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Introduction />} />
              <Route path="/installation" element={<Installation />} />
              <Route path="/contribution" element={<Contribution />} />
              <Route path="/components/button" element={<Button />} />
              <Route path="/components/input-textarea" element={<Input />} />
              <Route
                path="/components/checkbox-radio-switch"
                element={<CheckboxRadioSwitch />}
              />
              <Route path="/components/select" element={<Select />} />
              <Route path="/components/slider" element={<Slider />} />
              <Route
                path="/components/alert-notification-banner"
                element={<Alert />}
              />
              <Route path="/components/dialog" element={<Dialog />} />
              <Route
                path="/components/authentication"
                element={<Authentication />}
              />
              <Route path="/discord" element={<Discord />} />
              <Route path="/github" element={<GitHub />} />
              <Route path="/twitter" element={<Twitter />} />
            </Routes>
          </div>
        </SidebarInset>

        {/* Hamburger Button */}
        <button
          className="fixed bottom-5 right-5 p-3 bg-black dark:bg-white text-white dark:text-black rounded-full md:hidden"
          aria-label="Open Sidebar"
          onClick={toggleMobileSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Sidebar */}
        {isMobileSidebarOpen && (
          <div
            className={`fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 z-50 p-4 shadow-lg rounded-t-xl transition-transform transform ${
              isMobileSidebarOpen ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                onClick={toggleMobileSidebar}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              <a
                href="/docs"
                className="text-gray-700 dark:text-gray-300 hover:underline"
              >
                Introduction
              </a>
              <a
                href="/docs/installation"
                className="text-gray-700 dark:text-gray-300 hover:underline"
              >
                Installation
              </a>
              <a
                href="/docs/contribution"
                className="text-gray-700 dark:text-gray-300 hover:underline"
              >
                Contribution
              </a>
            </nav>
          </div>
        )}
      </SidebarProvider>
    </motion.div>
  );
}
