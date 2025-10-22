export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "SyncSAP Portal",
    description:
      "An SAP B1 integration portal with React + Tailwind frontend and Spring Boot backend. Includes authentication, dashboard UI, and real-time data sync with SAP.",
    tags: ["React", "Tailwind", "Spring Boot", "SAP B1"],
    href: "#",
  },
  {
    title: "FarmerBuyer Marketplace",
    description:
      "A React-powered marketplace connecting farmers and buyers, featuring secure payments, JWT authentication, and admin dashboards.",
    tags: ["React", "Node.js", "PostgreSQL", "JWT Auth"],
    href: "#",
  },
  {
    title: "USSD Config UI",
    description:
      "A dynamic React application for configuring USSD menus using Flowbite components and DataTables for live menu management.",
    tags: ["React", "Flowbite", "TypeScript", "DataTables"],
    href: "#",
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
];
