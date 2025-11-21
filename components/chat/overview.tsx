import { motion } from "framer-motion";
import { BotIcon } from "../icons";

export const Overview = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      key="overview"
      className="mt-5"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex items-start gap-2 whitespace-pre-wrap">
        <div className="mt-6 shrink-0 text-(--text-green-color)">
          <BotIcon />
        </div>
        <div className="mb-4 flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-zinc-300 p-6 text-sm text-zinc-400 dark:border-zinc-700 dark:bg-[#333] dark:text-zinc-400">
          <div className="flex-1">
            <p>
              <span className="text-white">Surprise!</span> I am an AI assistant
              here to guide you through Andy&apos;s experience and expertise.
              You can call me{" "}
              <span className="text-white">&quot;ai.ndy&quot;</span> if you
              like. Ha! Ha! Just kidding! Better not tell the boss I said that!
            </p>
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
