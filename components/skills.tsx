"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills({ skills }: { skills: Array<string> }) {
  return (
    <div id="skills" className="max-w-[53rem]">
      <ul className="flex flex-wrap justify-left gap-2 text-[10px] font-semibold text-gray-800 mb-3 mt-4">
        {skills.map((skill, index) => (
          <motion.li
            className="bg-gray-400 text-white rounded-xl px-2 py-1"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
