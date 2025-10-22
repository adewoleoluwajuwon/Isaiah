// src/sections/Hero.tsx
import Section from "../components/Section";
import { Button } from "flowbite-react";
import { motion, type Variants, type Transition } from "framer-motion";
import { useCallback, useState } from "react";

export default function Hero() {
  // === state for the CV download ===
  const [downloading, setDownloading] = useState(false);

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

        {/* faint top sheen */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-400/30 to-transparent dark:via-rose-300/20"
        />

        {/* content */}
        <motion.div
          className="relative text-center"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}
        >
          <motion.p
            variants={reveal}
            className="text-sm uppercase tracking-widest text-rose-700/80 dark:text-rose-200/70"
          >
            Hello, I’m
          </motion.p>

          <motion.h1
            variants={reveal}
            className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight text-rose-900 dark:text-rose-50"
          >
            Adewole O. Isaiah
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-4 text-lg text-rose-900/80 dark:text-rose-100/80"
          >
            Frontend / Full-Stack Developer • React • TypeScript • Tailwind
            <small>adewoleoluwajuwon@gmail.com</small>
          </motion.p>

          <motion.div
            variants={reveal}
            className="mt-6 flex items-center justify-center gap-3"
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
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
