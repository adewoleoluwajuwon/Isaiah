/* eslint-disable no-undef */
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: { extend: {} },
  plugins: [require("flowbite/plugin")],
};
