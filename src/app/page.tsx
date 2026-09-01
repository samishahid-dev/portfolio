import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f6f3ed] text-[#17171c]">
      <Navbar />
      <Hero />

      <section className="border-y border-black/[0.06] bg-white">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Next.js", "Full-Stack Web"],
            ["Flutter", "Mobile Development"],
            ["Firebase", "Cloud Systems"],
            ["YOLOv8", "AI & Computer Vision"],
          ].map(([title, subtitle]) => (
            <div key={title} className="tech-strip-item">
              <strong>{title}</strong>
              <span>{subtitle}</span>
            </div>
          ))}
        </div>
      </section>

      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}