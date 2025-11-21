"use client";

import { motion } from "framer-motion";
import { NavigationMain } from "@/components/navigation/navigation-main";
import Traits from "../traits/traits";
import { Trait } from "@/lib/types";

export default function Hello({ traits }: { traits: Trait[] }) {
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
          <h1 className="max-w-xs text-3xl leading-10 font-semibold tracking-tight text-(--text-green-color) dark:text-(--text-green-color-dark)">
            hello.
            <br />
            <span className="text-white dark:text-zinc-50">
              better than AI.
            </span>
          </h1>
          <p className="max-w-md text-lg leading-8">
            Empowering teams to deliver secure, high-performance software &
            exceptional UX. Human-led innovation while efficiently harnessing AI
            technology for successful outcomes.{" "}
          </p>
        </div>
        <div className="hidden sm:block">
          <NavigationMain />
        </div>
      </div>
      <section>
        <Traits traits={traits} />
      </section>
    </motion.div>
  );
}
