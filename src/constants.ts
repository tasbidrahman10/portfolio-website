/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Stat, ResearchProject, EngineeringProject } from './types.ts';

const image = (filename: string) => new URL(`../images/${filename}`, import.meta.url).href;

export const PROFILE_LINKS = {
  github: "https://github.com/tasbidrahman10",
  linkedin: "https://www.linkedin.com/in/tasbid-a-rahman-",
  email: "mailto:tasbidrahman555@gmail.com",
  cv: new URL("../CV.pdf", import.meta.url).href,
  fiverr: "https://www.fiverr.com/s/bdQy1k1",
  upwork: "https://www.upwork.com/freelancers/~010ea49a94884bffb5?mp_source=share",
};

export const HERO_DATA = {
  name: "Tasbid Al Rahman",
  role: "AI Systems Developer & ML Researcher",
  tagline: "Building production systems. Researching what makes them smarter.",
  photo: image("me.png"),
  location: "North South University · Dhaka, Bangladesh · Final Year CSE",
};

export const STATS: Stat[] = [
  { value: 3, label: "Research Projects Active" },
  { value: 3, label: "Universities Collaborating" },
  { value: 5, label: "Production Projects Shipped" },
  { value: 1, label: "Q1 Journal In Progress" },
];

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    id: "hcqsfl",
    title: "Hybrid Classical-Quantum Split Federated Learning for IoMT Intrusion Detection",
    acronym: "HCQ-SFL-IR",
    badges: ["Q1 Journal Target", "In Progress", "Multi-university"],
    collaboration: "NSU × BUET × KUET",
    abstract: "A privacy-preserving security framework for medical IoT devices that combines split learning, federated aggregation, and a quantum kernel layer for intrusion detection. Client encoder models process raw sensor data locally and share only compact 64-dimensional activation vectors with the server — raw patient data never leaves the device. Baseline models achieve ROC-AUC scores of 0.955–0.960 across four real-world datasets.",
    highlights: [
      "Architecture: ClientEncoder (38 → 128 → 64-dim) + server-side aggregation",
      "Privacy guarantee: Only activation vectors leave client devices",
      "Quantum layer: PennyLane kernel integration for intrusion classification",
      "Training: 20 federated rounds · pos_weight=10.0 for class imbalance",
      "Datasets: WESAD · PAMAP2 · MIMIC-IV · TON-IoT"
    ],
    poster: image("hcqsfl.png"),
    github: "https://github.com/tasbidrahman10/Hybrid-Classical-Quantum-Split-Federated-Learning"
  },
  {
    id: "efsm",
    title: "Empathetic Full-Duplex Speech LLM (EFSM)",
    acronym: "EFSM",
    badges: ["In Progress", "Deep Learning Research", "CSE465"],
    collaboration: "Research Project",
    abstract: "Fine-tuning Qwen2.5-Omni-7B on EmpatheticDialogues using QLoRA (4-bit, rank 16) to produce measurably more empathetic responses in real-time voice conversations. Only the 7B language backbone is trained - Whisper audio encoder and speech decoder remain frozen — keeping training feasible on constrained hardware.",
    highlights: [
      "Model: Qwen2.5-Omni-7B · QLoRA 4-bit quantization, rank 16",
      "Evaluation: EPITOME framework (LLM-graded 0–6)",
      "Metrics: WER on IEMOCAP/RAVDESS",
      "Human study: Likert-scale rating across 20 audio samples",
      "Framework: Gradio · EPITOME"
    ],
    poster: image("efsm.png"),
    github: "https://github.com/tasbidrahman10/empathetic-voice-llm"
  }
];

export const ENGINEERING_PROJECTS: EngineeringProject[] = [
  {
    id: "zoco",
    title: "Zoco",
    oneLine: "A full-stack clothing e-commerce platform with a customer storefront and a full admin dashboard for inventory, orders, and analytics.",
    longDescription: "A production-grade e-commerce platform built with Next.js 14 and Supabase. Covers inventory management by size variant, order tracking, and sales analytics. Authentication via NextAuth.js, SSR for SEO, Cloudinary for product image management, and Zod for form validation. Deployed on Vercel.",
    techStack: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma ORM", "NextAuth.js", "Supabase", "Tailwind CSS", "Cloudinary"],
    links: { github: "https://github.com/tasbidrahman10/zoco" },
    thumbnails: [
      image("zoco1.png"),
      image("zoco2.png"),
      image("zoco3.png"),
      image("zoco4.png"),
      image("zoco5.png"),
    ]
  },
  {
    id: "smart-patient",
    title: "Smart Patient Follow-Up & Health Trend Analytics",
    oneLine: "An automated patient follow-up system for local clinics — scheduling, SMS/email reminders, vitals classification, and PDF health reports.",
    longDescription: "Built for Bangladesh’s clinic context as a Junior Capstone project at NSU. n8n workflows automate appointment scheduling and send SMS and email reminders. Patient vitals are classified as Critical, Moderate, or Normal. Providers receive downloadable PDF health reports generated on demand.",
    techStack: ["Node.js", "Express.js", "MySQL", "n8n", "JWT", "Bootstrap"],
    links: { github: "https://github.com/tasbidrahman10/Smart-Patient-Follow-up-Health-Trend-Analytics" },
    thumbnails: [
      image("smart_patient1.png"),
      image("smart_patient2.png"),
      image("smart_patient3.png"),
    ]
  },
  {
    id: "shopify-analytics",
    title: "Shopify Analytics Dashboard with AI Insights",
    oneLine: "An intelligent, browser-first analytics dashboard for Shopify stores. Upload your orders CSV export and instantly get interactive charts, AI-generated insights, and forecasting.",
    longDescription: "Shopify store owners waste hours analyzing spreadsheets. I built a browser-based analytics platform where users upload a Shopify CSV and instantly get revenue trends, top products, geographic sales, RFM segmentation, inventory alerts, and retention heatmaps—no backend needed. An AI Insights panel (Gemini API) delivers 5 actionable recommendations.",
    techStack: ["Next.js 14", "TypeScript", "Recharts", "Bootstrap"],
    links: { github: "https://github.com/tasbidrahman10/shopify-dashboard" },
    thumbnails: [
      image("shopify1.png"),
      image("shopify2.png"),
      image("shopify3.png"),
      image("shopify4.png"),
    ]
  }
];

export const SKILLS = [
  {
    category: "AI / ML / Research",
    skills: ["PyTorch", "scikit-learn", "Federated Learning", "Quantum ML", "PennyLane", "Qiskit", "NumPy", "Pandas", "Matplotlib", "SciPy"]
  },
  {
    category: "Web / Backend",
    skills: ["Next.js 14", "Node.js", "Express.js", "REST APIs", "Prisma ORM", "NextAuth.js", "PHP"]
  },
  {
    category: "Databases & Infrastructure",
    skills: ["PostgreSQL", "MySQL", "Supabase", "Vercel", "Cloudinary", "Git"]
  },
  {
    category: "Automation & Languages",
    skills: ["n8n", "Python", "TypeScript", "JavaScript", "HTML / CSS"]
  }
];
