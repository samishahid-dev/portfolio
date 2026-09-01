"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Code2, Smartphone } from "lucide-react";

const cards = [
  {
    title: "Full-Stack Web",
    text: "Modern responsive applications using Next.js, React, TypeScript and Firebase.",
    icon: Code2,
  },
  {
    title: "Mobile Development",
    text: "Cross-platform Flutter applications with cloud data and practical workflows.",
    icon: Smartphone,
  },
  {
    title: "AI & Computer Vision",
    text: "Machine learning, OpenCV and YOLOv8 systems built around real-world use cases.",
    icon: BrainCircuit,
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#17171c] text-white">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]"
        >
          <div>
            <p className="dark-label">01 / About</p>

            <h2 className="dark-heading">
              More than code.
              <span>Product thinking.</span>
            </h2>
          </div>

          <div>
            <p className="text-xl leading-9 text-zinc-300">
              I like building software that feels simple to use, even when the
              system behind it is complex.
            </p>

            <p className="mt-6 leading-8 text-zinc-500">
              My work spans property technology, management systems, mobile
              applications, desktop software and computer vision. I focus on
              practical functionality, reliable flows and clean user experience.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {cards.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="dark-card"
                    key={item.title}
                  >
                    <Icon size={23} className="text-violet-400" />

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}