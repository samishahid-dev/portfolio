"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section className="bg-[#f6f3ed]">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="education-shell"
        >
          <span className="education-icon">
            <GraduationCap size={30} />
          </span>

          <div>
            <p className="light-label">Education</p>
            <h2>{education.degree}</h2>
            <p className="mt-3 text-lg text-zinc-500">{education.university}</p>
            <p className="mt-2 font-bold text-violet-600">{education.period}</p>
          </div>

          <div className="lg:text-right">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">
              Academic Focus
            </p>

            <p className="mt-4 leading-7 text-zinc-600">{education.focus}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}