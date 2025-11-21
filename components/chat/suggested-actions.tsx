import { motion } from "framer-motion";

interface SuggestedAction {
  label: string;
  prompt: string;
}

interface SuggestedActionsProps {
  actions: SuggestedAction[];
  onSelect: (prompt: string) => void;
  selectedPrompt?: string;
}

/**
 * Displays suggested action buttons in a 2-column grid.
 * @param actions - Array of suggested actions with label and prompt
 * @param onSelect - Callback function when an action is selected
 * @param selectedPrompt - The currently selected prompt text
 */
export function SuggestedActions({
  actions,
  onSelect,
}: // selectedPrompt,
SuggestedActionsProps) {
  if (actions.length === 0) {
    return null;
  }

  return (
    <motion.div
      key="overview"
      className="mx-4 mt-5 max-w-[500px] md:mx-0"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {actions.map((action, index) => {
          const isSelected = true;
          // selectedPrompt === action.prompt;
          return (
            <button
              key={index}
              type="button"
              onClick={() => onSelect(action.prompt)}
              className={`rounded-lg border border-white bg-zinc-200 px-4 py-3 text-left text-sm font-medium text-zinc-400 shadow-sm transition-colors hover:cursor-pointer hover:border-zinc-200 hover:bg-zinc-300 hover:text-white dark:border-zinc-300 dark:bg-zinc-700 dark:hover:border-white dark:hover:text-white`}
              // className={`px-4 py-3 text-left text-sm border rounded-lg shadow-sm transition-colors ${
              //   isSelected
              //     ? "border-zinc-500 dark:border-zinc-400 bg-zinc-200 dark:bg-zinc-700 font-medium"
              //     : "border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800"
              // }`}
            >
              {action.label}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
