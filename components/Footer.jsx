import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.div whileHover={{ scale: 1.05 }}>
          <Image src={assets.logo} alt="logo" className="w-36 mx-auto mb-3" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="w-max flex items-center gap-2 mx-auto text-gray-700 dark:text-gray-300"
        >
          <Image
            src={assets.mail_icon}
            alt="mail"
            className="w-6 dark:invert"
          />
          <span>prathameshdande7@gmail.com</span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center sm:flex items-center justify-between border-t border-gray-400 dark:border-gray-700 mx-[10%] mt-12 py-6"
      >
        <p className="text-sm text-gray-700 dark:text-gray-300">
          © 2026 Prathamesh Dande. All rights reserved.
        </p>

        <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0 flex-wrap">
          {[
            {
              name: "GitHub",
              link: "https://www.github.com/prathameshdande",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/prathamesh-dande-a2b14a32b",
            },
            {
              name: "Instagram",
              link: "https://www.instagram.com/mr_prathamesh_dande_7",
            },
            {
              name: "X",
              link: "https://x.com/pratham______7",
            },
          ].map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -3, scale: 1.05 }}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500 transition"
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </footer>
  );
};

export default Footer;
