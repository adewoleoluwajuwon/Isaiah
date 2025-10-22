import Section from "../components/Section";
import { Button } from "flowbite-react";

export default function Hero() {
  return (
    <Section id="hero" className="pt-28">
      <div className="relative">
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900" />
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Hello, I’m
          </p>
          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight">
            Your Name
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Frontend / Full‑Stack Developer • React • TypeScript • Tailwind
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button as="a" href="#projects">
              View Projects
            </Button>
            <Button as="a" href="/cv.pdf" color="light">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
