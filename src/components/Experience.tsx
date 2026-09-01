"use client";

import { motion } from "framer-motion";
import { Briefcase, Check } from "lucide-react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#f6f3ed]">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="light-label">02 / Professional Experience</p>

          <h2 className="light-heading">
            Building inside
            <span className="hero-gradient block">real product workflows.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="experience-shell mt-14"
        >
          <div className="experience-summary">
            <span className="experience-icon">
              <Briefcase size={22} />
            </span>

            <p className="mt-7 text-sm font-bold text-violet-600">
              {experience.period}
            </p>

            <h3>{experience.role}</h3>
            <p>{experience.company} · {experience.location}</p>
          </div>

          <div className="experience-points">
            {experience.points.map((point) => (
              <div className="experience-line" key={point}>
                <span>
                  <Check size={14} />
                </span>

                <p>{point}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}