export const experience = [
  {
    company: 'Techechelons',
    companySuffix: 'Infosolutions',
    role: 'Full Stack Developer Intern',
    period: 'Dec 2025 - Present',
    location: 'Remote',
    summary:
      'Building Lektus - a production SaaS platform with separate intranet, CRM, recruitment, admin, and candidate portals, structured as a Turborepo + pnpm monorepo.',
    highlights: [
      'Shipped 15+ full-stack modules in a 3-person team: job management, applicant tracking, role-based workflows, leave & attendance, claims, HR policies, communications, and helpdesk.',
      'Built REST APIs with Fastify + TypeScript on PostgreSQL (Prisma), with Redis caching and AWS S3 file storage.',
      'Built responsive React interfaces with Redux Toolkit, MUI, Formik, and Axios.',
      'Cut redundant API calls on tab switch with a canonical tab structure - each sub-tab fetches only on activation.',
    ],
    stack: ['React', 'TypeScript', 'Fastify', 'PostgreSQL', 'Prisma', 'Redis', 'AWS'],
  },
];

export const skills = [
  { title: 'Languages', items: 'JavaScript, TypeScript, Java' },
  {
    title: 'Backend',
    items:
      'Node.js, Fastify, Express.js, REST APIs, Prisma ORM, Zod, JWT, RBAC, BullMQ, Socket.IO',
  },
  {
    title: 'Frontend',
    items: 'React, Redux Toolkit, Vite, Tailwind CSS, Material UI, Formik, Axios',
  },
  { title: 'Databases', items: 'PostgreSQL, Redis, MongoDB' },
  {
    title: 'Cloud & DevOps',
    items: 'AWS (EC2, S3), Docker, Linux, Nginx, PM2, GitHub Actions',
  },
  {
    title: 'Architecture',
    items: 'Turborepo, pnpm Workspaces, OpenAPI/Swagger, Caching, Background Jobs',
  },
];

export const milestones = [
  {
    title: 'Education',
    heading: 'MCA - Savitribai Phule Pune University',
    detail: '2024 - 2026 · Pune, India',
  },
  {
    title: 'Achievement',
    heading: '2nd Runner Up - TalentFarm.ai Hackathon, DYPDPU',
    detail: 'Led frontend and backend integration for an algorithmic trading platform.',
  },
];
