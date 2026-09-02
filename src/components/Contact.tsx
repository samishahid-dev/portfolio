"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const subject = String(form.get("subject") || "Portfolio Contact");
    const message = String(form.get("message") || "");

    const body = [
      `Hi Sami,`,
      ``,
      message,
      ``,
      `From: ${name}`,
      `Email: ${email}`,
    ].join("\n");

    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-zinc-950 px-6 py-28 text-white lg:px-8"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/20 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.65,
            }}
          >
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-violet-400">
              Contact
            </p>

            <h2 className="max-w-xl text-5xl font-black tracking-[-0.055em] sm:text-6xl">
              Have an idea?
              <span className="block text-zinc-500">
                Let&apos;s build it.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-zinc-400">
              I&apos;m open to Software Engineering, Full-Stack, Flutter,
              Frontend and AI-related opportunities, as well as interesting
              software collaborations.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="group flex max-w-md items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.08]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                    <Mail size={20} />
                  </div>

                  <div>
                    <span className="block text-xs text-zinc-500">
                      Email
                    </span>
                    <strong className="text-sm sm:text-base">
                      {profile.email}
                    </strong>
                  </div>
                </div>

                <ArrowUpRight
                  className="text-zinc-500 transition group-hover:-translate-y-1 group-hover:translate-x-1"
                  size={18}
                />
              </a>

              <div className="flex max-w-md items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                  <MapPin size={20} />
                </div>

                <div>
                  <span className="block text-xs text-zinc-500">
                    Based in
                  </span>
                  <strong className="text-sm sm:text-base">
                    {profile.location}
                  </strong>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-lg transition hover:-translate-y-1 hover:bg-white hover:text-black"
              >
                <FaGithub />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-lg transition hover:-translate-y-1 hover:bg-white hover:text-black"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.65,
              delay: 0.1,
            }}
            className="rounded-[32px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                    Name
                  </span>

                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-500"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                    Email
                  </span>

                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-500"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                  Subject
                </span>

                <input
                  required
                  name="subject"
                  type="text"
                  placeholder="Job opportunity / Project / Collaboration"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-500"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                  Message
                </span>

                <textarea
                  required
                  name="message"
                  rows={6}
                  placeholder="Tell me a little about the opportunity or project..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-500"
                />
              </label>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-black text-black transition hover:-translate-y-1 hover:bg-violet-200"
              >
                Send Message
                <Send size={17} />
              </button>

              {sent && (
                <div className="flex items-center gap-2 text-sm text-emerald-400">
                  <CheckCircle2 size={17} />
                  Your email application has been opened with the message
                  prepared.
                </div>
              )}

              <p className="text-center text-xs leading-5 text-zinc-600">
                Submitting this form opens your default email application.
              </p>
            </form>
          </motion.div>
        </div>

        <div className="mt-24 flex flex-col gap-5 border-t border-white/10 pt-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Sami Shahid. Built with Next.js &amp; TypeScript.</p>

          <button
            type="button"
            onClick={() =>
              document.getElementById("home")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="text-left font-bold text-zinc-400 transition hover:text-white"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </section>
  );
}