// src/sections/Experience.tsx
import Section from "../components/Section";
import {
  motion,
  type Variants,
  type Transition,
  useReducedMotion,
} from "framer-motion";

type ExpItem = {
  company: string;
  role: string;
  dates: string;
  points: string[];
  location?: string;
  tech?: string[]; // e.g. ["React","TypeScript","SAP B1"]
  // NOTE: no href, no logos (per your request)
};

export default function Experience() {
  const items: ExpItem[] = [
    {
      company: "International Data Management Services (IDM)",
      role: "Technofunctional SAP Consultant",
      dates: "2023 — Present",
      points: [
        "Customized SAP Business One workflows and reports to align with complex client requirements.",
        "Collaborated with backend developers to integrate SAP data with external React-based portals.",
        "Optimized enterprise system performance and supported end-user training.",
      ],
      location: "Lagos, NG · Hybrid",
      tech: ["SAP B1", "React", "TypeScript"],
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
      location: "Remote",
      tech: ["React", "TailwindCSS", "Flowbite", "TypeScript"],
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
      location: "On-site",
      tech: ["SAP B1", "SSMS", "MySQL"],
    },
  ];

  const prefersReduced = useReducedMotion();

  const springy: Transition = { type: "spring", stiffness: 90, damping: 16 };
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: springy },
  };
  const itemIn: Variants = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: springy },
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
        {/* Heading */}
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

        {/* Timeline */}
        <div className="relative mt-8">
          {/* center line on md+, left on mobile */}
          <div
            aria-hidden="true"
            className={[
              "absolute left-4 top-0 h-full w-0.5 rounded bg-rose-600 shadow-[0_0_12px_1px_rgba(225,29,72,0.35)]",
              "dark:bg-rose-300 dark:shadow-[0_0_10px_1px_rgba(253,164,175,0.25)]",
              "md:left-1/2 md:-translate-x-1/2",
            ].join(" ")}
          />

          <motion.ol
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={
              prefersReduced
                ? {}
                : { staggerChildren: 0.08, delayChildren: 0.06 }
            }
            className="space-y-10"
          >
            {items.map((it, idx) => {
              const isRight = idx % 2 === 0; // alternate on md+
              const techKey = (it.tech?.[0] || "").toLowerCase();

              return (
                <motion.li
                  key={`${it.company}-${idx}`}
                  variants={itemIn}
                  className="relative md:grid md:grid-cols-2"
                >
                  {/* timeline dot */}
                  <span
                    aria-hidden="true"
                    className={[
                      "absolute -left-[23px] mt-1 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-rose-600 ring-2 ring-white dark:bg-rose-300 dark:ring-slate-950",
                      "md:left-1/2 md:mt-0 md:-translate-x-1/2 md:top-7",
                    ].join(" ")}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/90 dark:bg-slate-950/90" />
                  </span>

                  {/* card */}
                  <div
                    className={[
                      isRight ? "md:col-start-2 md:pl-10" : "md:pr-10",
                    ].join(" ")}
                  >
                    <article
                      tabIndex={0}
                      className="group rounded-2xl border border-rose-100/70 bg-white/80 p-5 backdrop-blur-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-rose-500 dark:border-white/10 dark:bg-white/5"
                    >
                      {/* header row: dynamic tech icon + titles */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <TechIcon which={techKey} />
                          <div>
                            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                              {it.role}{" "}
                              <span className="text-slate-500">·</span>{" "}
                              <span className="text-rose-800 dark:text-rose-300">
                                {it.company}
                              </span>
                            </h3>
                            {(it.location || it.dates) && (
                              <p className="text-sm text-slate-600 dark:text-slate-400">
                                {it.location ? `${it.location} · ` : ""}
                                {it.dates}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* bullets */}
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
                        {it.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>

                      {/* tech tags */}
                      {it.tech && it.tech.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {it.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-rose-200/60 bg-white/70 px-2.5 py-1 text-xs text-rose-900 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-rose-100"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </article>
                  </div>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </div>
    </Section>
  );
}

/** Inline, dependency-free, theme-aware tech icon.
 *  Auto-picks based on first tech (react | sap | tailwind | typescript | node | mysql | ssms).
 *  Falls back to a neutral sparkle.
 */
function TechIcon({ which }: { which: string }) {
  const base =
    "h-9 w-9 rounded-xl ring-1 ring-rose-200/60 bg-white/80 p-1.5 flex items-center justify-center dark:ring-white/10 dark:bg-white/5";
  if (which.includes("react")) {
    return (
      <div className={base} aria-hidden="true" title="React">
        {/* React atom */}
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle
            cx="12"
            cy="12"
            r="2.2"
            className="text-rose-700 dark:text-rose-300"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            className="text-rose-600/70 dark:text-rose-300/60"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            transform="rotate(60 12 12)"
            className="text-rose-600/70 dark:text-rose-300/60"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            transform="rotate(120 12 12)"
            className="text-rose-600/70 dark:text-rose-300/60"
          />
        </svg>
      </div>
    );
  }
  if (which.includes("sap")) {
    return (
      <div className={base} aria-hidden="true" title="SAP">
        {/* Gear-ish */}
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            className="text-rose-700 dark:text-rose-300"
            d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z"
          />
          <path
            className="text-rose-600/70 dark:text-rose-300/60"
            d="M4 12h2m12 0h2M12 4v2m0 12v2m-6.5-9 1.7.98M16.8 7.98l1.7.98m-10 6.06 1.7-.98m6.5.98 1.7-.98"
          />
        </svg>
      </div>
    );
  }
  if (which.includes("tailwind")) {
    return (
      <div className={base} aria-hidden="true" title="TailwindCSS">
        {/* Flow-like waves */}
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path
            className="text-rose-700/90 dark:text-rose-300/90"
            d="M6 12c1.5-3 3.5-4.5 6-4.5S15 9 18 9c1.5 0 2.5-.5 3-1.5-1.5 3-3.5 4.5-6 4.5S12 10.5 9 10.5C7.5 10.5 6.5 11 6 12Zm0 4.5c1.5-3 3.5-4.5 6-4.5S15 13.5 18 13.5c1.5 0 2.5-.5 3-1.5-1.5 3-3.5 4.5-6 4.5S12 15 9 15c-1.5 0-2.5.5-3 1.5Z"
          />
        </svg>
      </div>
    );
  }
  if (which.includes("type")) {
    return (
      <div className={base} aria-hidden="true" title="TypeScript">
        {/* TS badge */}
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <rect
            x="3"
            y="4"
            width="18"
            height="16"
            rx="3"
            className="text-rose-100 dark:text-white/10"
          />
          <text
            x="12"
            y="16"
            textAnchor="middle"
            fontSize="8"
            className="fill-rose-700 dark:fill-rose-300 font-semibold"
          >
            TS
          </text>
        </svg>
      </div>
    );
  }
  if (which.includes("node")) {
    return (
      <div className={base} aria-hidden="true" title="Node.js">
        {/* Hex + N */}
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            className="text-rose-600/80 dark:text-rose-300/70"
            d="M12 3 4 7v10l8 4 8-4V7l-8-4Z"
          />
          <path
            className="text-rose-700 dark:text-rose-300"
            d="M9 15V9l6 6V9"
          />
        </svg>
      </div>
    );
  }
  if (
    which.includes("mysql") ||
    which.includes("ssms") ||
    which.includes("sql")
  ) {
    return (
      <div className={base} aria-hidden="true" title="Database">
        {/* DB cylinder */}
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <ellipse
            cx="12"
            cy="6.5"
            rx="7"
            ry="3"
            className="text-rose-700 dark:text-rose-300"
          />
          <path
            className="text-rose-600/70 dark:text-rose-300/60"
            d="M5 6.5v8c0 1.7 3.1 3 7 3s7-1.3 7-3v-8"
          />
          <path
            className="text-rose-600/70 dark:text-rose-300/60"
            d="M5 11c0 1.7 3.1 3 7 3s7-1.3 7-3"
          />
        </svg>
      </div>
    );
  }
  // default: sparkle
  return (
    <div className={base} aria-hidden="true" title="Experience">
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          className="text-rose-700 dark:text-rose-300"
          d="M12 3l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4Z"
        />
      </svg>
    </div>
  );
}
