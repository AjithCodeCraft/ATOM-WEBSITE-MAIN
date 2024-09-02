import React from "react";
import { motion } from "framer-motion";
import './navbar.css'; // Ensure this path is correct and the file exists

const Navbar = ({ isOpen }) => {
  const items = ["About Us", "Courses", "Question Booklet Creator", "Contact Us"];

  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1, // Adjust for stagger effect
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
        opacity: { duration: 0.3 },
      },
    },
    hidden: {
      y: 20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
        opacity: { duration: 0.3 },
      },
    },
  };

  return (
    <motion.ul
      className="navList"
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      exit="hidden"
      variants={navList}
    >
      {items.map(item => (
        <motion.li className="nav-item" variants={navItem} key={item}>
          <a
            href="#"
            className="block py-2 text-black hover:text-purple-700 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
          >
            {item}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Navbar;
