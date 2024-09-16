"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="fixed w-full bg-white border-b z-50 top-0 left-0 right-0 h-24 px-3 sm:h-20 lg:px-23 xl:px-28">
      <nav className="h-full py-2.5">
        <div className="flex items-center justify-between w-full px-4 mx-auto h-full">
          <a href="/" className="flex items-center">
            <img
              src="/Atom-logo-2.png"
              alt="Logo"
              className="mr-11 object-cover w-40 h-auto sm:w-36 md:w-64 lg:w-72 xl:w-80"
            />
          </a>

          {/* Hamburger Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <div
                  className={`tham tham-e-squeeze tham-w-8 rounded-full h-12 w-12 flex items-center justify-center shadow-lg z-50 px-[12px] ${
                    isOpen ? "tham-active bg-white" : "bg-[#ffffff]"
                  }`}
                  onClick={toggleMenu}
                >
                  <div className="tham-box">
                    <div className="tham-inner bg-black"></div>
                  </div>
                </div>
              </SheetTrigger>
              <SheetContent side="right" className="bg-indigo-600">
                <ul className="text-2xl flex flex-col items-center justify-start space-y-6 mt-16 gap-7">
                  {[
                    "Why Choose Us",
                    "Courses",
                    "Question Booklet Creator",
                    "Contact Us",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase().replace(/ /g, "")}`}
                        className="lg:text-2xl md:text-base text-sm font-light text-white hover:text-gray-100 transition-transform duration-400"
                        onClick={() => setIsOpen(false)}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-8">
            <ul className="flex space-x-8">
              {[
                "Why Choose Us",
                "Courses",
                "Question Booklet Creator",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/ /g, "")}`}
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
