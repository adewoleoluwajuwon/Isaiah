import { motion } from "framer-motion";
import { Badge } from "flowbite-react";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={project.href ?? "#"}
      target={project.href ? "_blank" : undefined}
      rel={project.href ? "noreferrer" : undefined}
      className="block rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {project.image && (
        <img
          src={project.image}
          alt=""
          className="rounded-lg mb-4 aspect-video object-cover"
        />
      )}
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <Badge key={t} color="gray">
            {t}
          </Badge>
        ))}
      </div>
    </motion.a>
  );
}
