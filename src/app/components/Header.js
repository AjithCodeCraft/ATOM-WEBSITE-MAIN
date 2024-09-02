"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header className="fixed w-full bg-white border-b z-50 top-0 left-0 right-0 h-20">
      <nav className="py-2.5">
        <div className="flex items-center justify-between max-w-screen-xl px-8 mx-auto h-full">
          <a href="#" className="flex items-center">
            <img
              src="/Atom-logo-2.png"
              alt="Logo"
              width={160}
              height={170}
              className="h-16 mr-11"
            />
          </a>
          {/* Custom Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden relative rounded-full h-16 w-16 flex items-center justify-center shadow-lg z-50 ${isOpen ? "bg-[#932ade]" : "bg-[#50C9C3]"}`}
          >
            <span
              className={`block w-8 h-1 bg-black transform transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1" : ""}`}
            ></span>
            <span
              className={`block w-8 h-1 bg-black my-2 transform transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-8 h-1 bg-black transform transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1" : ""}`}
            ></span>
          </button>
          {/* Mobile Navigation */}
          <motion.nav
            initial={{ opacity: 0, height: "0%", padding: "0 2rem 0 0" }}
            animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "100%" : "0%", padding: isOpen ? "2rem 2rem 2rem 2rem" : "0 2rem 0 0" }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 right-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-40 rounded-xl shadow-lg"
          >
            <ul className="flex flex-col items-start justify-start space-y-6 mt-16">
              {["About Us", "Courses", "Careers", "Contact Us"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-3xl font-light text-white hover:text-[#115b4c] transition-transform duration-400"
                    onClick={toggleMenu}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-8">
            <ul className="flex space-x-8">
              {["About Us", "Courses", "Question Booklet Creator", "Contact Us"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="block py-2 text-black hover:text-purple-700 dark:text-gray-400 dark:hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
