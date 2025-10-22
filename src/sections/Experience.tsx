import Section from "../components/Section";

export default function Experience() {
  const items = [
    {
      company: "Morph Innovations",
      role: "Senior Engineer",
      dates: "2023 — Present",
      points: ["Built SAP integrations", "Led React/Tailwind UI work"],
    },
    {
      company: "Acme Co",
      role: "Frontend Dev",
      dates: "2021 — 2023",
      points: ["Shipped design system", "Improved Lighthouse scores +35%"],
    },
  ];
  return (
    <Section id="experience">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        Experience
      </h2>
      <div className="relative mt-6">
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-800" />
        <div className="pl-10 space-y-8">
          {items.map((it) => (
            <div key={it.company} className="">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {it.dates}
              </div>
              <h3 className="text-lg font-semibold">
                {it.role} · {it.company}
              </h3>
              <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-300">
                {it.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
