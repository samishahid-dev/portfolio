"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  CircleDollarSign,
  Globe2,
  Newspaper,
  Pill,
  Smartphone,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "PlotVisitor",
    category: "Commercial Property-Tech Platform",
    description:
      "Commercial property technology platform developed as part of my Software Developer role at PlotVisitor. I worked across responsive frontend interfaces, property listing workflows, Firebase services, authentication, account features, Google Maps integration and production build troubleshooting.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Google Maps",
    ],
    liveUrl: "https://plotvisitor.com",
    github: null,
  },
  {
    title: "Expense Tracker",
    category: "Flutter Mobile Application",
    description:
      "A Flutter expense and budget management application with structured feature architecture, cloud persistence, budget tracking, notifications and Firebase integration.",
    stack: ["Flutter", "Dart", "Firebase", "Firestore"],
    liveUrl: null,
    github: "https://github.com/samishahid-dev/expense-tracker",
  },
  {
    title: "Smart Traffic Violation Detection",
    category: "AI & Computer Vision",
    description:
      "AI-powered desktop traffic monitoring system capable of detecting helmet violations, signal jumping and wrong-way driving across multiple camera feeds with automated evidence and challan generation.",
    stack: [
      "Python",
      "OpenCV",
      "YOLOv8",
      "PyQt5",
      "SQLite",
      "NumPy",
    ],
    liveUrl: null,
    github:
      "https://github.com/samishahid-dev/Smart-Traffic-Violation-Detection-System",
  },
  {
    title: "Pharmacy Billing System",
    category: "Desktop Application",
    description:
      "Cross-platform pharmacy billing and inventory system featuring medicine management, real-time stock tracking, checkout workflows, sales reporting and print-ready invoices.",
    stack: ["React", "Electron", "JavaScript", "Tailwind CSS"],
    liveUrl: null,
    github: null,
  },
  {
    title: "AI Fake News Detection",
    category: "Machine Learning Application",
    description:
      "Machine learning powered news verification application using TF-IDF and Scikit-learn classification with Flask deployment and external news cross-checking.",
    stack: [
      "Python",
      "Scikit-learn",
      "Flask",
      "Machine Learning",
      "NewsAPI",
    ],
    liveUrl: null,
    github: "https://github.com/samishahid-dev/AI-News-App",
  },
];

function PlotVisitorVisual() {
  return (
    <div className="project-browser">
      <div className="browser-top">
        <div className="flex gap-1.5">
          <span />
          <span />
          <span />
        </div>

        <div className="browser-address">
          <Globe2 size={12} />
          plotvisitor.com
        </div>
      </div>

      <div className="browser-screen relative">
        <Image
          src="/projects/plotvisitor.png"
          alt="PlotVisitor property technology platform"
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 650px"
        />
      </div>
    </div>
  );
}

function ExpenseVisual() {
  return (
    <div className="expense-visual">
      <div className="phone-shell">
        <div className="phone-screen">
          <div className="expense-header">
            <div>
              <span>Available balance</span>
              <strong>Rs. 84,320</strong>
            </div>
            <CircleDollarSign size={28} />
          </div>

          <div className="expense-stats">
            <div>
              <span>Income</span>
              <strong>120K</strong>
            </div>

            <div>
              <span>Spent</span>
              <strong>35.6K</strong>
            </div>
          </div>

          <div className="expense-chart">
            {[45, 70, 52, 82, 64, 92, 72].map((height, index) => (
              <span key={index} style={{ height: `${height}%` }} />
            ))}
          </div>

          <div className="expense-list">
            <div>
              <span>Food</span>
              <strong>- 2,450</strong>
            </div>
            <div>
              <span>Transport</span>
              <strong>- 1,200</strong>
            </div>
            <div>
              <span>Shopping</span>
              <strong>- 4,850</strong>
            </div>
          </div>
        </div>
      </div>

      <Smartphone className="absolute right-8 top-8 opacity-20" size={80} />
    </div>
  );
}

