/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Stat, ResearchProject, EngineeringProject } from './types.ts';

const image = (filename: string) => `${import.meta.env.BASE_URL}images/${filename}`;

export const PROFILE_LINKS = {
  github: "https://github.com/tasbidrahman10",
  linkedin: "https://www.linkedin.com/in/tasbid-a-rahman-",
  email: "mailto:tasbidrahman555@gmail.com",
  cv: new URL("../Tasbid_Al_Rahman_CV.pdf", import.meta.url).href,
  fiverr: "https://www.fiverr.com/s/bdQy1k1",
  upwork: "https://www.upwork.com/freelancers/~010ea49a94884bffb5?mp_source=share",
};

export const HERO_DATA = {
  name: "Tasbid Al Rahman",
  role: "AI Safety Researcher · ML Systems",
  tagline: "Studying how machine learning systems fail, and building the tests that catch it.",
  photo: image("me.png"),
  location: "North South University · Dhaka, Bangladesh · Final Year CSE",
};

export const STATS: Stat[] = [
  { value: 2, label: "Research Projects Active" },
  { value: 3, label: "Universities Collaborating" },
  { value: 5, label: "Production Projects Shipped" },
  { value: 1, label: "Journal Manuscript Complete" },
];

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    id: "robust-bn-sfl",
    title: "Robust Batch Normalization in Federated Learning Against Malicious Client Updates on Healthcare Data",
    acronym: "Robust BN-SFL",
    badges: ["In Progress", "AI Security", "Multi-university"],
    collaboration: "NSU × BUET × KUET",
    abstract: "A security-focused Split Federated Learning framework investigating the reliability of distributed deep learning under heterogeneous data and malicious client updates. Using an ICU mortality-prediction task based on MIMIC-IV, this research examines how Batch Normalization (BN) statistics can become corrupted during federated aggregation, potentially making global models unusable. We implement and compare multiple BN-handling policies, introduce model-state validity checks, and evaluate their behavior under full and partial client participation. The goal is to understand the limitations of existing aggregation strategies and develop evidence-driven approaches to more reliable and robust federated learning.",
    highlights: [
      "Architecture: Split Federated Learning with client-side encoders and a shared server-side prediction head.",
      "Core focus: Batch Normalization state validity, statistical aggregation, and resilience to malicious model updates.",
      "BN policies: Comparative evaluation of legacy aggregation, a matched averaged-buffer control, local BN statistics, and fully local BN.",
      "Security mechanisms: Model-state validation checks for malformed tensors, non-finite values, negative running variances, and invalid counters.",
      "Experimental design: Controlled comparisons under full and partial client participation, using three random seeds and matched clean baselines.",
      "Dataset: MIMIC-IV v3.1 for in-hospital mortality prediction across ten ICU-derived silos.",
      "Ongoing research: Evaluating BN-buffer manipulation and model-weight poisoning attacks to identify remaining vulnerabilities and guide the design of more robust aggregation mechanisms.",
    ],
    poster: image("robust-bn-sfl.png"),
    github: "https://github.com/hassin070/mimic-sfl"
  },
  {
    id: "pooltrain",
    title: "PoolTrain: BatchNorm-Aware Low-Communication Training for Consumer GPU Pools",
    acronym: "PoolTrain",
    badges: ["In Progress", "Senior Capstone", "Distributed Training"],
    collaboration: "Senior capstone research (CSE499) · North South University",
    abstract: "Low-communication methods like Google DeepMind’s DiLoCo make it possible to train one model across poorly connected machines: each worker trains locally for many steps, and the copies are merged occasionally with an outer Nesterov-momentum step. These methods and their open-source implementations were built and tested almost entirely on language models, which have no BatchNorm running statistics. This project shows that on the BatchNorm-based vision models that most student and small-lab work relies on, existing DiLoCo-style pipelines mishandle these statistics. We are building PoolTrain, a platform that lets small groups pool their own GPUs over home internet and handles BatchNorm statistics correctly.",
    highlights: [
      "Identified an untested failure mode: With DiLoCo’s standard outer settings (learning rate 0.7, momentum 0.9), the first merge overshoots the workers’ average by 33%. Any BatchNorm running variance that drops by more than about 75% in one round is pushed below zero, making the model’s predictions invalid, even when every worker is honest.",
      "Audited real implementations: OpenDiLoCo and PyTorch’s torchft apply the outer step to parameters only, so BatchNorm buffers are never synchronized and merged weights are paired with stale statistics.",
      "Controlled experiments: 4 simulated DiLoCo workers, ResNet-18, 40 rounds, 5 buffer-handling strategies, 3 seeds each.",
      "CIFAR-10 (15 runs): Momentum-merged statistics went negative and made the model unusable for the first 3–4 rounds in 3 of 3 seeds, while every worker submitted valid values. The plain-averaging control never failed.",
      "CIFAR-10: The default used by existing tools (statistics never synchronized) finished lowest in every seed, 1.6–2.4 points below recomputing statistics after each merge.",
      "Tiny ImageNet (200 classes, 64×64, in progress): The first seed reproduces the early-round failure, with up to 37 negative variances and 0% accuracy in rounds 0–2.",
      "Positioning: Connects the DiLoCo family to prior work on outer momentum (SlowMo), BatchNorm in federated learning (FedBN, FixBN), and BatchNorm recalibration after weight averaging (SWA, REPAIR).",
      "System: A coordinator–client platform that pools members’ GPUs over home internet. It merges with correct BatchNorm handling, relays all traffic through a coordinator to get around ISP NAT, and tolerates workers dropping out during power cuts.",
      "Engineering: The whole dataset held on the GPU with GPU-side augmentation, mixed-precision training, and checkpoint/resume that exactly reproduces uninterrupted runs on free Colab and Kaggle GPUs.",
    ],
    stack: ["PyTorch", "Python", "FastAPI", "PostgreSQL / Supabase", "Docker", "Tailscale", "Next.js / TypeScript"],
    poster: image("pooltrain.png"),
    github: "https://github.com/tasbidrahman10/pool-train"
  }
];

