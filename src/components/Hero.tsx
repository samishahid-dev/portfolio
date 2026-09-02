"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  Code2,
  Download,
  MapPin,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { profile } from "@/data/portfolio";

const reveal = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
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

      <div className="relative grid w-full items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
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
            <span className="hero-gradient block">
              across Web, Mobile
            </span>
            <span className="block">&amp; AI.</span>
          </motion.h1>

          <motion.p variants={reveal} className="hero-copy">
            I&apos;m <strong>{profile.name}</strong>, a Software Engineer
            building production-focused digital products across web, mobile,
            cloud and artificial intelligence.
          </motion.p>

          <motion.div
            variants={reveal}
            className="mt-9 flex flex-wrap gap-4"
          >
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="button-dark"
            >
              Explore work
              <ArrowRight size={17} />
            </button>

            <a
              href="/Sami-Shahid-CV.pdf"
              download="Sami-Shahid-CV.pdf"
              className="button-light"
            >
              Download CV
              <Download size={17} />
            </a>

            <button
              type="button"
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
              rel="noopener noreferrer"
              className="hero-link"
              aria-label="Open Sami Shahid GitHub profile"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link"
              aria-label="Open Sami Shahid LinkedIn profile"
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
          initial={{
            opacity: 0,
            x: 50,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.85,
            delay: 0.2,
          }}
          className="mx-auto w-full max-w-[550px]"
        >
          <div className="relative overflow-hidden rounded-[38px] border border-black/[0.07] bg-white/70 p-5 shadow-[0_35px_100px_rgba(69,52,112,0.14)] backdrop-blur-xl">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.16]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.12) 1px, transparent 1px)",
                backgroundSize: "34px 34px",
              }}
            />

            <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-violet-300/30 blur-[80px]" />

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.25em] text-violet-600">
                  Developer Profile
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-zinc-950">
                  Sami Shahid
                </h2>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-emerald-500/15 bg-emerald-500/10 px-3 py-2 text-[11px] font-black text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Available
              </div>
            </div>

            <div className="relative z-10 mt-7 flex justify-center">
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex h-[380px] w-[300px] items-center justify-center overflow-hidden rounded-[34px] border-[6px] border-white bg-zinc-100 shadow-[0_25px_70px_rgba(50,35,90,0.22)] sm:h-[410px] sm:w-[325px]"
              >
                <Image
                  src="/sami-profile.jpg"
                  alt="Sami Shahid - Software Engineer"
                  width={900}
                  height={1200}
                  priority
                  className="h-full w-full object-contain"
                />
              </motion.div>
            </div>

            <div className="relative z-10 mt-6 grid grid-cols-3 gap-2">
              <motion.div
                whileHover={{ y: -4 }}
                className="flex items-center justify-center gap-2 rounded-2xl border border-black/[0.06] bg-white px-3 py-3 text-xs font-black shadow-sm"
              >
                <Code2 size={15} />
                Next.js
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="flex items-center justify-center gap-2 rounded-2xl border border-black/[0.06] bg-white px-3 py-3 text-xs font-black shadow-sm"
              >
                <Smartphone size={15} />
                Flutter
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="flex items-center justify-center gap-2 rounded-2xl border border-black/[0.06] bg-white px-3 py-3 text-xs font-black shadow-sm"
              >
                <BrainCircuit size={15} />
                AI / CV
              </motion.div>
            </div>

            <div className="relative z-10 mt-3 grid grid-cols-3 gap-2">
              <div className="rounded-2xl bg-zinc-950 px-4 py-4 text-white">
                <strong className="block text-sm font-black">Web</strong>
                <span className="mt-1 block text-[10px] text-zinc-400">
                  Next.js
                </span>
              </div>

              <div className="rounded-2xl bg-violet-100 px-4 py-4">
                <strong className="block text-sm font-black text-zinc-950">
                  Mobile
                </strong>
                <span className="mt-1 block text-[10px] text-violet-700">
                  Flutter
                </span>
              </div>

              <div className="rounded-2xl bg-blue-100 px-4 py-4">
                <strong className="block text-sm font-black text-zinc-950">
                  AI
                </strong>
                <span className="mt-1 block text-[10px] text-blue-700">
                  YOLOv8
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}