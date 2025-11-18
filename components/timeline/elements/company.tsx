import React from "react";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion/dom";
import { CompanyType } from "@/data/data";

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

export default function Company({ company }: { company: CompanyType }) {
  return (
    <motion.div
      key={company.name}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={company.name}
    >
      <div className="flex-col">
        <div className="mb-2">
          {company.industries.map((industry) => (
            <span className="font-semibold" key={industry.id}>
              {industry.summary}
            </span>
          ))}
          {" • "}
          <span className="font-semibold">{company.size} Employees</span>
        </div>
        <div>{company.summary}</div>
      </div>
    </motion.div>
  );
}
