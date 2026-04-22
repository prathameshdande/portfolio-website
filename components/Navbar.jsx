"use client";

import { assets } from "@/assets/assets";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const sideMenuRef = useRef(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.right = "0";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.right = "-16rem";
    }
  };

  const toggleTheme = () => {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }

    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 1 }}
        className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:opacity-30 dark:hidden"
      >
        <Image
          src={assets.header_bg_color}
          alt="background"
          className="w-full"
          priority
        />
      </motion.div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white/80 dark:bg-[#11001f]/80 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <motion.a
          href="#top"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={assets.logo}
            alt="logo"
            className="w-36 cursor-pointer"
            priority
          />
        </motion.a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-8 rounded-full px-10 py-3 transition-all duration-300 ${
            isScroll
              ? "bg-transparent"
              : "bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/20 shadow-sm"
          }`}
        >
          {["Home", "About", "Services", "Work", "Contact"].map(
            (item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={`#${
                    item.toLowerCase() === "home" ? "top" : item.toLowerCase()
                  }`}
                  className="font-ovo hover:text-purple-500 transition"
                >
                  {item}
                </a>
              </motion.li>
            ),
          )}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ rotate: 20, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src={darkMode ? assets.sun_icon : assets.moon_icon}
              alt="theme"
              className="w-6 cursor-pointer"
            />
          </motion.button>

          {/* Contact Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex items-center gap-2 px-8 py-2.5 border border-gray-500 dark:border-gray-400 rounded-full font-ovo hover:bg-lightHover dark:hover:bg-darkHover duration-300"
          >
            Contact
            <Image
              src={assets.arrow_icon}
              alt="arrow"
              className="w-3 dark:invert"
            />
          </motion.a>

          {/* Mobile Menu Icon */}
          <motion.button
            onClick={openMenu}
            whileTap={{ scale: 0.9 }}
            className="md:hidden"
          >
            <Image
              src={assets.menu_black}
              alt="menu"
              className="w-6 dark:invert"
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="md:hidden fixed top-0 right-[-16rem] bottom-0 w-64 h-screen bg-white dark:bg-darkTheme shadow-lg flex flex-col gap-6 px-8 py-20 transition-all duration-500 z-50"
        >
          <button onClick={closeMenu} className="absolute top-5 right-5">
            <Image
              src={assets.close_black}
              alt="close"
              className="w-5 dark:invert"
            />
          </button>

          {["Home", "About", "Services", "Work", "Contact"].map(
            (item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={`#${
                    item.toLowerCase() === "home" ? "top" : item.toLowerCase()
                  }`}
                  onClick={closeMenu}
                  className="font-ovo text-lg hover:text-purple-500 transition"
                >
                  {item}
                </a>
              </motion.li>
            ),
          )}
        </ul>
      </motion.nav>
    </>
  );
};

export default Navbar;
