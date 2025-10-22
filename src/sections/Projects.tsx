// src/sections/Projects.tsx
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { motion, type Variants, type Transition } from "framer-motion";

export default function Projects() {
  const springy: Transition = { type: "spring", stiffness: 90, damping: 16 };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: springy },
  };

  const cardIn: Variants = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: springy },
  };

  return (
    <Section id="projects" className="scroll-mt-24">
      <div
        className={[
          "mx-auto max-w-6xl rounded-3xl px-6 py-12 md:py-14",
          // subtle surface so content stays readable on any background
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
            Projects
          </h2>
          <span
            aria-hidden="true"
            className="mt-2 block h-1 w-20 rounded-full bg-gradient-to-r from-rose-600 to-rose-400 dark:from-rose-400 dark:to-rose-300"
          />
        </motion.div>

        {/* Cards grid with stagger */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.06, delayChildren: 0.06 }}
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((p) => (
            <motion.div key={p.title} variants={cardIn}>
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>

        {/* Professional Note */}
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-10 text-center text-sm leading-relaxed text-gray-600 dark:text-gray-400"
        >
          <span className="font-medium text-gray-800 dark:text-gray-200">
            Note:
          </span>{" "}
          Some of the projects listed above are part of ongoing or proprietary
          work and are therefore not publicly accessible. Detailed demos or
          walkthroughs can be provided privately upon request.
        </motion.p>
      </div>
    </Section>
  );
}
