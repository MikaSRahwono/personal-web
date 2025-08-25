// lib/data.ts

/* ---------- Experience ---------- */
export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  description: string;
};

export const experiences: ExperienceItem[] = [
  {
    company: "Grab",
    role: "Site Reliability Engineer Intern",
    period: "Mar 2025 – Jun 2025",
    location: "Jakarta",
    logo: "/grab-logo.png",
    description:
      "Created PrestoDB queries and Go scripts to extract cost & budget data, pushed Datadog custom metrics. Set up dashboards and weekly alerts to track overbudget services, automated Jira ticketing with Go, Terraform, and AWS Lambda."
  },
  {
    company: "JakLingko Indonesia",
    role: "Flutter Mobile Developer Intern",
    period: "Aug 2023 – Jan 2024",
    location: "Jakarta",
    logo: "/jaklingko-logo.png",
    description:
      "Developed Jakarta e-Ticketing System Bus using Flutter, NestJS, and PostgreSQL. Built 5+ features including dynamic bus seating, deep-link integration, refund & reschedule, and Midtrans Payment Gateway. Integrated 3+ Kemenhub apps into N'Lingko, acquiring 5,000+ users."
  },
  {
    company: "Universitas Indonesia",
    role: "System Automation Engineer (Part-Time)",
    period: "Dec 2022 – Dec 2023",
    location: "Jakarta",
    logo: "/ui-logo.png",
    description:
      "Built a document automation workflow using Microsoft Power Automate, reducing processing time by 70% for 500+ Kampus Merdeka document requests. Automated routing, renaming, and report generation, cutting 10+ hours per week of manual work."
  },
  {
    company: "Universitas Indonesia",
    role: "Teaching Assistant",
    period: "Aug 2021 – Jan 2022",
    location: "Jakarta",
    logo: "/ui-logo.png",
    description:
      "Assisted students in Introduction to Digital System, supporting learning and evaluating assignments."
  }
];

/* ---------- Projects ---------- */
export type ProjectItem = {
  title: string;
  team: string;
  image: string;
  description: string;
  tags: string[];
};

export const projects: ProjectItem[] = [
//   {
//     title: "Redirectly – Scalable URL Shortener",
//     team: "Solo project",
//     image: "/redirectly.jpg",
//     description:
//       "Built a scalable serverless URL shortener using React, Tailwind, AWS Lambda, DynamoDB, Redis, and Cognito, with click analytics via Lambda triggers and DynamoDB Streams. Provisioned infra via Terraform and automated CI/CD pipelines.",
//     tags: ["React", "Tailwind", "AWS Lambda", "DynamoDB", "Terraform"]
//   },
//   {
//     title: "Farm Livestock Management System",
//     team: "Team project",
//     image: "/livestock.jpg",
//     description:
//       "Designed and implemented farm management features with 20+ database tables and 75+ API endpoints, covering authentication, livestock stats, and preferences. Deployed with Docker Compose on AWS EC2.",
//     tags: ["Django", "PostgreSQL", "AWS EC2", "Docker Compose"]
//   },
  {
    title: "Special Course Management (Katalis)",
    team: "Thesis project",
    image: "/katalis.jpg",
    description:
      "Developed a system for managing special courses at Universitas Indonesia with 30+ database tables and 150+ endpoints, featuring a thesis marketplace, submissions, logs, and dashboards. Managed multi-service deployment with Redis, PostgreSQL, and reverse proxy.",
    tags: ["Django", "Redis", "PostgreSQL", "System Design"]
  },
  {
    title: "Presensi Pidie Mobile App",
    team: "Team project",
    image: "/presensi.jpg",
    description:
      "Cross-platform attendance app for civil servants using Flutter, Django REST Framework, and PostgreSQL. Implemented JWT auth with token refresh, structured state management with Provider, and clean UI design.",
    tags: ["Flutter", "Django REST", "PostgreSQL", "JWT"]
  },
  {
    title: "UInfo – Mahasiswa UI App",
    team: "Team project",
    image: "/uinfo.jpg",
    description:
      "Revamped UI and database of UInfo mobile app using Flutter, Provider, and Firebase. Delivered integrated access to scholarships, competitions, and events, growing to 500+ active users on App Store and Play Store.",
    tags: ["Flutter", "Firebase", "Provider", "Mobile Dev"]
  },
  {
    title: "Sistem Informasi Terintegrasi BEM UI",
    team: "Team project",
    image: "/bemui.jpg",
    description:
      "Built an integrated system for BEM UI administration including reimbursement, publication, correspondence, and inventory. Developed 40+ API endpoints and 20+ tables, reducing manual work by ~50%.",
    tags: ["Django", "PostgreSQL", "REST API", "Leadership"]
  }
];

