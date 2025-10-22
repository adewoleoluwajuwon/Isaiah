import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className={[
        "mt-16",
        "relative isolate",
        "bg-white/70 dark:bg-slate-950/70",
        "backdrop-blur supports-[backdrop-filter]:backdrop-blur",
      ].join(" ")}
    >
      {/* top gradient rule */}
      <div
        aria-hidden="true"
        className="h-[2px] w-full bg-gradient-to-r from-rose-500 via-rose-400 to-rose-300 dark:from-rose-400 dark:via-rose-500 dark:to-rose-600"
      />

      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center gap-3 text-center">
          {/* name */}
          <p className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            Adewole O. Isaiah
          </p>

          {/* social row */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/adewoleoluwajuwon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-1.5
                         text-slate-700 hover:text-rose-700 hover:bg-rose-50
                         dark:text-slate-300 dark:hover:text-rose-300 dark:hover:bg-white/10
                         transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              {/* LinkedIn icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.98h5V24H0V8.98zM8.98 8.98h4.78v2.05h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.65V24h-5v-6.64c0-1.58-.03-3.62-2.2-3.62-2.2 0-2.54 1.72-2.54 3.5V24h-5V8.98z" />
              </svg>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>

          {/* tiny meta */}
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {year} Adewole O. Isaiah • Built with React, TypeScript & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
