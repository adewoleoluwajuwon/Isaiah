// src/sections/About.tsx
import Section from "../components/Section";
import {
  motion,
  type Variants,
  type Transition,
  useReducedMotion,
} from "framer-motion";

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

  const prefersReducedMotion = useReducedMotion();

  const float = prefersReducedMotion
    ? {}
    : {
        y: [0, -6, 0],
        transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
      };

  return (
    <Section id="about" className="scroll-mt-24">
      <div
        className={[
          "mx-auto max-w-6xl rounded-3xl px-6 py-12 md:py-14",
          "bg-white/60 ring-1 ring-rose-100/60",
          "dark:bg-slate-950/50 dark:ring-white/10",
        ].join(" ")}
      >
        {/* Heading */}
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

        {/* Content grid: text + image */}
        <div className="mt-6 grid items-start gap-10 md:grid-cols-2">
          {/* LEFT: Bio + skills */}
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-3xl text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300"
            >
              Hi, I’m{" "}
              <span className="font-semibold text-rose-700 dark:text-rose-300">
                Adewole O. Isaiah
              </span>
              — a passionate software developer who loves building clean,
              reliable systems that actually work in the real world. I work
              across backend and frontend: Spring Boot and .NET APIs, and React
              + Flowbite + TypeScript on the UI. I enjoy solving hard problems,
              automating repetitive tasks, and designing systems that scale
              neatly instead of chaotically. When I’m not coding, I’m
              experimenting with AI tooling, exploring Langflow, or refining
              human-software interaction—because good software should feel
              invisible: it just works.
            </motion.p>

            {/* Quick stats */}
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="mt-6 grid grid-cols-3 gap-4"
            >
              {[
                { k: "Years", v: "5+" },
                { k: "Projects", v: "30+" },
                {
                  k: "Domains",
                  v: "ERP • Enterprise Solutions • Systems Integration",
                },
              ].map(({ k, v }) => (
                <li
                  key={k}
                  className="rounded-2xl border border-rose-100/70 bg-white/70 p-4 text-center backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {k}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-50">
                    {v}
                  </p>
                </li>
              ))}
            </motion.ul>

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
                      "bg-rose-50 text-rose-900 border-rose-200 hover:bg-rose-100",
                      "dark:bg-white/5 dark:text-rose-200 dark:border-rose-500/30 dark:hover:bg-white/10",
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

          {/* RIGHT: Photo card */}
          <motion.div
            className="relative mx-auto w-full max-w-sm md:max-w-md"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1, ...float }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* glow frame */}
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-rose-400/40 via-fuchsia-400/40 to-amber-300/40 blur-xl dark:from-rose-500/20 dark:via-fuchsia-500/20 dark:to-amber-400/20"
            />
            <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-rose-200/60 dark:ring-white/10">
              <img
                src="/about.jpg"
                alt="Adewole at work — focused and shipping"
                className="block h-auto w-full object-cover"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 80vw, 420px"
              />
              {/* Label strip */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-sm font-medium text-white/95">
                  Builder, debugger, and UI polish enthusiast
                </p>
              </div>
            </div>

            {/* small caption chips (optional) */}
            <div className="mt-3 flex flex-wrap gap-2">
              {["Clean code", "A11y", "Perf-first"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-rose-200/60 bg-white/70 px-3 py-1 text-xs text-rose-900 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-rose-100"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
