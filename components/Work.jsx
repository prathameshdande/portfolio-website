import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-2 text-lg font-ovo"
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-ovo"
      >
        My Latest Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-700 dark:text-gray-300"
      >
        Welcome to my web development portfolio! Here, you'll find a collection
        of my latest projects that showcase my skills and expertise in creating
        dynamic and responsive web applications.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
        {workData.map((project, index) => (
          <motion.div
            key={index}
            // initial={{ opacity: 0, y: 40 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ delay: index * 0.15, duration: 0.5 }}
            // viewport={{ once: true }}
            // whileHover={{ scale: 1.03 }}
            className="h-72 w-72 bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group m-1 overflow-hidden"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white dark:bg-[#1a1a1a] w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-md">
              <div>
                <h2 className="font-semibold text-black dark:text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
              </div>

              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="border border-black dark:border-white rounded-full w-9 aspect-square flex items-center justify-center shadow-[2px_2px_2px_#000] dark:shadow-white group-hover:bg-lime-300 transition"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Image
                  src={assets.send_icon}
                  alt="Send"
                  className="w-5 dark:invert"
                />
                </a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#"
        className="w-max flex items-center justify-center gap-2 text-gray-700 dark:text-white border border-gray-700 dark:border-gray-400 rounded-full py-3 px-10 mx-auto my-10 hover:bg-lightHover dark:hover:bg-darkHover duration-500"
      >
        Show More
        <Image
          src={assets.right_arrow_bold}
          alt="arrow"
          className="w-4 dark:invert"
        />
      </motion.a>
    </div>
  );
};

export default Work;
