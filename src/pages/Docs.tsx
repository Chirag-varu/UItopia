import { Button } from "@/components/ui/button";

export default function Docs() {

  const handleInstallation = () => {
    window.open(
      "https://ui.shadcn.com/docs/installation",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="flex items-center ">
      <div className="mt-16">
        <div className="bg-slate-50 h-screen w-96 flex flex-col border-r-4  text-center">
          <p className="text-xl font-bold ">Docs</p>
          <p className="hover:text-blue-500 cursor-pointer">Introduction</p>
          <p className="hover:text-blue-500 cursor-pointer" onClick={handleInstallation}>Installation</p>
          <p className="text-xl font-bold ">Components</p>
        </div>
      </div>
    </div>
  );
}
