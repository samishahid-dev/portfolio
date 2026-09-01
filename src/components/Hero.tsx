"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  Code2,
  MapPin,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { profile } from "@/data/portfolio";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 lg:px-8"
    >
      <div className="hero-orb hero-orb-a" />
      <div className="hero-orb hero-orb-b" />

      <div className="relative grid w-full items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.div variants={reveal} className="availability-pill">
            <span className="availability-dot" />
            Open to software opportunities
          </motion.div>

          <motion.p variants={reveal} className="hero-eyebrow">
            <Sparkles size={15} />
            Software Engineer · Full Stack · AI · Flutter
          </motion.p>

          <motion.h1 variants={reveal} className="hero-heading">
            Building software
            <span className="hero-gradient block">across Web, Mobile</span>
            <span className="block">& AI.</span>
          </motion.h1>

          <motion.p variants={reveal} className="hero-copy">
            I&apos;m <strong>{profile.name}</strong>, a Software Engineering
            graduate building production-focused digital products with modern
            interfaces and practical engineering.
          </motion.p>

          <motion.div variants={reveal} className="mt-9 flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="button-dark"
            >
              Explore work
              <ArrowRight size={17} />
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="button-light"
            >
              Contact me
              <ArrowDown size={17} />
            </button>
          </motion.div>

          <motion.div
            variants={reveal}
            className="mt-11 flex flex-wrap items-center gap-5"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hero-link"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hero-link"
            >
              <FaLinkedinIn />
              LinkedIn
            </a>

            <span className="hidden h-5 w-px bg-black/10 sm:block" />

            <span className="flex items-center gap-2 text-sm text-zinc-500">
              <MapPin size={15} />
              {profile.location}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div className="profile-showcase">
            <div className="profile-grid" />

            <div className="profile-topbar">
              <div>
                <span className="profile-kicker">Developer Profile</span>
                <h2>Sami Shahid</h2>
              </div>

              <span className="profile-online">
                <span />
                Available
              </span>
            </div>

            <div className="relative mt-7 flex min-h-[445px] items-center justify-center">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="profile-photo-wrap-clean"
              >
                <Image
                  src="/sami-profile.jpg"
                  alt="Sami Shahid"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 90vw, 420px"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="floating-chip clean-chip-left"
              >
                <Code2 size={16} />
                Next.js
              </motion.div>

              <motion.div
                animate={{ y: [0, 9, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="floating-chip clean-chip-right"
              >
                <Smartphone size={16} />
                Flutter
              </motion.div>

              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4.6,
                  ease: "easeInOut",
                }}
                className="floating-chip clean-chip-bottom"
              >
                <BrainCircuit size={16} />
                AI / CV
              </motion.div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                ["Web", "Next.js"],
                ["Mobile", "Flutter"],
                ["AI", "YOLOv8"],
              ].map(([title, sub]) => (
                <div className="hero-stat" key={title}>
                  <strong>{title}</strong>
                  <span>{sub}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}