// src/sections/Experience.tsx
import Section from "../components/Section";
import { motion, type Variants, type Transition } from "framer-motion";

export default function Experience() {
  const items = [
    {
      company: "International Data Management Services (IDM)",
      role: "Technofunctional SAP Consultant",
      dates: "2023 — Present",
      points: [
        "Customized SAP Business One workflows and reports to align with complex client requirements.",
        "Collaborated with backend developers to integrate SAP data with external React-based portals.",
        "Optimized enterprise system performance and supported end-user training.",
      ],
    },
    {
      company: "Daltha Technologies",
      role: "Frontend Developer",
      dates: "2022 — 2023",
      points: [
        "Built and maintained responsive React applications with TailwindCSS.",
        "Implemented reusable UI components using Flowbite React and TypeScript.",
        "Worked closely with designers to deliver performant and accessible user interfaces.",
      ],
    },
    {
      company: "FedEx Express Delivery",
      role: "SAP B1 Personnel",
      dates: "2018 — 2022",
      points: [
        "Configured and supported SAP Business One modules for daily operations.",
        "Developed and automated reports to improve operational efficiency.",
        "Ensured system stability through maintenance, troubleshooting, and data validation.",
      ],
    },
  ];

  const springy: Transition = { type: "spring", stiffness: 90, damping: 16 };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: springy },
  };

  const itemIn: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: springy },
  };

  return (
    <Section id="experience" className="scroll-mt-24">
      <div
        className={[
          "mx-auto max-w-6xl rounded-3xl px-6 py-12 md:py-14",
          "bg-white/60 ring-1 ring-rose-100/60",
          "dark:bg-slate-950/50 dark:ring-white/10",
        ].join(" ")}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="relative"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            Experience
          </h2>
          <span
            aria-hidden="true"
            className="mt-2 block h-1 w-24 rounded-full bg-gradient-to-r from-rose-600 to-rose-400 dark:from-rose-400 dark:to-rose-300"
          />
        </motion.div>

        <div className="relative mt-6">
          {/* vertical line — pronounced red on light, readable red on dark */}
          <div
            aria-hidden="true"
            className={[
              "absolute left-4 top-0 h-full w-0.5 rounded",
              // light: solid, vivid red with a soft glow
              "bg-rose-600 shadow-[0_0_12px_1px_rgba(225,29,72,0.35)]",
              // dark: lighter rose so it stands out on dark bg, with subtle glow
              "dark:bg-rose-300 dark:shadow-[0_0_10px_1px_rgba(253,164,175,0.25)]",
            ].join(" ")}
          />

          <motion.ol
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.08, delayChildren: 0.06 }}
            className="pl-10 space-y-8"
          >
            {items.map((it) => (
              <motion.li
                key={it.company}
                variants={itemIn}
                className="relative"
              >
                {/* dot */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[23px] mt-1 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full
                             bg-rose-600 ring-2 ring-white
                             dark:bg-rose-300 dark:ring-slate-950"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white/90 dark:bg-slate-950/90" />
                </span>

                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {it.dates}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {it.role} ·{" "}
                  <span className="text-rose-800 dark:text-rose-300">
                    {it.company}
                  </span>
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
                  {it.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </Section>
  );
}
