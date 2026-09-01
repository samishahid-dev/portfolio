"use client";

import { FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const subject = String(form.get("subject") || "");
    const message = String(form.get("message") || "");

    const body = `Hi Sami,

My name is ${name}.
Email: ${email}

${message}`;

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="contact" className="bg-[#17171c] text-white">
      <div className="mx-auto max-w-7xl px-6 pb-14 pt-28 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="dark-label">05 / Contact</p>

            <h2 className="dark-heading">
              Have an idea?
              <span className="footer-gradient">Let&apos;s build it.</span>
            </h2>

            <p className="mt-7 max-w-md leading-7 text-zinc-500">
              Whether it&apos;s a software opportunity, collaboration or product
              idea, feel free to reach out.
            </p>

            <div className="mt-10 space-y-4">
              <a href={`mailto:${profile.email}`} className="contact-item">
                <span><Mail size={18} /></span>
                {profile.email}
              </a>

              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="contact-item">
                <span><Phone size={18} /></span>
                {profile.phone}
              </a>

              <div className="contact-item">
                <span><MapPin size={18} /></span>
                {profile.location}
              </div>
            </div>

            <div className="mt-9 flex gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <FaGithub size={19} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <FaLinkedinIn size={19} />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label>Your name</label>
                <input required name="name" placeholder="John Doe" />
              </div>

              <div>
                <label>Your email</label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mt-5">
              <label>Subject</label>
              <input
                required
                name="subject"
                placeholder="Project collaboration"
              />
            </div>

            <div className="mt-5">
              <label>Message</label>
              <textarea
                required
                name="message"
                rows={6}
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <button type="submit" className="send-button">
              Send message
              <Send size={17} />
            </button>
          </motion.form>
        </div>

        <footer className="mt-24 border-t border-white/[0.08] pt-10">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <button
                onClick={() => scrollTo("home")}
                className="flex items-center gap-3"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#17171c]">
                  <Code2 size={19} />
                </span>

                <span className="text-lg font-black">
                  Sami Shahid<span className="text-violet-400">.</span>
                </span>
              </button>

              <p className="mt-5 max-w-xs text-sm leading-6 text-zinc-600">
                Software Engineer building modern products across web, mobile
                and AI.
              </p>
            </div>

            <div>
              <p className="footer-title">Navigation</p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-500">
                {["about", "experience", "projects", "skills"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item)}
                    className="footer-link capitalize"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="footer-title">Find me online</p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-500">
                <a href={profile.github} target="_blank" rel="noreferrer" className="footer-link">
                  GitHub ↗
                </a>

                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="footer-link">
                  LinkedIn ↗
                </a>

                <a href={`mailto:${profile.email}`} className="footer-link">
                  Email ↗
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.06] py-7 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Sami Shahid. All rights reserved.</p>

            <button
              onClick={() => scrollTo("home")}
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              Back to top
              <ArrowUpRight size={14} />
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}