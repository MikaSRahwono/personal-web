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

// lib/data.ts — Changelog types + data

export const CHANGELOG_CATS = [
  "shipped",
  "learned",
  "improved",
  "events",
  "experiments",
] as const;
export type ChangelogCat = typeof CHANGELOG_CATS[number];

export type ChangelogEntry = {
  version: string; // vYY.MM[.patch]
  date: string;    // YYYY-MM-DD
  summary: string;
  categories: Partial<Record<ChangelogCat, string[]>>;
  metrics?: Record<string, string | number>;
  tags?: string[];
  links?: { title: string; url: string }[];
};

// Examples — replace/add as you like
export const changelog: ChangelogEntry[] = [
  {
    version: "v25.09",
    date: "2025-09-01",
    summary:
      "Portfolio refresh + SRE recap + Redirectly progress; turned internship outcomes into clear, measurable artifacts.",
    categories: {
      shipped: [
        "SRE Internship recap page (cost forecasting, Datadog dashboards, Jira automation)",
        "Redirectly analytics section (click trends & infra notes)",
        "Projects grid cleanup with tags and quick-links",
      ],
      improved: [
        "Consistent metrics on project cards (endpoints, tables, users)",
        "Copy polish across hero/experience to emphasize outcomes over tools",
      ],
      learned: [
        "Turning ops telemetry into business-facing metrics",
        "PrestoDB to cost insights pipeline: query → metric → alert",
      ],
      events: ["Internship retrospective published"],
    },
    metrics: { prestoQueries: 4, datadogCustomMetrics: 4, jiraAutoFlows: 1 },
    tags: ["site", "sre", "datadog", "go", "terraform"],
    links: [
      { title: "LinkedIn", url: "http://www.linkedin.com/in/mikasrahwono" },
      { title: "Grab (team context)", url: "https://www.grab.com/id/" },
    ],
  },
  {
    version: "v25.08",
    date: "2025-08-20",
    summary:
      "Redirectly beta hardens: CI/CD with multi-env isolation and serverless analytics stream.",
    categories: {
      shipped: [
        "CI/CD pipelines with dev/staging/prod isolation",
        "Auth via AWS Cognito for dashboard access",
        "Click analytics via DynamoDB Streams (Lambda triggers)",
      ],
      improved: ["Terraform modules for API Gateway, Lambda, DynamoDB, Redis"],
      learned: [
        "Event-driven serverless patterns on AWS",
        "Operational guardrails for low-cost, always-on services",
      ],
      experiments: ["Lambda@Edge link preview (paused)"],
    },
    metrics: { environments: 3 },
    tags: ["serverless", "aws", "redirectly", "iac"],
    links: [{ title: "Dicoding Cloud Architect Cert", url: "https://www.dicoding.com/certificates/1OP8N6LKQXQK" }],
  },
  {
    version: "v25.07",
    date: "2025-07-05",
    summary:
      "SRE deliverables shipped: Datadog dashboards, weekly alerts, and Jira ticketing automation.",
    categories: {
      shipped: [
        "Datadog dashboards to track top overbudget services",
        "Weekly cost/overspend alerts",
        "Jira ticketing automation using Go + Terraform + AWS Lambda",
      ],
      learned: [
        "Forecasting overspend from metrics",
        "Bridging platform telemetry with workflow automation",
      ],
      events: ["SRE internship wrap-up milestones"],
    },
    metrics: { dashboards: 1, alertsCadencePerWeek: 1 },
    tags: ["sre", "datadog", "go", "terraform", "aws"],
    links: [{ title: "Datadog", url: "https://www.datadoghq.com/" }],
  },
  {
    version: "v25.06",
    date: "2025-06-10",
    summary:
      "Started Redirectly: scalable serverless URL shortener with real-time analytics.",
    categories: {
      shipped: [
        "API Gateway + Lambda + DynamoDB + Redis cache",
        "React + Tailwind dashboard scaffold",
      ],
      learned: ["AWS Cognito user pools & protected routes"],
      events: ["Side project announcement"],
    },
    metrics: { services: 5 },
    tags: ["serverless", "react", "tailwind", "aws"],
    links: [
      { title: "Redis", url: "https://redis.io/" },
      { title: "DynamoDB Streams", url: "https://aws.amazon.com/dynamodb/streams/" },
    ],
  },
  {
    version: "v25.02",
    date: "2025-02-28",
    summary:
      "Farm Management System v1 complete: multi-entity ERD, analytics, and EC2 deploy.",
    categories: {
      shipped: [
        "75+ API endpoints, 20+ tables (auth, livestock stats/management, preferences)",
        "Frontend + backend deployed on AWS EC2 with docker-compose",
      ],
      improved: ["JWT handling & deployment docs"],
      learned: ["Ops trade-offs of EC2 vs. serverless for CRUD-heavy apps"],
    },
    metrics: { apiEndpoints: 75, tables: 20 },
    tags: ["backend", "django", "aws", "ec2", "docker"],
  },
  {
    version: "v24.12",
    date: "2024-12-15",
    summary:
      "Graduated Apple Developer Academy; shipped Manta Diving app with HPA + Grafana.",
    categories: {
      shipped: [
        "UIKit/SwiftUI app (pagination, pull-to-refresh, blog webviews, deep-linking, RxSwift)",
        "Prometheus + Grafana monitoring for 3+ services",
        "Kubernetes Horizontal Pod Autoscaler via Helm",
      ],
      events: ["Apple Developer Academy graduation"],
      learned: ["K8s autoscaling & service SLOs", "Observability fundamentals"],
    },
    metrics: { servicesManaged: 5, servicesMonitored: 3 },
    tags: ["ios", "kubernetes", "observability", "helm"],
    links: [
      { title: "Apple Developer Academy", url: "https://developer.apple.com/academies/" },
      { title: "Grafana", url: "https://grafana.com/" },
    ],
  },
  {
    version: "v24.08",
    date: "2024-08-20",
    summary:
      "Thesis project (KATALIS) shipped: marketplace + dashboards over a complex ERD.",
    categories: {
      shipped: [
        "30+ tables & 150+ endpoints (special-course unique steps, submissions, logs)",
        "Topic marketplace & role-based dashboards",
        "Infra: backend + Redis + reverse proxy + PostgreSQL",
      ],
      learned: ["Domain modeling for evolving workflows", "API pagination & caching"],
      events: ["Bachelor graduation (Universitas Indonesia)"],
    },
    metrics: { tables: 30, endpoints: 150 },
    tags: ["thesis", "django", "postgres", "redis"],
    links: [{ title: "Universitas Indonesia", url: "https://www.ui.ac.id/" }],
  },
  {
    version: "v23.12",
    date: "2023-12-10",
    summary:
      "Ops automation at scale: documents & reporting flows for 10+ faculties.",
    categories: {
      shipped: [
        "Power Automate flows for file routing/renaming across 10+ faculties",
        "Apps Script student report generator (80% faster)",
      ],
      learned: ["No/low-code orchestration; human-in-the-loop checks"],
      events: ["Part-time role completion at Universitas Indonesia"],
    },
    metrics: { requestsProcessed: 500, weeklyHoursSaved: 10, timeReductionPct: "70–80%" },
    tags: ["automation", "power-automate", "apps-script"],
  },
  {
    version: "v23.11",
    date: "2023-11-15",
    summary:
      "JakLingko e-ticketing features live; payments and deep-links unified in N’Lingko.",
    categories: {
      shipped: [
        "Dynamic bus seating patterns",
        "Refund/reschedule flows + Midtrans integration",
        "Deep-linking + webview for blogs/apps",
      ],
      events: ["Cross-team launch across mobile, backend, dashboard"],
      learned: ["Public-transport UX & reliability constraints"],
    },
    metrics: { integratedApps: 3, acquiredUsers: 5000 },
    tags: ["flutter", "payments", "public-transport"],
    links: [
      { title: "JakLingko Indonesia", url: "https://www.jaklingkoindonesia.co.id/id" },
      { title: "Midtrans", url: "https://midtrans.com/" },
    ],
  },
];
