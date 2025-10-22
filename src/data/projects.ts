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
      "SAP B1 integration portal with React/Tailwind + Spring Boot backend.",
    tags: ["React", "Tailwind", "Spring Boot"],
    href: "#",
  },
  {
    title: "FarmerBuyer",
    description:
      "Marketplace connecting farmers and buyers. Payments, JWT auth, dashboards.",
    tags: ["React", "Node", "PostgreSQL"],
    href: "#",
  },
  {
    title: "USSD Config UI",
    description: "Dynamic USSD menu builder with DataTables and Flowbite.",
    tags: ["React", "Flowbite", "TypeScript"],
  },
  {
    title: "Smart Device Offer",
    description:
      "Eligibility engine and MSAP integrations for telco device offer.",
    tags: ["Java", "Oracle", "EDA/HLR"],
  },
];
