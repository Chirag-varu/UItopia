import ModeToggle from "../components/mode-toggle";
import { Button } from "@/components/ui/button";
import { RiGithubFill } from "@remixicon/react";
import { Link } from "react-router-dom";

export function Navbar() {
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
          <img
            src="src/assets/logo-light.png"
            alt="Logo"
            className="h-24 rounded-xl dark:hidden cursor-pointer"
          />
          <img
            src="src/assets/logo-dark.png"
            alt="Logo"
            className="h-24 rounded-xl hidden dark:block cursor-pointer"
          />
          <span className="text-2xl font-bold text-gray-800 dark:text-white cursor-pointer">
            UI-TOPIA
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300">
          <li>
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/docs" className="hover:text-blue-500">
              Docs
            </Link>
          </li>
          <li>
            <Link to="/components" className="hover:text-blue-500">
              Components
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>

        {/* Theme Toggle & GitHub Button */}
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
        </div>
      </div>
    </nav>
  );
}
