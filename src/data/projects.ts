export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Asset Management App",
    description: "A Java, Springboot, thymleaf app to manage assets",
    tags: ["C#", ".NET Framework", "SQL"],
    href: "https://asset-mgt.onrender.com",
  },
  {
    title: "SyncSAP Portal",
    description:
      "An SAP B1 integration portal with React + Tailwind frontend and Spring Boot backend. Includes authentication, dashboard UI, and real-time data sync with SAP. (WIP)",
    tags: ["React", "Tailwind", "Spring Boot", "SAP B1"],
    href: "#",
  },
  {
    title: "React, Tailwind, Flowbite Website",
    description:
      "A React-powered modern website showcasing responsive design and Flowbite UI components.",
    tags: ["React", "Tailwind", "Flowbite"],
    href: "https://idm-phi.vercel.app/",
  },
  {
    title: "HelpDesk App (WIP)",
    description:
      "A work-in-progress helpdesk app built with Next.js. Features include ticket management, team collaboration, and user authentication.",
    tags: ["Next.js", "React", "Tailwind", "TypeScript"],
    href: "https://helpdesk-eta-three.vercel.app/",
  },
  {
    title: "Job Portal Preview",
    description:
      "A client preview for a modern job portal app featuring candidate management, job listings, and responsive UI.",
    tags: ["Next.js", "React", "Tailwind", "Vercel"],
    href: "https://preview-khaki-eta.vercel.app/",
  },
  {
    title: "SyncPOS Backend System",
    description:
      "Backend system for a supermarket POS platform with modules for goods receipt, purchase orders, and warehouse tracking.",
    tags: ["Spring Boot", "MySQL", "REST APIs"],
    href: "#",
  },
  {
    title: "Secure QR Code Generator",
    description:
      "A Node.js + .NET service that dynamically generates secure IRN QR codes with API-based certificate and key handling.",
    tags: ["Node.js", ".NET", "API Integration"],
    href: "#",
  },
  {
    title: "Smart Device Offer Engine",
    description:
      "A Java-based eligibility and MSAP integration engine used in telecom device offer workflows.",
    tags: ["Java", "Oracle", "Integration"],
    href: "#",
  },
  {
    title: "Shopping List App",
    description:
      "A simple, responsive shopping list app built with vanilla JavaScript and local storage support.",
    tags: ["JavaScript", "HTML", "CSS"],
    href: "https://adewoleoluwajuwon.github.io/gitable-shopping-list/",
  },
  {
    title: "Chuck Norris Random Joke App",
    description:
      "A fun web app that fetches random Chuck Norris jokes from an external API using async JavaScript.",
    tags: ["JavaScript", "API", "HTML", "CSS"],
    href: "https://adewoleoluwajuwon.github.io/ChuckNorrisRandomJokeApp/",
  },
  {
    title: "Cross-Database Engine (.NET)",
    description:
      "A .NET Framework-based cross-database import/export engine for data migration and synchronization between SQL systems.",
    tags: ["C#", ".NET Framework", "SQL"],
    href: "https://github.com/adewoleoluwajuwon/-Cross-Database-Import-Export-Engine",
  },
];
