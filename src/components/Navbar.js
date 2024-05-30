import { ArrowRightIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto px-4 md:px-10 py-2">
        <div className="flex items-center justify-between">
          <a href="#about" className="text-white text-lg font-medium">
            Brian
          </a>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
        <nav
          className={`mt-2 ${
            isMenuOpen
              ? "block fixed inset-0 bg-gray-800 text-center z-20"
              : "hidden md:flex"
          } md:items-center md:justify-center`}
        >
          <a
            href="#projects"
            onClick={closeMenu}
            className="block md:inline-block md:mt-0 md:mx-2 text-white hover:text-gray-300 text-sm py-2"
          >
            Past Work
          </a>
          <a
            href="#skills"
            onClick={closeMenu}
            className="block md:inline-block md:mt-0 md:mx-2 text-white hover:text-gray-300 text-sm py-2"
          >
            Skills
          </a>
          <a
            href="#testimonials"
            onClick={closeMenu}
            className="block md:inline-block md:mt-0 md:mx-2 text-white hover:text-gray-300 text-sm py-2"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className={`block md:inline-block md:mt-0 md:mx-2 bg-gray-700 hover:bg-gray-600 text-white py-1 px-2 rounded-lg transition duration-300 ease-in-out text-sm ${
              isMenuOpen ? "text-xs py-0.5 px-1.5" : ""
            }`}
          >
            Hire Me
            
          </a>
          {isMenuOpen && (
            <div className="md:hidden text-center mt-2">
              <button
                onClick={closeMenu}
                className="text-white py-1 px-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition duration-300 ease-in-out text-sm"
              >
                Close
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
