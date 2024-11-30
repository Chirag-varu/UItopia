import { AppSidebar } from "@/components/AppSidebar";
import Contribution from "@/components/documentation/Contribution";
import Installation from "@/components/documentation/Installation";
import Introduction from "@/components/documentation/Introduction";
import { Separator } from "@/components/ui/Separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/Sidebar";
import { Route, Routes } from "react-router-dom";

export default function Docs() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
        </header>
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/contribution" element={<Contribution />} />
          </Routes>
        </div>
        {/* <div className="">
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div> */}
      </SidebarInset>
      <button
        className="fixed bottom-5 right-5 p-3 bg-black dark:bg-white text-white dark:text-black rounded-full md:hidden"
        aria-label="Open Sidebar"
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
    </SidebarProvider>
  );
}
