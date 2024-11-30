import ModeToggle from "../components/mode-toggle";
import { Button } from "@/components/ui/button";
import { RiGithubFill, RiMenu3Line, RiCloseFill } from "@remixicon/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";
import logoDark from '../assets/new-logo-dark-removebg.png'
import logoLight from '../assets/new-logo-light-removebg.png'
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGitHubRedirect = () => {
    window.open(
      "https://github.com/Chirag-varu/UItopia",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="flex w-full backdrop-blur-md bg-gray-200/50 dark:bg-[#18181b]/50 fixed z-50 p-4 justify-center items-center h-[4rem] mb-2">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="block hover:text-blue-500 text-center">
            <img
              src={logoLight}
              alt="Logo"
              className="h-16 rounded-xl dark:hidden cursor-pointer"
            />
            <img
              src={logoDark}
              alt="Logo"
              className="h-16 rounded-xl hidden dark:block cursor-pointer"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul
          className={clsx(
            "flex-col md:flex-row md:flex gap-6 text-gray-700 dark:text-gray-300 absolute md:static top-[4rem] left-0 right-0 z-40",
            {
              "flex bg-slate-50 dark:bg-gray-900 p-3": isMenuOpen,
              hidden: !isMenuOpen,
            },
            "md:bg-transparent md:dark:bg-transparent"
          )}
        >
          {[
            { path: "/", name: "Home" },
            { path: "/docs", name: "Docs" },
            { path: "/components", name: "Components" },
            { path: "/about", name: "About" },
            { path: "/contact", name: "Contact" },
          ].map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="block hover:text-blue-500 text-center w-full md:border-none border-b-2 pb-1 border-slate-400/30"
                onClick={closeMenu} // Close the menu on link click
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle, GitHub Button & Hamburger */}
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button
            className="flex"
            onClick={handleGitHubRedirect}
            variant="outline"
            aria-label="GitHub"
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
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <RiCloseFill size={32} /> : <RiMenu3Line size={32} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
