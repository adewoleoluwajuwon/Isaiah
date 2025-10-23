// src/sections/Projects.tsx
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { projects as allProjects } from "../data/projects";
import {
  motion,
  type Variants,
  type Transition,
  useReducedMotion,
} from "framer-motion";
import { useMemo, useState } from "react";

export default function Projects() {
  const springy: Transition = { type: "spring", stiffness: 90, damping: 16 };
  const prefersReduced = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: springy },
  };

  const cardIn: Variants = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: springy },
  };

  // ——— UI state ———
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [gridView, setGridView] = useState(true);

  // Derive unique tags (works if items optionally have p.tags: string[])
  const allTags = useMemo(() => {
    const t = new Set<string>();
    for (const p of allProjects) {
      (p as any).tags?.forEach((x: string) => x && t.add(x));
      // bonus: accept "stack" arrays too if present
      (p as any).stack?.forEach((x: string) => x && t.add(x));
      // minimal set to avoid empty toolbar
    }
    return Array.from(t).sort((a, b) => a.localeCompare(b));
  }, []);

  // Optional: featured first if any project has featured: true
  const featured = useMemo(() => allProjects.find((p: any) => p.featured), []);
  const projects = useMemo(() => {
    // Filter logic
    const norm = (s: string) => s.toLowerCase();
    return allProjects
      .filter((p: any) => {
        const q = norm(query);
        const hay = `${p.title ?? ""} ${p.description ?? ""} ${(
          p.tags ?? []
        ).join(" ")} ${(p.stack ?? []).join(" ")}`.toLowerCase();
        const matchesQuery = q ? hay.includes(q) : true;
        const matchesTag = activeTag
          ? (p.tags ?? p.stack ?? []).some((t: string) => t === activeTag)
          : true;
        return matchesQuery && matchesTag;
      })
      .sort((a: any, b: any) => {
        // keep featured at top, preserve incoming order otherwise
        const af = a.featured ? 0 : 1;
        const bf = b.featured ? 0 : 1;
        return af - bf;
      });
  }, [query, activeTag]);

  // ——— Anim helpers ———
  const stagger = prefersReduced
    ? {}
    : { staggerChildren: 0.06, delayChildren: 0.06 };

  return (
    <Section id="projects" className="scroll-mt-24">
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
            Projects
          </h2>
          <span
            aria-hidden="true"
            className="mt-2 block h-1 w-20 rounded-full bg-gradient-to-r from-rose-600 to-rose-400 dark:from-rose-400 dark:to-rose-300"
          />
        </motion.div>

        {/* Toolbar: search + tags + view toggle */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
        >
          {/* Search */}
          <label className="relative block md:w-1/2">
            <span className="sr-only">Search projects</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, tech, or description…"
              className="w-full rounded-xl border border-rose-200/70 bg-white/80 px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 backdrop-blur-sm focus:ring-2 focus:ring-rose-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
              ⌘K
            </span>
          </label>

          {/* View toggle */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => setGridView(true)}
              className={[
                "rounded-lg px-3 py-2 text-sm",
                gridView
                  ? "bg-rose-600 text-white"
                  : "border border-rose-200/60 bg-white/70 text-rose-900 hover:bg-rose-50 dark:border-white/10 dark:bg-white/5 dark:text-rose-100",
              ].join(" ")}
              aria-pressed={gridView}
            >
              Grid
            </button>
            <button
              onClick={() => setGridView(false)}
              className={[
                "rounded-lg px-3 py-2 text-sm",
                !gridView
                  ? "bg-rose-600 text-white"
                  : "border border-rose-200/60 bg-white/70 text-rose-900 hover:bg-rose-50 dark:border白/10 dark:bg-white/5 dark:text-rose-100".replace(
                      "白",
                      "white"
                    ), // keep Tailwind class valid
              ].join(" ")}
              aria-pressed={!gridView}
            >
              List
            </button>
          </div>
        </motion.div>

        {/* Tag chips (render only if we actually have tags) */}
        {allTags.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mt-4 flex flex-wrap gap-2"
          >
            <button
              onClick={() => setActiveTag(null)}
              className={[
                "rounded-full border px-3 py-1 text-sm",
                activeTag === null
                  ? "bg-rose-600 text-white border-transparent"
                  : "border-rose-200/60 bg-white/70 text-rose-900 hover:bg-rose-50 dark:border-white/10 dark:bg-white/5 dark:text-rose-100",
              ].join(" ")}
            >
              All
            </button>
            {allTags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag((cur) => (cur === t ? null : t))}
                className={[
                  "rounded-full border px-3 py-1 text-sm",
                  activeTag === t
                    ? "bg-rose-600 text-white border-transparent"
                    : "border-rose-200/60 bg-white/70 text-rose-900 hover:bg-rose-50 dark:border-white/10 dark:bg-white/5 dark:text-rose-100",
                ].join(" ")}
              >
                {t}
              </button>
            ))}
          </motion.div>
        )}

        {/* Featured card (optional, only if any project.featured) */}
        {featured && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mt-8"
          >
            <div className="rounded-2xl border border-rose-200/60 bg-gradient-to-br from-white/90 to-white/70 p-1 backdrop-blur dark:border-white/10 dark:from-white/10 dark:to-white/5">
              <div className="rounded-2xl bg-white/90 p-4 dark:bg-white/5">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-900 dark:bg-rose-400/20 dark:text-rose-100">
                  <span
                    className="h-2 w-2 rounded-full bg-rose-600"
                    aria-hidden="true"
                  />
                  Featured
                </div>
                <ProjectCard project={featured as any} />
              </div>
            </div>
          </motion.div>
        )}

        {/* Cards grid / list */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={stagger}
          className={[
            "mt-6",
            gridView
              ? "grid grid-cols-1 gap-6 md:grid-cols-2"
              : "flex flex-col gap-4",
          ].join(" ")}
        >
          {projects.map((p: any) => (
            <motion.div
              key={p.title}
              variants={cardIn}
              className={!gridView ? "p-2" : ""}
            >
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
