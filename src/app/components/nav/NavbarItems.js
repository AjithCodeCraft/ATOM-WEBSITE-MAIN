// src/app/components/nav/Navbar.js
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './navbar.css'; // Assuming CSS is in the same directory

const Navbar = ({ isOpen }) => {
  const [isToggled, setIsToggled] = useState(false);

  const navContainer = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    }
  };

  const items = ["Home", "Products", "Services", "About"];

  return (
    <>
      <button className="btn" onClick={() => setIsToggled(!isToggled)}>
        =
      </button>
      <AnimatePresence>
        {(isOpen || isToggled) && (
          <motion.div
            className="navbar"
            initial="hidden"
            animate={isOpen || isToggled ? "visible" : "hidden"}
            exit="hidden"
            variants={navContainer}
          >
            <motion.ul
              className="navList"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={navList}
            >
              {items.map(item => (
                <motion.li className="nav-item" variants={navItem} key={item}>
                  <p>{item}</p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
