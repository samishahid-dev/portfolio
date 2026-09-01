"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { profile } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const items = ["about", "experience", "projects", "skills", "contact"];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-[#f6f3ed]/85 backdrop-blur-2xl">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-8">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#17171c] text-white">
            <Code2 size={19} />
          </span>

          <span className="text-lg font-black tracking-tight">
            Sami Shahid<span className="text-violet-600">.</span>
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="nav-link text-sm font-semibold capitalize text-zinc-600"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="top-icon"
          >
            <FaGithub size={17} />
          </a>

          <button
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-2 rounded-full bg-[#17171c] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-violet-600"
          >
            Let&apos;s Talk
            <ArrowDown size={15} />
          </button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-black/[0.06] bg-[#f6f3ed] px-6 py-6 md:hidden"
        >
          <div className="flex flex-col gap-5">
            {items.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-left text-lg font-semibold capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}