import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="user-image"
            className="w-full rounded-3xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-10 max-w-2xl font-Ovo"
          >
            I am a Full Stack Developer skilled in MERN Stack, Next.js, and Web3
            development. I build responsive and scalable web applications using
            React.js, Node.js, Express.js, and MongoDB. I also have experience
            developing Solana blockchain applications, including wallet
            integration and token-based DApps. Passionate about modern
            technologies and clean code, I focus on creating efficient solutions
            with great user experiences.
          </motion.p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => {
              return (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="border-[0.5px] border-gray-400 rounded-xl items-center gap-2 p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[#2a004a] hover:shadow-sm"
                >
                  <Image src={icon} alt={title} className="w-7 mt-3" />
                  <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                  <p className="text-gray-600 text-sm">{description}</p>
                </motion.li>
              );
            })}
          </ul>

          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="my-6 text-gray-700 font Ovo"
          >
            Tools I use
          </motion.h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tools, index) => {
              return (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, rotate: 5 }}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                >
                  <Image
                    src={tools}
                    alt="Tool"
                    className="w-5 sm:w-7"
                    loading="eager"
                  />
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
