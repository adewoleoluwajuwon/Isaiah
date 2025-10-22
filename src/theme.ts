export function getStoredTheme() {
  return localStorage.getItem("theme") as "light" | "dark" | null;
}
export function setTheme(theme: "light" | "dark") {
  const root = document.documentElement; // <html>
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
  localStorage.setItem("theme", theme);
}
export function initTheme() {
  const stored = getStoredTheme();
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(stored ?? (prefersDark ? "dark" : "light"));
}
export function isDark() {
  return document.documentElement.classList.contains("dark");
}
