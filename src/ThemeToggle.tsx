// src/components/ThemeToggle.tsx
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { isDark, setTheme } from "./theme";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(isDark());

  useEffect(() => {
    setDark(isDark());
  }, []);

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => {
        const next = !dark;
        setDark(next);
        setTheme(next ? "dark" : "light");
      }}
      className="inline-flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-800 p-2 bg-white/70 dark:bg-gray-900/70 hover:shadow-sm"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
