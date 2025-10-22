// src/components/ThemeToggle.tsx
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  // read from <html> and localStorage on mount
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initial = stored ? stored === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", initial);
    setDark(initial);
    console.log(
      "[ThemeToggle:init] html.className=",
      document.documentElement.className
    );
  }, []);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
    console.log(
      "[ThemeToggle:click] dark=",
      next,
      " html.className=",
      document.documentElement.className
    );
  };

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggle}
      className="inline-flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-800 p-2 bg-white/70 dark:bg-gray-900/70 hover:shadow-sm"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
