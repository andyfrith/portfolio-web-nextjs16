"use client";

import { motion } from "framer-motion";
import { NavigationMain } from "@/components/navigation/navigation-main";
// import Chat from "../chat/chat";
import { Overview } from "../chat/overview";

export default function AI() {
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
            ai.
            <br />
            <span className="text-white dark:text-zinc-50">
              better than me?
            </span>
          </h1>
          <p className="max-w-md text-lg leading-8">
            I&apos;ll let you make the call.
          </p>
        </div>
        <div className="hidden sm:block">
          <NavigationMain />
        </div>
      </div>
      <section>
        {/* <Chat /> */}
        <Overview />
      </section>
      <div className="flex flex-col gap-4 text-base font-medium sm:flex-row"></div>
    </motion.div>
  );
}
