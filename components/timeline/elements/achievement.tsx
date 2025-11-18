"use client";

import React from "react";
import { ResultType } from "@/data/data";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion/dom";
import { Star } from "lucide-react";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    transition: {
      delay: 0.05 * index,
      easeInOut,
    },
  }),
};

export default function Achievement({
  achievement,
}: {
  achievement: ResultType;
}) {
  return (
    <div id="success">
      <div className="text-sm text-gray-500 font-(family-name:--font-metrophobic)">
        <motion.div
          className="ml-0 flex items-baseline"
          key={achievement.id}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={achievement.id}
        >
          <div className="mr-1">
            <Star size={10} strokeWidth={0} fill="#6b7280" />
          </div>
          <div>{achievement.summary}</div>
        </motion.div>
      </div>
    </div>
  );
}