export const ENGINEERING_PROJECTS: EngineeringProject[] = [
  {
    id: "efsm",
    title: "Empathetic Full-Duplex Speech LLM (EFSM)",
    oneLine: "A fine-tuned speech LLM that gives measurably more empathetic responses in real-time voice conversations.",
    longDescription: "Fine-tuned Qwen2.5-Omni-7B on EmpatheticDialogues using QLoRA (4-bit, rank 16). Only the 7B language backbone was trained; the Whisper audio encoder and speech decoder stayed frozen, which kept training feasible on constrained hardware. Evaluated with EPITOME empathy scoring (0–6), word error rate on IEMOCAP and RAVDESS, and a human rating study across 20 audio samples.",
    techStack: ["Python", "Qwen2.5-Omni-7B", "QLoRA", "Whisper", "Gradio", "EPITOME"],
    links: { github: "https://github.com/tasbidrahman10/empathetic-voice-llm" },
    thumbnails: [
      image("efsm.png"),
    ]
  },
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
    category: "AI / ML Research",
    skills: ["PyTorch", "scikit-learn", "Federated & Split Learning", "Distributed Training (DiLoCo)", "Robustness Evaluation", "LLM Fine-tuning (QLoRA)", "NumPy", "Pandas", "Matplotlib"]
  },
  {
    category: "Web / Backend",
    skills: ["Next.js", "Node.js", "Express.js", "FastAPI", "REST APIs", "Prisma ORM", "NextAuth.js"]
  },
  {
    category: "Databases & Infrastructure",
    skills: ["PostgreSQL", "MySQL", "Supabase", "Docker", "Tailscale", "Vercel", "Git"]
  },
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "HTML / CSS"]
  }
];
