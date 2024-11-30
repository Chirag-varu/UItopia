import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomOneLight,
  atomOneDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Installation = () => {
  return (
    <div className="container md:mx-auto p-4 md:w-4/5 md:text-justify">
      <header className="mb-6">
        <h1 className="text-4xl font-bold mb-2">Installation</h1>
      </header>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-3">
          Getting Started with UI-Topia
        </h2>
        <p className="text-lg">
          Setting up UI-Topia is quick and straightforward. Our components are
          designed to integrate effortlessly into your project, whether you're
          using React, Vite, or Next.js. However, before using UI-Topia's
          components, please ensure that you follow the installation guide
          provided by{" "}
          <a
            href="https://ui.shadcn.com/docs/installation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline inline-flex items-center"
          >
            ShadCN
            <svg
              aria-hidden="true"
              fill="none"
              focusable="false"
              height="1em"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="1em"
              className="mx-1"
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
              <path d="M15 3h6v6"></path>
              <path d="M10 14L21 3"></path>
            </svg>
          </a>
          . Once your setup is ready, you can copy and paste UI-Topia's
          components from our{" "}
          <Link
            to="/components"
            className="text-blue-500 hover:underline inline-flex items-center"
          >
            Components Library
            <svg
              aria-hidden="true"
              fill="none"
              focusable="false"
              height="1em"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="1em"
              className="mx-1"
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
              <path d="M15 3h6v6"></path>
              <path d="M10 14L21 3"></path>
            </svg>
          </Link>{" "}
          and customize them as needed.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-3">Installation Options</h2>
        <ul className="list-disc list-inside space-y-4 text-lg">
          <li>
            <strong>Manual Installation (React):</strong> For custom setups, use
            ShadCN's{" "}
            <a
              href="https://ui.shadcn.com/docs/installation/manual"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline inline-flex items-center"
            >
              Manual Installation Guide
              <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="1em"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="1em"
                className="mx-1"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                <path d="M15 3h6v6"></path>
                <path d="M10 14L21 3"></path>
              </svg>
            </a>
            . This method gives you full control over the configuration.
          </li>
          <li>
            <strong>Vite + React:</strong> If you're using Vite, ShadCN's{" "}
            <a
              href="https://ui.shadcn.com/docs/installation/vite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline inline-flex items-center"
            >
              Vite Setup Guide
              <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="1em"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="1em"
                className="mx-1"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                <path d="M15 3h6v6"></path>
                <path d="M10 14L21 3"></path>
              </svg>
            </a>{" "}
            provides optimized steps to integrate UI-Topia components
            efficiently.
          </li>
          <li>
            <strong>Next.js:</strong> For Next.js projects, follow ShadCN's{" "}
            <a
              href="https://ui.shadcn.com/docs/installation/next"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline inline-flex items-center"
            >
              Next.js Installation Instructions
              <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="1em"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="1em"
                className="mx-1"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                <path d="M15 3h6v6"></path>
                <path d="M10 14L21 3"></path>
              </svg>
            </a>
            . This setup supports server-side rendering and static site
            generation.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-3">Quick Setup</h2>
        <p className="text-lg mb-2">
          UI-Topia’s components are copy-paste ready. After completing the
          installation:
        </p>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>
            Visit the{" "}
            <Link
              to="/components"
              className="text-blue-500 hover:underline inline-flex items-center"
            >
              Components Library
              <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="1em"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="1em"
                className="mx-1"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                <path d="M15 3h6v6"></path>
                <path d="M10 14L21 3"></path>
              </svg>
            </Link>{" "}
            to browse available components.
          </li>
          <li>
            Copy the desired component’s code and paste it into your project’s
            file.
          </li>
          <li>Customize it as needed to match your app’s style.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-3">Example: Adding a Button</h2>
        <div className="flex">
          <SyntaxHighlighter
            language="javascript"
            style={
              document.documentElement.classList.contains("dark")
                ? atomOneDark
                : atomOneLight
            }
            className="rounded-lg border border-gray-300 w-[45rem]"
          >
            {`// Example of using a Button component
import { Button } from "@/components/ui/button";
export default function App() { 
  return ( 
    <div className="p-6">
      <Button className="rounded-full text-lg">Click Me</Button>
    </div>
    ); 
}`}{" "}
          </SyntaxHighlighter>
          <div className="p-6 flex items-center justify-center bg-[rgba(31,41,55,0.5)]">
            <Button className="rounded-full text-lg">Click Me</Button>
          </div>
        </div>
        <p className="text-lg mt-4">
          After pasting the code, make sure your Tailwind CSS configuration is
          properly set up to support all styles.
        </p>
      </section>
    </div>
  );
};

export default Installation;
