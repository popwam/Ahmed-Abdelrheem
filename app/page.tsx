"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BarChart3,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { skills, certificates } from "@/data/portfolio";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ProfilePortrait } from "@/components/ProfilePortrait";
import { useState } from "react";

const Reveal = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.48 }}
  >
    {children}
  </motion.div>
);

const cv = "/cv/Ahmed-Abdelrheem-Mankoola-CV.pdf";
const whatsappNumber = "201010852702";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const submit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus("Please complete every field.");
      return;
    }

    const text = [
      "Hello Ahmed, I am contacting you from your portfolio.",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Subject: ${form.subject}`,
      "",
      form.message,
    ].join("\n");

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    setStatus("Opening WhatsApp with your message ready to send.");
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="overflow-hidden">
      <section id="home" className="hero-shell relative flex min-h-[100svh] items-center pt-20">
        <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-cyan/10 blur-[100px] sm:h-[34rem] sm:w-[34rem]" />
        <div className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[110px]" />

        <div className="section grid w-full items-center gap-8 py-12 sm:py-16 lg:grid-cols-[1.08fr_.92fr] lg:gap-14">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.035] px-3 py-2 text-xs font-semibold text-slate-300 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,.8)]" />
              Available for data opportunities
            </div>

            <p className="eyebrow mt-7">Hello, I&apos;m</p>
            <h1 className="max-w-4xl text-[clamp(3rem,10vw,5.8rem)] font-black leading-[.94] tracking-[-.05em]">
              Ahmed Abdelrheem <span className="gradient-text">Mankoola</span>
            </h1>
            <p className="mt-5 text-xl font-semibold text-slate-200 sm:text-2xl">Data Analyst</p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              I transform raw data into clear, useful business insights through analysis, data modeling, and interactive dashboard experiences.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Power BI", "SQL", "Excel", "Python"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan/15 bg-cyan/[.05] px-3 py-1.5 text-xs font-semibold text-cyan"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="focusable inline-flex items-center gap-2 rounded-full bg-cyan px-5 py-3.5 text-sm font-bold text-ink shadow-[0_14px_40px_rgba(69,217,232,.18)] transition hover:-translate-y-0.5"
              >
                Explore Projects <ArrowUpRight size={17} />
              </a>
              <a
                href={cv}
                download="Ahmed-Abdelrheem-Mankoola-CV.pdf"
                className="focusable inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.035] px-5 py-3.5 text-sm font-semibold transition hover:border-white/25 hover:bg-white/[.06]"
              >
                <Download size={17} /> Download CV
              </a>
              <a
                className="focusable grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[.035] transition hover:border-cyan/40 hover:text-cyan"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/ahmed-abdelrheem-32211a392"
                aria-label="LinkedIn"
              >
                <Linkedin size={19} />
              </a>
            </div>
          </Reveal>

          <ProfilePortrait />
        </div>

        <a
          href="#about"
          aria-label="Scroll to About"
          className="focusable absolute bottom-5 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/10 bg-white/[.035] p-2.5 text-cyan sm:block"
        >
          <ArrowDown size={18} />
        </a>
      </section>

      <section id="about" className="section">
        <Reveal>
          <div className="grid gap-9 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div>
              <p className="eyebrow">About</p>
              <h2 className="section-title">Turning complexity into clarity.</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              I am a Data Analyst focused on transforming raw data into useful business insights through thoughtful analysis, data modeling, and interactive dashboard experiences.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Role", "Data Analyst", BarChart3],
              ["Location", "Tanta, Egypt", MapPin],
              ["Education", "Management Information Systems", GraduationCap],
              ["Graduated", "2024", Award],
            ].map(([label, value, Icon]) => {
              const CardIcon = Icon as typeof BarChart3;
              return (
                <div className="premium-panel group rounded-[1.35rem] p-5 transition hover:-translate-y-1" key={label as string}>
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-cyan/15 bg-cyan/[.07] text-cyan">
                    <CardIcon size={19} />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[.15em] text-slate-500">{label as string}</p>
                  <p className="mt-2 font-semibold leading-snug">{value as string}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section id="skills" className="soft-grid border-y border-white/[.06]">
        <div className="section">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">Expertise</p>
              <h2 className="section-title">Skills built around real analysis.</h2>
              <p className="mt-4 leading-7 text-slate-400">
                A practical toolkit for cleaning data, building models, visualizing trends, and communicating business insights clearly.
              </p>
            </div>

            <div className="mt-9 grid gap-5 lg:grid-cols-3">
              {Object.entries(skills).map(([group, list], index) => (
                <div className="premium-panel rounded-[1.5rem] p-5 sm:p-6" key={group}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-cyan/15 bg-cyan/[.07] text-cyan">
                      <Database size={20} />
                    </div>
                    <span className="text-xs font-bold text-slate-600">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{group}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {list.map((skill) => (
                      <span
                        className="rounded-full border border-white/10 bg-white/[.03] px-3 py-2 text-xs font-medium text-slate-300"
                        key={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 premium-panel rounded-[1.5rem] p-5 sm:p-6">
              <div className="flex items-center gap-2 text-sm font-bold">
                <Sparkles size={17} className="text-cyan" /> Professional strengths
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Analytical Thinking", "Problem Solving", "Attention to Detail", "Communication", "Teamwork", "Time Management"].map((skill) => (
                  <span className="rounded-full border border-cyan/15 bg-cyan/[.045] px-3 py-2 text-xs font-medium" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="projects" className="section">
        <Reveal>
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="section-title">Projects designed for insight.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
              Open any project to explore its details and dashboard screenshots in a dedicated project page.
            </p>
          </div>
        </Reveal>
        <div className="mt-9">
          <ProjectGrid />
        </div>
      </section>

      <section id="education" className="soft-grid border-y border-white/[.06]">
        <div className="section">
          <Reveal>
            <p className="eyebrow">Education</p>
            <div className="premium-panel relative max-w-4xl overflow-hidden rounded-[1.7rem] p-6 sm:p-8">
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan/10 blur-3xl" />
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan/15 bg-cyan/[.07] text-cyan">
                <GraduationCap size={22} />
              </div>
              <h2 className="mt-6 max-w-3xl text-2xl font-bold leading-tight sm:text-3xl">
                Bachelor&apos;s Degree in Management Information Systems (MIS)
              </h2>
              <p className="mt-3 text-slate-300">Higher Institute of Management and Information Technology (HIMIT)</p>
              <p className="mt-5 inline-flex rounded-full border border-cyan/15 bg-cyan/[.05] px-3 py-1.5 text-xs font-bold text-cyan">
                Graduated · 2024
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="certificates" className="section">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Credentials</p>
            <h2 className="section-title">Certificates & achievements.</h2>
            <p className="mt-4 leading-7 text-slate-400">Each certificate now opens in its own dedicated page for a cleaner viewing experience.</p>
          </div>
        </Reveal>

        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {certificates.map((certificate) => (
            <Link
              href={`/certificates/${certificate.slug}`}
              className="focusable group premium-panel overflow-hidden rounded-[1.5rem] transition hover:-translate-y-1 hover:border-cyan/25"
              key={certificate.name}
            >
              <div className="relative overflow-hidden">
                <img
                  draggable={false}
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                  src={certificate.image}
                  alt={certificate.name}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
                <span className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-ink/70 text-white backdrop-blur-xl transition group-hover:bg-cyan group-hover:text-ink">
                  <ExternalLink size={16} />
                </span>
              </div>
              <div className="p-5 sm:p-6">
                {certificate.achievement && (
                  <span className="text-[10px] font-bold uppercase tracking-[.16em] text-cyan">Achievement</span>
                )}
                <h3 className="mt-1 text-lg font-bold leading-snug">{certificate.name}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">{certificate.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan">
                  View Certificate <ArrowUpRight size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="contact" className="soft-grid border-t border-white/[.06]">
        <div className="section grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-12">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Let&apos;s work together.</h2>
            <p className="mt-5 max-w-lg leading-7 text-slate-400">
              I&apos;m open to Data Analyst opportunities, collaborations, and projects where data can be transformed into meaningful business insights.
            </p>

            <div className="mt-7 grid gap-3 text-sm text-slate-300 sm:max-w-md sm:grid-cols-2">
              <a className="contact-link" href="tel:01010852702">
                <Phone size={17} /> 01010852702
              </a>
              <a className="contact-link" href="tel:01126614751">
                <Phone size={17} /> 01126614751
              </a>
              <a className="contact-link sm:col-span-2" href="mailto:aabdelrehem417@gmail.com">
                <Mail size={17} /> aabdelrehem417@gmail.com
              </a>
              <span className="contact-link cursor-default">
                <MapPin size={17} /> Tanta, Egypt
              </span>
              <a
                className="contact-link"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/ahmed-abdelrheem-32211a392"
              >
                <Linkedin size={17} /> LinkedIn
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="focusable inline-flex items-center gap-2 rounded-full bg-cyan px-4 py-3 text-sm font-bold text-ink"
              >
                <MessageCircle size={17} /> WhatsApp
              </a>
              <a
                href={cv}
                download
                className="focusable inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.035] px-4 py-3 text-sm font-semibold"
              >
                <Download size={17} /> Download CV
              </a>
            </div>
          </Reveal>

          <form onSubmit={submit} className="premium-panel select-text rounded-[1.6rem] p-5 sm:p-7" noValidate>
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold">Send a WhatsApp message</p>
                <p className="mt-1 text-xs text-slate-500">Fill the form and WhatsApp will open with your message ready.</p>
              </div>
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyan/15 bg-cyan/[.07] text-cyan">
                <MessageCircle size={20} />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {(["name", "email", "subject"] as const).map((key) => (
                <label className={key === "subject" ? "sm:col-span-2" : ""} key={key}>
                  <span className="form-label">{key[0].toUpperCase() + key.slice(1)}</span>
                  <input
                    required
                    type={key === "email" ? "email" : "text"}
                    value={form[key]}
                    onChange={(event) => setForm({ ...form, [key]: event.target.value })}
                    className="form-field"
                    placeholder={key === "name" ? "Your name" : key === "email" ? "you@example.com" : "What would you like to discuss?"}
                  />
                </label>
              ))}
            </div>

            <label className="mt-4 block">
              <span className="form-label">Message</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                className="form-field resize-none"
                placeholder="Tell me a little about the opportunity or project..."
              />
            </label>

            <button
              className="focusable mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan px-5 py-3.5 text-sm font-bold text-ink shadow-[0_14px_40px_rgba(69,217,232,.14)] transition hover:-translate-y-0.5 sm:w-auto"
              type="submit"
            >
              <Send size={16} /> Continue on WhatsApp
            </button>
            {status && <p aria-live="polite" className="mt-3 text-xs font-medium text-cyan">{status}</p>}
          </form>
        </div>
      </section>

      <footer className="border-t border-white/[.06] px-5 py-7 text-center text-xs text-slate-500 sm:text-sm">
        © {new Date().getFullYear()} Ahmed Abdelrheem Mankoola. Designed by{" "}
        <a
          href="https://popwam.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-slate-300"
        >
          POPWAM
        </a>
        .
      </footer>

    </main>
  );
}
