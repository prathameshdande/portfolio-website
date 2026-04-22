"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "9c15a92f-5632-4c97-b435-be06d94572e1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully!");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] dark:bg-none"
    >
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Connect with Me
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-ovo"
      >
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-700 dark:text-gray-300"
      >
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below to get in touch with me.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <div className="grid sm:grid-cols-2 gap-6 mt-10 mb-8">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="p-3 outline-none border border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-[#1a1a1a]"
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="p-3 outline-none border border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-[#1a1a1a]"
          />
        </div>

        <motion.textarea
          whileFocus={{ scale: 1.01 }}
          rows="6"
          name="message"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-[#1a1a1a] mb-6"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-center gap-2 bg-black text-white dark:bg-white dark:text-black rounded-full mx-auto hover:scale-105 duration-300"
        >
          Submit Now
          <Image
            src={assets.right_arrow_white}
            alt="arrow"
            className="w-4 dark:invert"
          />
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: result ? 1 : 0 }}
          className="text-center mt-4 text-sm text-gray-700 dark:text-gray-300"
        >
          {result}
        </motion.p>
      </motion.form>
    </div>
  );
};

export default Contact;
