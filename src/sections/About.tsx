// src/sections/About.tsx
import Section from "../components/Section";
import { motion, type Variants, type Transition } from "framer-motion";

export default function About() {
  const skills = [
    "React",
    "TypeScript",
    "TailwindCSS",
    "Flowbite",
    "Node.js",
    "Spring Boot",
    "SSMS",
    "MySQL",
  ];

  // Framer Motion v11-safe typings
  const springy: Transition = { type: "spring", stiffness: 90, damping: 16 };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: springy },
  };

  const chipIn: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 4 },
    show: { opacity: 1, scale: 1, y: 0, transition: springy },
  };

  return (
    <Section id="about" className="scroll-mt-24">
      <div
        className={[
          "mx-auto max-w-6xl rounded-3xl px-6 py-12 md:py-14",
          // clean, theme-safe surface (subtle separation from page)
          "bg-white/60 ring-1 ring-rose-100/60",
          "dark:bg-slate-950/50 dark:ring-white/10",
        ].join(" ")}
      >
        {/* Heading with brand underline */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="relative"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            About
          </h2>
          <span
            aria-hidden="true"
            className="mt-2 block h-1 w-16 rounded-full bg-gradient-to-r from-rose-600 to-rose-400 dark:from-rose-400 dark:to-rose-300"
          />
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-4 max-w-3xl text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300"
        >
          Hi, I’m{" "}
          <span className="font-semibold text-rose-700 dark:text-rose-300">
            Adewole O. Isaiah
          </span>{" "}
          — a passionate software developer who loves building clean, reliable
          systems that actually work in the real world. I spend my time
          exploring both backend and frontend technologies — from Spring Boot
          and .NET APIs to React, Flowbite, and Vite. I enjoy solving tough
          technical problems, automating repetitive processes, and designing
          systems that scale neatly instead of chaotically. When I’m not coding,
          I’m probably experimenting with AI tools, studying Langflow, or
          refining how humans and software interact — because to me, good
          software feels invisible: it just works.
        </motion.p>

        {/* Skills */}
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.05, delayChildren: 0.05 }}
          className="mt-6 flex flex-wrap gap-2"
        >
          {skills.map((s) => (
            <motion.li key={s} variants={chipIn}>
              <span
                className={[
                  "inline-block text-sm px-3 py-1 rounded-full border",
                  // light theme: soft rose badge; dark: subtle glass with rose tint
                  "bg-rose-50 text-rose-900 border-rose-200",
                  "hover:bg-rose-100",
                  "dark:bg-white/5 dark:text-rose-200 dark:border-rose-500/30 dark:hover:bg-white/10",
                  // focus ring for keyboard users
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 dark:focus-visible:ring-rose-400",
                ].join(" ")}
                tabIndex={0}
              >
                {s}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}
