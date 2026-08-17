import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { projects } from "@/data/portfolio";
import { ProjectGallery } from "@/components/ProjectGallery";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  return {
    title: project ? `${project.title} | Ahmed Abdelrheem Mankoola` : "Project not found",
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const index = projects.findIndex((project) => project.slug === params.slug);
  if (index < 0) notFound();

  const project = projects[index];
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="relative overflow-hidden pt-20 sm:pt-24">
      <div className="pointer-events-none absolute right-[-10rem] top-20 h-[28rem] w-[28rem] rounded-full bg-cyan/10 blur-[110px]" />
      <article className="section pt-8 sm:pt-12">
        <nav aria-label="Breadcrumb" className="mb-8 flex min-w-0 items-center gap-2 text-xs text-slate-400 sm:text-sm">
          <Link className="focusable shrink-0 transition hover:text-cyan" href="/">
            Home
          </Link>
          <ChevronRight size={14} className="shrink-0" />
          <Link className="focusable shrink-0 transition hover:text-cyan" href="/#projects">
            Projects
          </Link>
          <ChevronRight size={14} className="shrink-0" />
          <span className="truncate">{project.title}</span>
        </nav>

        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/[.06] px-3 py-1.5 text-xs font-bold uppercase tracking-[.16em] text-cyan">
              <Sparkles size={13} /> {project.subtitle}
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
            {project.technologies.map((technology) => (
              <span
                className="rounded-full border border-white/10 bg-white/[.035] px-3 py-2 text-xs font-medium text-slate-300"
                key={technology}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <ProjectGallery images={project.images} title={project.title} />

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            className="focusable inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-4 py-3 text-sm font-semibold transition hover:border-cyan/40 hover:text-cyan"
            href="/#projects"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          <span className="text-xs text-slate-500">Project {index + 1} of {projects.length}</span>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <Link
            className="focusable premium-panel group rounded-[1.35rem] p-5 transition hover:-translate-y-0.5 hover:border-cyan/30 sm:p-6"
            href={`/projects/${previous.slug}`}
          >
            <span className="text-xs font-semibold uppercase tracking-[.16em] text-slate-500">Previous project</span>
            <span className="mt-3 flex items-center gap-2 font-bold leading-snug transition group-hover:text-cyan">
              <ArrowLeft size={16} className="shrink-0" /> {previous.title}
            </span>
          </Link>
          <Link
            className="focusable premium-panel group rounded-[1.35rem] p-5 transition hover:-translate-y-0.5 hover:border-cyan/30 sm:p-6 sm:text-right"
            href={`/projects/${next.slug}`}
          >
            <span className="text-xs font-semibold uppercase tracking-[.16em] text-slate-500">Next project</span>
            <span className="mt-3 flex items-center gap-2 font-bold leading-snug transition group-hover:text-cyan sm:justify-end">
              {next.title} <ArrowRight size={16} className="shrink-0" />
            </span>
          </Link>
        </div>
      </article>
    </main>
  );
}
