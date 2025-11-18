"use client";

import { ResultType } from "@/data/data";
import React from "react";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Success({ results }: { results: Array<ResultType> }) {
  return (
    <div id="success" className="max-w-[53rem]">
      <ul className="text-sm text-gray-500 font-(family-name:--font-metrophobic) list-disc">
        {results.map((result) => (
          <motion.li
            className="ml-4"
            key={result.id}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={result.id}
          >
            {result.summary}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
