// src/sections/Hero.tsx
import Section from "../components/Section";
import { Button } from "flowbite-react";
import {
  motion,
  type Variants,
  type Transition,
  useReducedMotion,
} from "framer-motion";
import { useCallback, useState } from "react";

export default function Hero() {
  // === state for the CV download ===
  const [downloading, setDownloading] = useState(false);

  // Respect "reduced motion" for accessibility
  const prefersReducedMotion = useReducedMotion();

  // Framer Motion v11: explicitly type Transition & Variants
  const springy: Transition = { type: "spring", stiffness: 80, damping: 14 };

  const reveal: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: springy },
  };

  // helper that fetches the PDF and forces a download
  const downloadCv = async (setLoading: (v: boolean) => void) => {
    setLoading(true);
    try {
      const res = await fetch("/cv.pdf");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Adewole-Isaiah-CV.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      // fallback: open in new tab (useful on some mobile browsers)
      window.open("/cv.pdf", "_blank", "noopener,noreferrer");
    } finally {
      setLoading(false);
    }
  };

  // stable handler that uses the state setter above
  const handleDownload = useCallback(() => {
    void downloadCv(setDownloading);
  }, []);

  // subtle float animation (disabled for reduced motion)
  const floatAnim = prefersReducedMotion
    ? {}
    : {
        x: [-6, 6, -6],
        y: [4, -2, 4],
        transition: { duration: 16, repeat: Infinity, ease: "easeInOut" },
      };

  return (
    <Section id="hero" className="pt-28">
      <div
        className={[
          "relative isolate overflow-hidden",
          "mx-auto max-w-6xl px-6 py-16 md:py-20 rounded-3xl",
          "bg-gradient-to-b from-rose-50 to-white",
          "dark:from-rose-950 dark:to-[#0b0a0a]",
          "ring-1 ring-rose-200/60 dark:ring-white/10",
        ].join(" ")}
      >
        {/* drifting glow blobs (subtle, behind content) */}
        {!prefersReducedMotion && (
          <>
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl bg-rose-300/30 dark:bg-rose-500/15"
              initial={{ opacity: 0.6, x: -10, y: -10 }}
              animate={{ x: [-10, 10, -10], y: [-8, 12, -8] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -right-20 h-96 w-96 rounded-full blur-3xl bg-rose-200/25 dark:bg-rose-600/10"
              initial={{ opacity: 0.5, x: 10, y: 10 }}
              animate={{ x: [10, -10, 10], y: [12, -6, 12] }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}

        {/* faint top sheen */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-400/30 to-transparent dark:via-rose-300/20"
        />

        {/* content */}
        <motion.div
          className="relative grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}
        >
          {/* LEFT: text */}
          <div className="text-center md:text-left">
            {/* tiny top badge */}
            <motion.div
              variants={reveal}
              className="inline-flex items-center gap-2 rounded-full border border-rose-200/60 bg-white/70 px-3 py-1 text-xs font-medium text-rose-900/80 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-rose-100"
            >
              <span
                aria-hidden="true"
                className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"
              >
                {!prefersReducedMotion && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/60" />
                )}
              </span>
              Open to senior roles & freelance
            </motion.div>

            <motion.h1
              variants={reveal}
              className="mt-3 text-4xl font-extrabold tracking-tight text-rose-900 md:text-6xl dark:text-rose-50"
            >
              Adewole O. Isaiah
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-3 text-lg leading-relaxed text-rose-900/80 dark:text-rose-100/80"
            >
              Frontend / Back-Stack Developer — React, TypeScript, Tailwind. I
              build delightful product UIs, with clean, accessible code and
              performance in mind.
            </motion.p>

            {/* quick tech tags */}
            <motion.ul
              variants={reveal}
              className="mt-4 flex flex-wrap items-center justify-center gap-2 md:justify-start"
              aria-label="Key skills"
            >
              {[
                "React",
                "TypeScript",
                "Tailwind",
                "Framer Motion",
                "Node.js",
              ].map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-rose-200/60 bg-white/70 px-3 py-1 text-sm text-rose-800 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-rose-100"
                >
                  {t}
                </li>
              ))}
            </motion.ul>

            {/* actions */}
            <motion.div
              variants={reveal}
              className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start"
            >
              <Button
                as="a"
                href="#projects"
                size="md"
                className="!px-5 !py-2.5 !font-semibold
                           !bg-rose-600 hover:!bg-rose-700 !text-white
                           dark:!bg-rose-400 dark:hover:!bg-rose-300 dark:!text-rose-950
                           focus:!ring-2 focus:!ring-offset-2 focus:!ring-rose-600
                           dark:focus:!ring-rose-400 dark:focus:!ring-offset-[#0b0a0a]"
              >
                View Projects
              </Button>

              <Button
                onClick={handleDownload}
                size="md"
                color="light"
                disabled={downloading}
                aria-busy={downloading}
                className="!px-5 !py-2.5 !font-semibold
                           !bg-transparent !text-rose-900 !border !border-rose-300 hover:!bg-rose-50
                           dark:!text-rose-100 dark:!border-rose-700 dark:hover:!bg-white/10
                           disabled:!opacity-60 disabled:cursor-not-allowed"
              >
                {downloading ? "Downloading…" : "Download CV"}
              </Button>

              {/* social links (no extra deps) */}
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/your-github"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose-200/60 bg-white/70 backdrop-blur-sm transition hover:scale-105 dark:border-white/10 dark:bg-white/5"
                >
                  {/* GitHub mark */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-rose-900 dark:fill-rose-100"
                  >
                    <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.84 2.82 1.31 3.51 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.9 0-1.3.47-2.37 1.24-3.2-.13-.31-.54-1.57.12-3.28 0 0 1.01-.32 3.3 1.22a11.5 11.5 0 0 1 6 0c2.28-1.54 3.29-1.22 3.29-1.22.66 1.71.25 2.97.12 3.28.77.83 1.23 1.9 1.23 3.2 0 4.58-2.81 5.59-5.49 5.89.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5Z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/your-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose-200/60 bg-white/70 backdrop-blur-sm transition hover:scale-105 dark:border-white/10 dark:bg-white/5"
                >
                  {/* LinkedIn glyph */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-rose-900 dark:fill-rose-100"
                  >
                    <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 22h4.9V7.9H.5V22ZM8.34 7.9V22h4.9v-7.46c0-1.97.38-3.87 2.8-3.87 2.38 0 2.41 2.22 2.41 4v7.33H23.3V13.4c0-4.5-.96-7.95-6.18-7.95-2.51 0-4.2 1.38-4.88 2.68h-.07V7.9H8.34Z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* small credibility strip */}
            <motion.div
              variants={reveal}
              className="mt-6 flex flex-wrap items-center gap-6 opacity-90"
            >
              <div className="text-left">
                <p className="text-sm text-rose-900/70 dark:text-rose-200/80">
                  Performance
                </p>
                <p className="text-base font-semibold text-rose-900 dark:text-rose-50">
                  Lighthouse 95+*
                </p>
              </div>
              <div className="h-10 w-px bg-rose-200/70 dark:bg-white/10" />
              <div className="text-left">
                <p className="text-sm text-rose-900/70 dark:text-rose-200/80">
                  Experience
                </p>
                <p className="text-base font-semibold text-rose-900 dark:text-rose-50">
                  5+ years
                </p>
              </div>
              <div className="sr-only">*on typical project builds</div>
            </motion.div>
          </div>

          {/* RIGHT: image */}
          <motion.div
            className="relative mx-auto max-w-xs md:max-w-none md:w-full"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1, ...floatAnim }}
          >
            {/* gradient frame */}
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-rose-400/40 via-fuchsia-400/40 to-amber-300/40 blur-xl dark:from-rose-500/20 dark:via-fuchsia-500/20 dark:to-amber-400/20"
            />
            <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-rose-200/60 dark:ring-white/10">
              <img
                src="/isaiah.jpg"
                alt="Adewole O. Isaiah — portrait"
                className="block h-auto w-full object-cover"
                loading="eager"
                decoding="async"
                sizes="(max-width: 768px) 80vw, 520px"
              />
              {/* bottom caption strip */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                <p className="text-sm font-medium text-white/95">
                  Building useful things with React, CSS, Tailwind css,
                  Flowbite, NextJS, Java/Springboot...
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
