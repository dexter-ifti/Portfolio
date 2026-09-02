"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-8 w-8 rounded-md border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/[0.04]" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/[0.04] text-neutral-600 dark:text-gray-300 transition-colors hover:bg-neutral-200 dark:hover:bg-white/10 hover:text-neutral-900 dark:hover:text-white focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-white/60 outline-none"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <FiSun className="h-4 w-4 transition-transform hover:rotate-45" aria-hidden="true" />
      ) : (
        <FiMoon className="h-4 w-4 transition-transform hover:-rotate-12" aria-hidden="true" />
      )}
    </button>
  );
}
