"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
export const footerLinks = [
  {
      title: "Telegram",
      href: "https://t.me/+ADvEJPjg2ThjNjE1"
  },
  {
      title: "Youtube",
      href: "https://www.youtube.com/@ATOMIASOFFICIAL"
  },
  {
      title: "Instagram",
      href: "https://www.instagram.com/atomiasofficial?igsh=Z2hsczJwempxcWto"
  },
  {
      title: "Whatsapp",
      href: "https://whatsapp.com/channel/0029VacaP049xVJcgVONTu1F"
  }
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="fixed w-full bg-white border-b z-50 top-0 left-0 right-0 h-20">
      <nav className="py-2.5">
        <div className="flex items-center justify-between max-w-screen-xl px-8 mx-auto h-full">
          <a href="/" className="flex items-center">
            <img
              src="/Atom-logo-2.png"
              alt="Logo"
              width={160}
              height={170}
              className="h-16 mr-11"
            />
          </a>

          {/* Hamburger Menu Button */}
          <div
            className={`tham tham-e-squeeze tham-w-6 rounded-md lg:hidden  h-10 w-10 flex items-center justify-center shadow-lg z-50 fixed top-3 right-1 ${isOpen ? "tham-active bg-indigo-600" : "bg-[#ffffff]"}`}
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
              height: isOpen ? "90vh" : 0,
              padding: isOpen ? "2rem" : 0,
            }}
            transition={{ duration: 0.4 }}
            className={`fixed top-3 right-3 bg-indigo-600 z-40 rounded-xl shadow-lg ${
              isOpen ? "pointer-events-auto" : "pointer-events-none"
            }`}
            style={{
              overflow: "hidden",
            }}
          >
            <ul className="text-2xl  flex flex-col items-center justify-start space-y-6 mt-16 gap-7">
              {["About Us", "Courses", "Careers", "Contact Us"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-2xl sm:text-sm font-light text-white hover:text-[#115b4c] transition-transform duration-400"
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
        {/* <motion.div className={styles.footer}>
            {
                footerLinks.map( (link, i) => {
                    const { title, href } = link;
                    return (
                        <motion.a 
                            variants={slideIn}
                            custom={i}
                            href={href}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            key={`f_${i}`}
                            className='text-white focus:font-bold hover:font-bold font-normal font-inter'
                        >
                            {title}
                        </motion.a>
                    )
                })
            }
       </motion.div> */}
      </nav>
    </header>
  );
}