function TrafficVisual() {
  return (
    <div className="traffic-visual">
      <div className="traffic-top">
        <div>
          <span className="traffic-live-dot" />
          LIVE CAMERA
        </div>

        <span>CAM 02</span>
      </div>

      <div className="traffic-scene">
        <div className="road-line road-line-a" />
        <div className="road-line road-line-b" />

        <div className="detect-box detect-box-one">
          <span>Helmet Violation</span>
          <small>94%</small>
        </div>

        <div className="detect-box detect-box-two">
          <span>Vehicle</span>
          <small>98%</small>
        </div>

        <div className="scan-line" />
      </div>

      <div className="traffic-footer">
        <BrainCircuit size={18} />
        YOLOv8 Detection Engine
      </div>
    </div>
  );
}

function PharmacyVisual() {
  return (
    <div className="pharmacy-visual">
      <div className="pos-sidebar">
        <Pill size={28} />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="pos-main">
        <div className="pos-header">
          <div>
            <small>Pharmacy POS</small>
            <strong>Inventory</strong>
          </div>

          <div className="pos-search">Search medicine...</div>
        </div>

        <div className="inventory-list">
          {[
            ["Panadol", "42"],
            ["Augmentin", "18"],
            ["Brufen", "27"],
            ["Calpol", "36"],
          ].map(([name, stock]) => (
            <div key={name}>
              <span>{name}</span>
              <small>{stock} in stock</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FakeNewsVisual() {
  return (
    <div className="news-visual">
      <div className="news-top">
        <Newspaper size={24} />
        AI News Verification
      </div>

      <div className="news-article">
        <span>ARTICLE ANALYSIS</span>

        <div className="news-lines">
          <i />
          <i />
          <i />
        </div>

        <div className="news-result">
          <BrainCircuit size={28} />

          <div>
            <small>Prediction</small>
            <strong>Likely Authentic</strong>
          </div>

          <b>91%</b>
        </div>
      </div>
    </div>
  );
}

function ProjectVisual({ title }: { title: string }) {
  if (title === "PlotVisitor") return <PlotVisitorVisual />;
  if (title === "Expense Tracker") return <ExpenseVisual />;
  if (title === "Smart Traffic Violation Detection")
    return <TrafficVisual />;
  if (title === "Pharmacy Billing System") return <PharmacyVisual />;

  return <FakeNewsVisual />;
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#f6f3ed] px-6 py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-3xl"
        >
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-violet-600">
            Selected Work
          </p>

          <h2 className="text-4xl font-black tracking-[-0.05em] text-zinc-950 sm:text-5xl lg:text-6xl">
            Projects built around
            <span className="block text-zinc-400">
              real engineering problems.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600">
            From commercial property technology to mobile applications,
            desktop systems and computer vision — these projects represent the
            different areas I&apos;ve worked across.
          </p>
        </motion.div>

        <div className="space-y-28">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.18,
              }}
              transition={{
                duration: 0.7,
              }}
              className={`project-showcase ${
                index % 2 !== 0 ? "project-showcase-reverse" : ""
              }`}
            >
              <div className="project-info">
                <div className="project-meta-row">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{project.category}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-black/[0.08] bg-white/60 px-3 py-2 text-xs font-bold text-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-violet-700"
                    >
                      Live Project
                      <ArrowUpRight size={16} />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-bold text-zinc-900 transition hover:-translate-y-1"
                    >
                      <FaGithub />
                      Source Code
                    </a>
                  )}

                  {!project.liveUrl && !project.github && (
                    <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-5 py-3 text-sm font-bold text-zinc-500">
                      Private / Local Project
                    </span>
                  )}
                </div>
              </div>

              <motion.div
                whileHover={{
                  y: -7,
                  rotate: index % 2 === 0 ? -0.5 : 0.5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 18,
                }}
                className="project-visual-shell"
              >
                <ProjectVisual title={project.title} />
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}