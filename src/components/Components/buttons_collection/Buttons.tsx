import { Button } from "@/components/ui/button";
import { useState, ReactNode } from "react";
import { X } from "lucide-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { QrCode } from "lucide-react";
import { MdContentCopy } from "react-icons/md";

const ButtonWithCopy: React.FC<{ code: string; coding: ReactNode }> = ({
  code,
  coding,
}) => {
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
    <div className="group flex flex-col items-center justify-center p-4 relative w-full h-32 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
      <div>{coding}</div>
      <button
        onClick={handleCopy}
        className="absolute top-0 right-0 md:opacity-0 opacity-100 group-hover:opacity-100 py-2 px-4 md:bg-green-500 bg-black text-white hover:bg-green-600 rounded-md text-sm transition-opacity duration-300 mr-2"
      >
        <MdContentCopy />
      </button>
    </div>
  );
};

export default function Buttons() {
  const buttonCode1 = `import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return <Button>Button</Button>;
}`;
  const code1 = <Button>Button</Button>;

  const buttonCode2 = `import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return <Button className="rounded-full">Button</Button>;
}`;
  const code2 = <Button className="rounded-full">Button</Button>;

  const buttonCode3 = `// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function ButtonDemo() {
  return (
    <Button variant="secondary">
      <X className="-ms-1 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
      Button
    </Button>
  );
}
`;
  const code3 = (
    <Button variant="secondary">
      <X
        className="-ms-1 me-2 opacity-60"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
      Button
    </Button>
  );

  const buttonCode4 = `// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ButtonDemo() {
  return (
    <Button className="group" variant="ghost">
      <ArrowLeft
        className="-ms-1 me-2 opacity-60 transition-transform group-hover:-translate-x-0.5"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
      Button
    </Button>
  );
}
`;
  const code4 = (
    <Button className="group" variant="ghost">
      <ArrowLeft
        className="-ms-1 me-2 opacity-60 transition-transform group-hover:-translate-x-0.5"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
      Button
    </Button>
  );

  const buttonCode5 = `// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { QrCode } from "lucide-react";

export default function ButtonDemo() {
  return (
    <div className="inline-flex -space-x-px divide-x divide-primary-foreground/30 rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        size="icon"
        aria-label="QR code"
      >
        <QrCode size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
      <Button className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10">
        Sign in
      </Button>
    </div>
  );
}
`;
  const code5 = (
    <>
      <div className="inline-flex -space-x-px divide-x divide-primary-foreground/30 rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse">
        <Button
          className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
          size="icon"
          aria-label="QR code"
        >
          <QrCode size={16} strokeWidth={2} aria-hidden="true" />
        </Button>
        <Button className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10">
          Sign in
        </Button>
      </div>
    </>
  );

  const buttonCode6 = `// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ButtonDemo() {
  return (
    <Button className="group">
      Button
      <ArrowRight
        className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
    </Button>
  );
}
`;
  const code6 = (
    <Button className="group">
      Button
      <ArrowRight
        className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
    </Button>
  );

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-8 px-4 sm:px-8">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-2 text-center mt-[8rem] sm:mt-0">
        <div className="text-3xl sm:text-4xl font-bold">Button</div>
        <p className="text-[hsl(var(--muted-foreground))] font-semibold whitespace-normal break-words max-w-md sm:max-w-lg">
          A growing collection of button components built with React JS/TS,
          Next.js, and TailwindCSS.
        </p>
      </div>

      {/* Button Collection */}
      <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12 w-full">
        <ButtonWithCopy code={buttonCode1} coding={code1} />
        <ButtonWithCopy code={buttonCode2} coding={code2} />
        <ButtonWithCopy code={buttonCode3} coding={code3} />
        <ButtonWithCopy code={buttonCode4} coding={code4} />
        <ButtonWithCopy code={buttonCode5} coding={code5} />
        <ButtonWithCopy code={buttonCode6} coding={code6} />
      </div>
    </div>
  );
}
