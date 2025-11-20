"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLayoutEffect, useState } from "react";
import { NavigationMain } from "@/components/navigation/navigation-main";

export interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // This useLayoutEffect is necessary to prevent hydration mismatches with next-themes
  // The mounted state ensures the same HTML structure is rendered on server and client
  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const themes = [
    { value: "light", icon: Sun, label: "Light mode" },
    { value: "system", icon: Monitor, label: "System theme" },
    { value: "dark", icon: Moon, label: "Dark mode" },
  ] as const;

  // theme can be "light", "dark", or "system" (user preference)
  // Use undefined fallback to handle initial render before hydration
  const currentTheme = theme || "dark";

  function renderThemeToggle() {
    // For toggle, treat "system" as dark (since default is dark)
    // Only show light icon when explicitly set to light
    const isDark = mounted && currentTheme !== "light";
    return (
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        disabled={!mounted}
        className={cn(
          "flex items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 p-2 transition-all dark:border-zinc-800 dark:bg-zinc-900",
          "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300",
          isDark &&
            "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-100",
          !mounted && "opacity-50"
        )}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={isDark}
      >
        {isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
      </button>
    );
  }

  function renderThemeSelector() {
    return (
      <div
        className="flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 p-1 dark:border-zinc-800 dark:bg-zinc-900"
        role="group"
        aria-label="Theme selector"
      >
        {themes.map(({ value, icon: Icon, label }) => {
          const isActive = mounted && currentTheme === value;
          return (
            <button
              key={value}
              onClick={() => setTheme(value)}
              disabled={!mounted}
              className={cn(
                "flex items-center justify-center rounded-full p-2 transition-all",
                isActive
                  ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-100"
                  : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300",
                !mounted && "opacity-50"
              )}
              aria-label={label}
              aria-pressed={isActive}
            >
              <Icon className="size-4" />
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <header className={cn("w-full py-4 ", className)}>
      <div className="flex items-center justify-center">
        {/* <div className="mx-auto flex max-w-3xl items-center sm:justify-between"> */}
        <div className="flex items-center gap-4 sm:hidden">
          {renderThemeToggle()}
          <NavigationMain orientation="horizontal" />
        </div>
        <div className="hidden sm:block">{renderThemeSelector()}</div>
      </div>
    </header>
  );
}
