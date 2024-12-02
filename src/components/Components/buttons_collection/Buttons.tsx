import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";

const ButtonWithCopy: React.FC<{ code: string }> = ({ code }) => {
  const [_, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false); // Reset after 2 seconds
      }, 2000);
    });
  };

  return (
    <div className="group flex flex-col items-center justify-center p-4 relative w-72 h-32 pl-8 pr-8 pt-12 pb-12 text-center border-b-2 border-r-2 border-gray-500">
      <Button className="mb-4">Button</Button>
      <button
        onClick={handleCopy}
        className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 py-2 px-4 bg-green-500 text-white hover:bg-green-600 rounded-md text-sm transition-opacity duration-300 mr-2"
      >
        <MdContentCopy />
      </button>
    </div>
  );
};

export default function Buttons() {
  // JSX code for the Button component
  const buttonCode1 = `import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return <Button>Button</Button>;
}`;

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <ButtonWithCopy code={buttonCode1} />
    </div>
  );
}




