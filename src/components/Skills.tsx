"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const groups = [
  ["Frontend", skills.frontend],
  ["Mobile", skills.mobile],
  ["Backend & Cloud", skills.backend],
  ["AI & Computer Vision", skills.ai],
  ["Desktop", skills.desktop],
  ["Tools", skills.tools],
] as const;

export default function Skills() {
  return (
    <section id="skills" className="bg-[#ece8ff]">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="light-label">04 / Technical Stack</p>

            <h2 className="light-heading">
              Tools that turn
              <span className="block text-violet-600">ideas into products.</span>
            </h2>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {groups.map(([title, items], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="skill-group"
              >
                <p className="skill-group-title">{title}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{
                        y: -4,
                        rotate: Math.random() > 0.5 ? 1 : -1,
                      }}
                      className="skill-pill"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}