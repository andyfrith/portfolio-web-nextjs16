import { motion } from "framer-motion";
import { BotIcon } from "../icons";

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="mx-4 mt-5 max-w-[500px] md:mx-0"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      {/* <div className="border-none mb-4 bg-[#333] rounded-2xl p-6 flex flex-col gap-4 text-zinc-500 text-sm dark:text-zinc-400 dark:border-zinc-700"> */}
      <div className="mb-4 flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-zinc-300 p-6 text-sm text-zinc-400 dark:border-zinc-700 dark:bg-[#333] dark:text-zinc-400">
        <p className="flex flex-row items-center justify-center gap-4 text-white dark:text-zinc-50">
          <BotIcon />
        </p>
        <p>
          <span className="text-white">Surprise!</span> I am an AI assistant
          here to guide you through Andy&apos;s experience and expertise. You
          can call me <span className="text-white">&quot;ai.ndy&quot;</span> if
          you like. Ha! Ha! Just kidding! Better not tell the boss I said that!
        </p>
      </div>
    </motion.div>
  );
};