/* ---------- Blogs ---------- */
export type BlogItem = {
  title: string;
  href: string;
  desc: string;
};

export const blogs: BlogItem[] = [
  {
    title: "Optimizing Code Performance with Profiling Tools: An Introduction to Grafana and Prometheus",
    href: "https://medium.com/@mikasuryof/optimizing-code-performance-with-profiling-tools-an-introduction-to-grafana-and-prometheus-ca710455542e",
    desc: "Quick introduction to Grafana and Prometheus."
  },
  {
    title: "Managing Your Team in Software Development Projects",
    href: "https://medium.com/@mikasuryof/managing-your-team-in-software-development-projects-c35fd86b6d4b",
    desc: "Project management development tools."
  },
  {
    title: "Master your Dev Ops Skills: Efficiency with CI/CD, Configuration Management, Docker Orchestration, and Clustering",
    href: "https://medium.com/@mikasuryof/master-your-dev-ops-skills-efficiency-with-ci-cd-configuration-management-docker-orchestration-8c1decf36086",
    desc: "How to configure CI CD and mastering, docker orchestration, and clustering"
  }
];

/* ---------- Socials ---------- */
export const socials = [
  { label: "GitHub", href: "https://github.com/mikasrahwono" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mikasrahwono/" },
  { label: "Email", href: "mailto:mikasuryof@gmail.com" },
  { label: "Instagram", href: "https://instagram.com/mikasuryofakhrir" }
];

// lib/data.ts (append)

export type TechIcon = { label: string; src: string };

export const techIcons: TechIcon[] = [
  // Tools & Frameworks
  { label: "Go", src: "/tech/go.png" },
  { label: "Python", src: "/tech/python.png" },
  { label: "Kubernetes", src: "/tech/kubernetes.png" },
  { label: "Helm", src: "/tech/helm.png" },
  { label: "Jenkins", src: "/tech/jenkins.png" },
  { label: "Terraform", src: "/tech/terraform.png" },
  { label: "RabbitMQ", src: "/tech/rabbitmq.png" },
  { label: "Docker", src: "/tech/docker.png" },

  // Cloud
  { label: "AWS", src: "/tech/aws.png" },
  { label: "EKS", src: "/tech/aws-eks.png" },
  { label: "ECS", src: "/tech/aws-ecs.png" },
  { label: "S3", src: "/tech/aws-s3.png" },
  { label: "RDS", src: "/tech/aws-rds.png" },
  { label: "Lambda", src: "/tech/aws-lambda.png" },
  { label: "Cognito", src: "/tech/aws-cognito.png" },
  { label: "GCP", src: "/tech/gcp.png" },

  // Monitoring
  { label: "Prometheus", src: "/tech/prometheus.png" },
  { label: "Grafana", src: "/tech/grafana.png" },
  { label: "Datadog", src: "/tech/datadog.png" },
  { label: "Superset", src: "/tech/superset.png" },
  { label: "Kibana", src: "/tech/kibana.png" },

  // Other Tech
  { label: "PostgreSQL", src: "/tech/postgresql.png" },
  { label: "Flutter", src: "/tech/flutter.png" },
  { label: "Swift", src: "/tech/swift.png" },
  { label: "React", src: "/tech/react.png" },
  { label: "Next.js", src: "/tech/nextjs.png" },
  { label: "TypeScript", src: "/tech/typescript.png" }
];


export type OrgItem = {
  org: string;
  role: string;
  period: string;
  photos: string[];   // multiple photo paths
  description: string;
};

export const organizations: OrgItem[] = [
  {
    org: "BEM Fasilkom Universitas Indonesia",
    role: "President",
    period: "2023",
    photos: [
      "/orgs/bem-pacil-2.jpg",
      "/orgs/bem-pacil-3.jpg",
      "/orgs/bem-pacil-1.jpg"
    ],
    description:
      "Led 150+ members and managed 50+ programs including COMPFEST 15, PERAK, BETIS, and more."
  },
  {
    org: "BEM Universitas Indonesia",
    role: "Head of IT and Multimedia Beureau",
    period: "2022",
    photos: [
      "/orgs/bemui-2.jpg",
      "/orgs/bemui-3.jpg",
      "/orgs/bemui-1.jpg"
    ],
    description:
      "Coordinated the student team to ship new mobile features, data integrations, and content workflows."
  },
];
