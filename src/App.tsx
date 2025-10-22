import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function App() {
  useEffect(() => {
    // ensure at top on mount
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen text-gray-900 dark:bg-gray-950 dark:text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="py-10 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center gap-6 text-gray-500 dark:text-gray-400">
          <a
            href="https://github.com/adewoleoluwajuwon"
            aria-label="GitHub"
            className="hover:text-gray-900 dark:hover:text-gray-200"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/adewoleoluwajuwon"
            aria-label="LinkedIn"
            className="hover:text-gray-900 dark:hover:text-gray-200"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://x.com/adewoleoluwaju2/"
            aria-label="X"
            className="hover:text-gray-900 dark:hover:text-gray-200"
          >
            <Twitter size={20} />
          </a>
        </div>
        <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Adewole O. Isaiah
        </p>
      </footer>
    </div>
  );
}
