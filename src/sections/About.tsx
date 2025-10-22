import Section from "../components/Section";

export default function About() {
  const skills = [
    "React",
    "TypeScript",
    "TailwindCSS",
    "Node.js",
    "Spring Boot",
    "PostgreSQL",
  ];
  return (
    <Section id="about">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl">
        I build fast, delightful web apps with modern stacks. I focus on clean
        component design, accessible UI, and pragmatic DX.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className="text-sm rounded-full border border-gray-200 dark:border-gray-800 px-3 py-1"
          >
            {s}
          </span>
        ))}
      </div>
    </Section>
  );
}
