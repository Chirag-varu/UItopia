import ModeToggle from "../components/mode-toggle";
import { Button } from "@/components/ui/button";
import { RiGithubFill } from "@remixicon/react";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGitHubRedirect = () => {
    window.open(
      "https://github.com/Chirag-varu/UItopia",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <nav className="flex w-full backdrop-blur-md bg-gray-200/50 dark:bg-gray-900/70 fixed z-50 p-4 justify-center items-center h-[4rem] mb-2">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
        <Link to="/" className="block hover:text-blue-500 text-center">

          <img
            src="src/assets/new-logo-light-removebg.png"
            alt="Logo"
            className="h-16 rounded-xl dark:hidden cursor-pointer"
          />
          <img
            src="src/assets/new-logo-dark-removebg.png"
            alt="Logo"
            className="h-16 rounded-xl hidden dark:block cursor-pointer"
          />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex-col md:flex-row md:flex gap-6 text-gray-700 dark:text-gray-300 absolute md:static top-[4rem] left-0 right-0 z-40 ${
            isMenuOpen
              ? "flex bg-slate-50 dark:bg-gray-900 p-3"
              : "hidden"
          } md:bg-transparent md:dark:bg-transparent`}
        >
          <li>
            <Link to="/" className="block  hover:text-blue-500 text-center w-full md:border-none border-b-2 pb-1 border-slate-400/30">
              Home
            </Link>
          </li>
          <li>
            <Link to="/docs" className="block hover:text-blue-500 text-center w-full md:border-none border-b-2 pb-1 border-slate-400/30">
              Docs
            </Link>
          </li>
          <li>
            <Link
              to="/components"
              className="block hover:text-blue-500 text-center w-full border-b-2 pb-1 md:border-none border-slate-400/30"
            >
              Components
            </Link>
          </li>
          <li>
            <Link to="/about" className="block hover:text-blue-500 text-center w-full border-b-2 pb-1 md:border-none border-slate-400/30">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block hover:text-blue-500 text-center w-full border-b-2 pb-1 md:border-none border-slate-400/30"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Theme Toggle, GitHub Button & Hamburger */}
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button
            className="flex"
            onClick={handleGitHubRedirect}
            variant="outline"
            aria-label="Login with GitHub"
            size="icon"
          >
            <RiGithubFill
              className="text-black dark:text-white"
              size={20}
              aria-hidden="true"
            />
          </Button>
          {/* Hamburger Icon */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-8 w-8 transition-transform duration-300 ${
                isMenuOpen ? "rotate-90" : "rotate-0"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                // Cross (X) icon for open menu
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <>
                  {/* First Line - Full width */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16"
                  />
                  {/* Second Line - Shorter and right-aligned */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h12"
                  />
                  {/* Third Line - Shortest and right-aligned */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h8"
                  />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
