"use client";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  ExternalLink,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  BarChart3,
  Database,
  GraduationCap,
  Award,
} from "lucide-react";
import { skills, certificates } from "@/data/portfolio";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ImageLightbox } from "@/components/ImageLightbox";
import { ProfilePortrait } from "@/components/ProfilePortrait";
import { useState } from "react";
const Reveal = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 0.45 }}
  >
    {children}
  </motion.div>
);
const cv = "/cv/Ahmed-Abdelrheem-Mankoola-CV.pdf";
export default function Home() {
  const [cert, setCert] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus("Please complete every field.");
      return;
    }
    setStatus("Opening your email client — no message is sent by this site.");
    window.location.href = `mailto:aabdelrehem417@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
  };
  return (
    <main className="select-none overflow-hidden">
      <section id="home" className="grid-bg relative min-h-[720px] pt-16">
        <div className="section grid min-h-[650px] items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal>
            <p className="eyebrow">Hello, I&apos;m</p>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Ahmed Abdelrheem <span className="text-cyan">Mankoola</span>
            </h1>
            <p className="mt-5 text-xl font-medium text-slate-300">
              Data Analyst
            </p>
            <p className="mt-5 max-w-xl leading-7 text-slate-400">
              I am a Data Analyst working on data analysis, building interactive
              dashboards, and delivering insights that help businesses make
              data-driven decisions.
            </p>
            <p className="mt-5 font-semibold text-cyan">
              Power BI <span className="text-slate-500">•</span> SQL{" "}
              <span className="text-slate-500">•</span> Excel{" "}
              <span className="text-slate-500">•</span> Python
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="focusable rounded-md bg-cyan px-5 py-3 font-bold text-ink"
              >
                View My Projects
              </a>
              <a
                href={cv}
                download="Ahmed-Abdelrheem-Mankoola-CV.pdf"
                className="focusable inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 font-semibold"
              >
                <Download size={17} />
                Download CV
              </a>
              <a
                className="focusable rounded-md border border-white/15 p-3"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/ahmed-abdelrheem-32211a392"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </Reveal>
          <ProfilePortrait />
        </div>
        <a
          href="#about"
          aria-label="Scroll to About"
          className="focusable absolute bottom-5 left-1/2 -translate-x-1/2 text-cyan"
        >
          <ArrowDown />
        </a>
      </section>
      <section id="about" className="section">
        <Reveal>
          <p className="eyebrow">About</p>
          <h2 className="text-3xl font-bold md:text-4xl">
            From raw data to clear decisions.
          </h2>
          <div className="mt-5 flex max-w-3xl items-center gap-5">
            <ProfilePortrait compact />
            <p className="leading-7 text-slate-400">
              I am a Data Analyst focused on transforming raw data into useful
              business insights through thoughtful analysis, data modeling, and
              interactive dashboard experiences.
            </p>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Role", "Data Analyst", BarChart3],
              ["Location", "Tanta, Egypt", MapPin],
              ["Education", "Management Information Systems", GraduationCap],
              ["Graduated", "2024", Award],
            ].map(([a, b, Icon]) => {
              const C = Icon as typeof BarChart3;
              return (
                <div className="glass rounded-lg p-5" key={a as string}>
                  <C className="text-cyan" size={20} />
                  <p className="mt-4 text-sm text-slate-400">{a as string}</p>
                  <p className="mt-1 font-semibold">{b as string}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>
      <section id="skills" className="grid-bg">
        <div className="section">
          <Reveal>
            <p className="eyebrow">Expertise</p>
            <h2 className="text-3xl font-bold md:text-4xl">Technical skills</h2>
            <div className="mt-9 grid gap-5 lg:grid-cols-3">
              {Object.entries(skills).map(([group, list]) => (
                <div className="glass rounded-xl p-6" key={group}>
                  <Database className="text-cyan" />
                  <h3 className="mt-4 font-bold">{group}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {list.map((s) => (
                      <span
                        className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                        key={s}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <h3 className="mt-12 text-xl font-bold">Professional strengths</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {[
                "Analytical Thinking",
                "Problem Solving",
                "Attention to Detail",
                "Communication",
                "Teamwork",
                "Time Management",
              ].map((s) => (
                <span
                  className="rounded-md border border-cyan/20 bg-cyan/5 px-4 py-2 text-sm"
                  key={s}
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <section id="projects" className="section">
        <Reveal>
          <p className="eyebrow">Selected work</p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Projects built for insight
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            Interactive analytics dashboards designed to make business data
            easier to explore and act on.
          </p>
        </Reveal>
        <div className="mt-9">
          <ProjectGrid />
        </div>
      </section>
      <section id="education" className="grid-bg">
        <div className="section">
          <Reveal>
            <p className="eyebrow">Education</p>
            <div className="glass max-w-3xl rounded-xl border-l-2 border-l-cyan p-7">
              <GraduationCap className="text-cyan" />
              <h2 className="mt-5 text-2xl font-bold">
                Bachelor&apos;s Degree in Management Information Systems (MIS)
              </h2>
              <p className="mt-3 text-slate-300">
                Higher Institute of Management and Information Technology
                (HIMIT)
              </p>
              <p className="mt-3 text-sm font-semibold text-cyan">
                Graduated: 2024
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <section id="certificates" className="section">
        <Reveal>
          <p className="eyebrow">Credentials</p>
          <h2 className="text-3xl font-bold md:text-4xl">Certificates</h2>
        </Reveal>
        <div className="mt-9 grid gap-6 md:grid-cols-3">
          {certificates.map((c, i) => (
            <article className="glass overflow-hidden rounded-xl" key={c.name}>
              <button
                className="focusable block w-full"
                onClick={() => setCert(i)}
                aria-label={"View " + c.name}
              >
                <img
                  draggable={false}
                  className="aspect-[4/3] w-full object-cover"
                  src={c.image}
                  alt={c.name}
                />
              </button>
              <div className="p-5">
                {c.achievement && (
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan">
                    Achievement
                  </span>
                )}
                <h3 className="mt-1 font-bold">{c.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {c.description}
                </p>
                <button
                  className="focusable mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan"
                  onClick={() => setCert(i)}
                >
                  View Certificate <ExternalLink size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="contact" className="grid-bg">
        <div className="section grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className="text-4xl font-bold">Let&apos;s Work Together</h2>
            <p className="mt-5 leading-7 text-slate-400">
              I&apos;m open to Data Analyst opportunities, collaborations, and
              projects where data can be transformed into meaningful business
              insights.
            </p>
            <div className="mt-8 space-y-4 text-slate-300">
              <a
                className="focusable flex items-center gap-3 hover:text-cyan"
                href="tel:01010852702"
              >
                <Phone size={18} />
                01010852702
              </a>
              <a
                className="focusable flex items-center gap-3 hover:text-cyan"
                href="mailto:aabdelrehem417@gmail.com"
              >
                <Mail size={18} />
                aabdelrehem417@gmail.com
              </a>
              <p className="flex items-center gap-3">
                <MapPin size={18} />
                Tanta, Egypt
              </p>
              <a
                className="focusable flex items-center gap-3 hover:text-cyan"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/ahmed-abdelrheem-32211a392"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
            <a
              href={cv}
              download
              className="focusable mt-8 inline-flex items-center gap-2 rounded-md bg-cyan px-4 py-3 font-bold text-ink"
            >
              <Download size={17} />
              Download CV
            </a>
          </Reveal>
          <form
            onSubmit={submit}
            className="glass select-text rounded-xl p-6"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {(["name", "email", "subject"] as const).map((k) => (
                <label
                  className={k === "subject" ? "sm:col-span-2" : ""}
                  key={k}
                >
                  <span className="text-sm text-slate-300">
                    {k[0].toUpperCase() + k.slice(1)}
                  </span>
                  <input
                    required
                    type={k === "email" ? "email" : "text"}
                    value={form[k]}
                    onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                    className="focusable mt-2 w-full rounded-md border border-white/10 bg-slate-950/50 px-3 py-3 select-text"
                  />
                </label>
              ))}
            </div>
            <label className="mt-4 block">
              <span className="text-sm text-slate-300">Message</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="focusable mt-2 w-full rounded-md border border-white/10 bg-slate-950/50 px-3 py-3 select-text"
              />
            </label>
            <button
              className="focusable mt-5 inline-flex items-center gap-2 rounded-md bg-cyan px-5 py-3 font-bold text-ink"
              type="submit"
            >
              <Send size={16} />
              Send Message
            </button>
            {status && (
              <p aria-live="polite" className="mt-3 text-sm text-cyan">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
      <footer className="border-t border-white/10 px-5 py-7 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Ahmed Abdelrheem Mankoola. Data Analyst.
      </footer>
      <ImageLightbox
        images={certificates.map((c) => c.image)}
        index={cert}
        onClose={() => setCert(null)}
        onChange={setCert}
        label="Certificate"
      />
    </main>
  );
}
