import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div
      id="top"
      className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="profile-img"
          className="rounded-full w-32 shadow-lg"
          priority
        />
      </motion.div>

      {/* Intro Text */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo"
      >
        Hi! I'm Prathamesh Dande
        <motion.div
          animate={{ rotate: [0, 20, -10, 20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
        >
          <Image src={assets.hand_icon} alt="hand" className="w-6" />
        </motion.div>
      </motion.h3>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-ovo leading-tight"
      >
        MERN Stack Developer + Next.js
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="max-w-2xl mx-auto font-ovo text-gray-700 dark:text-gray-300"
      >
        Full Stack Developer specializing in MERN & Next.js, dedicated to
        building scalable web applications and decentralized solutions using
        Solana Web3.js.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-6"
      >
        {/* Contact */}
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="px-10 py-3 rounded-full border border-white bg-black text-white dark:bg-white dark:text-black flex items-center gap-2"
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="arrow"
            className="w-4 dark:invert"
          />
        </motion.a>

        {/* Resume */}
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href="/Prathamesh_Dande_Resume.pdf"
          download
          className="px-10 py-3 rounded-full border border-gray-500 dark:border-gray-400 flex items-center gap-2 hover:bg-lightHover dark:hover:bg-darkHover duration-300"
        >
          My Resume
          <Image
            src={assets.download_icon}
            alt="download"
            className="w-4 dark:invert"
          />
        </motion.a>

        {/* GitHub */}
        <motion.a
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/prathameshdande"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-3 rounded-full border border-gray-500 dark:border-gray-400 flex items-center gap-2 hover:bg-lightHover dark:hover:bg-darkHover duration-300"
        >
          GitHub
          <Image src={assets.git} alt="github" className="w-5 dark:invert" />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Header;
