import {
  SiGo,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiReact,
  SiPython,
  SiTailwindcss,
  SiVuedotjs,
  SiNuxt,
  SiPhp,
  SiNestjs,
} from "react-icons/si";

export const personalInfo = {
  name: "Chandra Adam Pratama",
  role: "Fullstack Developer",
  tagline:
    "Crafting scalable backends and seamless user experiences — from hospital systems to fintech platforms.",
  basedIn: "Yogyakarta, Indonesia",
  experience: "3+",
  email: "chandraadampratama@gmail.com",
  github: "https://github.com/ythchandraap",
  linkedin: "https://linkedin.com/in/ythchandraap",
  whatsapp: "https://wa.me/6285700383103",
};

export const skills = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "Nuxt", icon: SiNuxt },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Nest.js", icon: SiNestjs },
  { name: "Go", icon: SiGo },
  { name: "PHP", icon: SiPhp },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Redis", icon: SiRedis },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Python", icon: SiPython },
];

export const projects = [
  {
    title: "cashplus.id",
    description:
      "Built responsive, performant interfaces for a fintech partner platform handling pulsa, electricity token, and e-ticket transactions.",
    tech: ["Next.js", "React", "TypeScript", "REST API"],
    link: "https://cashplus.id",
  },
  {
    title: "Campaign Ads Manager",
    description:
      "A fintech payment platform serving thousands of users across Indonesia, with responsive interfaces integrated into real-time transaction flows.",
    tech: ["Next.js", "React", "TypeScript", "REST API"],
    link: "https://pandora.kuwakuwi.id",
  },
  {
    title: "Hospital Information System — RSUD Prambanan",
    description:
      "End-to-end system for patient management, medical records, and internal reporting, supporting daily operations for hundreds of medical staff.",
    tech: ["Next.js", "PHP", "CodeIgniter", "MySQL"],
  },
  {
    title: "onetap.id",
    description:
      "Digital marketplace for creators and entrepreneurs. Built backend services in Go with PostgreSQL and Redis for product distribution and transactions.",
    tech: ["Go", "PostgreSQL", "Redis", "REST API"],
    link: "https://onetap.id",
  },
  {
    title: "IoT Room Temperature Monitoring",
    description:
      "Web application for real-time room temperature monitoring, including client demos, installation, and enterprise onboarding.",
    tech: ["PHP", "MySQL", "IoT"],
  },
];

export const experiences = [
  {
    company: "RSUD Prambanan",
    role: "Full Stack Engineer",
    period: "Sep 2023 — Present",
    description: [
      "Architected and developed the front end and back end of a hospital application used by medical and administrative staff.",
      "Analyzed system data to refine data models and improve reliability across clinical workflows.",
      "Maintained legacy CodeIgniter (PHP) information systems to keep hospital operations running.",
    ],
  },
  {
    company: "PT Global Indo Multimedia (cashplus.id)",
    role: "Front End Developer",
    period: "Jun 2022 — Aug 2023",
    description: [
      "Built responsive Next.js interfaces for a fintech platform serving partner businesses.",
      "Delivered product features for partners to manage and operate their sales channels.",
      "Maintained and improved performance across the cashplus.id platform.",
    ],
  },
  {
    company: "CV Sahabat",
    role: "IT Support & Junior Developer",
    period: "Aug 2019 — May 2022",
    description: [
      "Helped build a web application for IoT-based room temperature monitoring.",
      "Demonstrated products and handled software installation and database setup for clients.",
      "Supported client onboarding by connecting technical and non-technical teams.",
    ],
  },
];
