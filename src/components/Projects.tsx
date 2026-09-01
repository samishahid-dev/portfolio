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
import { projects } from "@/data/portfolio";

function PlotVisitorVisual() {
  return (
    <div className="project-browser">
      <div className="browser-top">
        <div className="browser-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="browser-url">plotvisitor.com</div>
      </div>

      <div className="browser-screen">
        <Image
          src="/projects/plotvisitor.png"
          alt="PlotVisitor project screenshot"
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
        <div className="phone-notch" />

        <div className="phone-screen">
          <div className="mini-row">
            <span>Good morning</span>
            <strong>•••</strong>
          </div>

          <p className="mini-label">Available Balance</p>
          <h4>$8,420.00</h4>

          <div className="expense-ring">
            <CircleDollarSign size={34} />
          </div>

          <div className="expense-bars">
            <span style={{ height: "35%" }} />
            <span style={{ height: "62%" }} />
            <span style={{ height: "48%" }} />
            <span style={{ height: "82%" }} />
            <span style={{ height: "66%" }} />
          </div>

          <div className="expense-list">
            <div>
              <i />
              <span>Shopping</span>
              <strong>-$82</strong>
            </div>
            <div>
              <i />
              <span>Food</span>
              <strong>-$34</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="expense-floating-card">
        <span>Monthly Budget</span>
        <strong>72%</strong>
        <div>
          <i />
        </div>
      </div>
    </div>
  );
}

function TrafficVisual() {
  return (
    <div className="traffic-visual">
      <div className="traffic-top">
        <span>LIVE CAMERA · 03</span>
        <strong>AI MONITORING</strong>
      </div>

      <div className="traffic-scene">
        <div className="road road-one" />
        <div className="road road-two" />
        <div className="car car-one" />
        <div className="car car-two" />

        <div className="detect-box detect-one">
          <span>NO HELMET</span>
        </div>

        <div className="detect-box detect-two">
          <span>VEHICLE</span>
        </div>

        <div className="scan-line" />
      </div>

      <div className="traffic-stats">
        <div>
          <span>Detection</span>
          <strong>YOLOv8</strong>
        </div>
        <div>
          <span>Accuracy</span>
          <strong>Realtime</strong>
        </div>
        <div>
          <span>Feeds</span>
          <strong>Multi</strong>
        </div>
      </div>
    </div>
  );
}

function PharmacyVisual() {
  return (
    <div className="pharmacy-visual">
      <div className="pos-sidebar">
        <Pill size={25} />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="pos-content">
        <div className="pos-head">
          <div>
            <span>Pharmacy POS</span>
            <strong>Dashboard</strong>
          </div>
          <i />
        </div>

        <div className="pos-stats">
          <div>
            <span>Sales</span>
            <strong>₨ 48.2K</strong>
          </div>
          <div>
            <span>Orders</span>
            <strong>124</strong>
          </div>
        </div>

        <div className="inventory-list">
          {["Panadol", "Augmentin", "Calpol"].map((item, i) => (
            <div key={item}>
              <i className={`medicine-icon medicine-${i}`} />
              <span>{item}</span>
              <strong>{18 + i * 7}</strong>
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
      <div className="news-toolbar">
        <Newspaper size={18} />
        <span>AI News Analyzer</span>
      </div>

      <div className="news-content">
        <div className="news-copy">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="news-result"
        >
          <BrainCircuit size={28} />
          <span>Prediction</span>
          <strong>REAL NEWS</strong>
          <p>Confidence 91%</p>
        </motion.div>
      </div>
    </div>
  );
}

const projectVisuals: Record<string, React.ReactNode> = {
  PlotVisitor: <PlotVisitorVisual />,
  "Expense Tracker": <ExpenseVisual />,
  "Smart Traffic Violation Detection": <TrafficVisual />,
  "Pharmacy Billing System": <PharmacyVisual />,
  "AI Fake News Detection": <FakeNewsVisual />,
};

const projectIcons = {
  Web: Globe2,
  Mobile: Smartphone,
  AI: BrainCircuit,
  Desktop: Pill,
};

export default function Projects() {
  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="light-label">03 / Selected Work</p>

            <h2 className="light-heading">
              Projects built around
              <span className="hero-gradient block">real problems.</span>
            </h2>
          </div>

          <a
            href="https://github.com/samishahid-dev"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-black"
          >
            Explore GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-16 space-y-8">
          {projects.map((project, index) => {
            const Icon =
              projectIcons[project.category as keyof typeof projectIcons] ||
              Globe2;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className={`project-showcase ${
                  index % 2 !== 0 ? "project-showcase-reverse" : ""
                }`}
              >
                <div className="project-info">
                  <div className="project-number">
                    0{index + 1}
                  </div>

                  <div className="project-meta-row">
                    <span>
                      <Icon size={16} />
                      {project.category}
                    </span>

                    <span>{project.label}</span>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="project-tech-new">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-source"
                    >
                      <FaGithub />
                      View source
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>

                <motion.div
                  whileHover={{ scale: 1.015 }}
                  className="project-visual-shell"
                >
                  {projectVisuals[project.title]}
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}