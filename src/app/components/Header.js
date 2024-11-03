"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="fixed w-full bg-white border-b z-50 top-0 left-0 right-0 h-24 px-3 sm:h-20  lg:px-23 xl:px-28">
      <nav className="h-full py-2.5">
        <div className="flex items-center justify-between w-full px-4 mx-auto h-full ">
          <Link href="/" className="flex items-center">
            <Image
              src="/Atom-logo-2.png"
              alt="Logo"
              className="mr-11 object-cover w-40 h-auto sm:w-36 md:w-64 lg:w-72 xl:w-80"
              width={200}
              height={80}
              priority={true}
            />
          </Link>

          <div
            className={`tham tham-e-squeeze tham-w-8 rounded-full lg:hidden  h-12 w-12 flex items-center justify-center shadow-lg z-50 px-[12px] ${isOpen ? "tham-active bg-white" : "bg-[#ffffff]"}`}
            onClick={toggleMenu}
          >
            <div className="tham-box">
              <div className="tham-inner bg-black"></div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.nav
            initial={{ opacity: 0, width: 0, height: 0, padding: 0 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              width: isOpen ? "340px" : 0,
              height: isOpen ? "80vh" : 0,
              padding: isOpen ? "2rem" : 0,
            }}
            transition={{ duration: 0.4 }}
            className={`fixed top-2 right-0 bg-indigo-600 z-40 rounded-lg shadow-lg lg:hidden block ${isOpen ? "pointer-events-auto" : "pointer-events-none"
              }`}
            style={{
              overflow: "hidden",
            }}
          >
            <ul className="text-2xl  flex flex-col items-center justify-start space-y-6 mt-16 gap-7">
              {[
                "Why Choose Us",
                "Courses",
                "Question Generator",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={
                      item === "Question Generator"
                        ? `/${item.toLowerCase().replace(/ /g, "")}`
                        : `/#${item.toLowerCase().replace(/ /g, "")}`
                    }
                    className="lg:text-2xl md:text-base text-sm  font-light text-white hover:text-gray-100 transition-transform duration-400"
                    onClick={toggleMenu}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-8">
            <ul className="flex space-x-8">
              {[
                "Why Choose Us",
                "Courses",
                "Question Generator",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={
                      item === "Question Generator"
                        ? `/${item.toLowerCase().replace(/ /g, "")}`
                        : `/#${item.toLowerCase().replace(/ /g, "")}`
                    }
                    className="block py-2 text-black hover:text-purple-700"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
