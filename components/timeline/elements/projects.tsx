"use client";

import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { motion } from "framer-motion";
import { ProjectType } from "@/data/data";
import Project from "./project";

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

export default function Projects({
  projects,
}: {
  projects: Array<ProjectType>;
}) {
  const autoOpenProject = projects.length === 1;
  return (
    <div id="projects" className="max-w-[53rem]">
      <div className="flex-col justify-left gap-2 text-[10px] text-gray-800 mb-3 mt-2">
        {projects.map((project, index) => (
          <motion.div
            id={`project-${project.name}`}
            className="mb-2"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <Collapsible defaultOpen={autoOpenProject}>
              <CollapsibleTrigger className="mt-0 text-xs font-semibold text-white hover:text-neon-green-500">
                <a href={`#project-${project.name}`}>
                  <div className="bg-gray-500 p-1 text-[10px] font-semibold mb-1">
                    {project.name} ...
                  </div>
                </a>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <Project project={project} />
              </CollapsibleContent>
            </Collapsible>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
