"use client";

import { motion } from "framer-motion";
import { NavigationMain } from "@/components/navigation/navigation-main";
import { Rotate3d } from "lucide-react";
import { experiencesData } from "@/data/data";
import { Timeline } from "@/components/timeline/timeline";

export default function Experience() {
  return (
    <motion.div
      key="overview"
      className="mx-4 mt-5 flex flex-col"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <Rotate3d className="mb-4 h-10 w-10 text-(--text-gray-color) opacity-20 sm:hidden dark:text-(--text-gray-color-dark)" />
          <h1 className="max-w-xs text-3xl leading-10 font-semibold tracking-tight text-(--text-green-color) dark:text-(--text-green-color-dark)">
            experience.
            <br />
            <span className="text-white dark:text-zinc-50">
              better than AI.
            </span>
          </h1>
          <p className="max-w-md text-lg leading-8">
            Solving complex, multi-dimensional problems. Building unforgettable,
            AI-powered user experiences with React, Next.js and TypeScript.
            Driving transformative business results through a culture of extreme
            collaboration.
          </p>
        </div>
        <div className="hidden sm:block">
          <NavigationMain />
        </div>
      </div>
      <section>
        <Timeline data={experiencesData} />
      </section>
      <div className="flex flex-col gap-4 text-base font-medium sm:flex-row"></div>
    </motion.div>
  );
}
