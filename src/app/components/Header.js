// src/app/components/Header.js
"use client";

import React, { useState } from "react";
import Navbar from "./nav/Navbar";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header className="fixed w-full bg-white border-b dark:bg-gray-900 dark:border-gray-700 z-50 top-0 left-0 right-0 h-20">
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
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="p-2">
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-8">
            <ul className="flex space-x-8">
              {["About Us", "Courses", "Question Booklet Creator", "Contact Us"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="block py-2 text-black hover:text-purple-700 dark:text-gray-400 dark:hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? "0%" : "100%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 right-0 mt-16 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 ${isOpen ? 'block' : 'hidden'} z-40`}
          >
            <Navbar isOpen={isOpen} />
          </motion.div>
        </div>
      </nav>
    </header>
  );
}
