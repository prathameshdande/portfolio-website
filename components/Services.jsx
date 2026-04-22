import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-2 text-lg font-ovo"
      >
        What I offer
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-ovo"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-700 dark:text-gray-300"
      >
        I am a Full Stack Developer skilled in React, Angular, JavaScript, SQL,
        and Web3 technologies. I build responsive web applications, scalable
        solutions, and modern user-friendly digital experiences.
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            className="border border-gray-400 dark:border-gray-600 rounded-lg px-8 py-12 cursor-pointer
            transition-all duration-500 hover:-translate-y-1
            hover:shadow-lg hover:bg-lightHover dark:hover:bg-darkHover"
          >
            <Image src={icon} alt={title} className="w-10" />

            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-300 leading-5">
              {description}
            </p>

            <motion.a
              whileHover={{ x: 5 }}
              href={link}
              className="flex items-center gap-2 text-sm mt-5 text-gray-700 dark:text-gray-300"
            >
              Read more
              <Image
                src={assets.right_arrow}
                alt="Arrow"
                className="w-4 dark:invert"
              />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
