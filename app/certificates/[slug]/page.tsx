import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Award, ChevronRight, ExternalLink } from "lucide-react";
import { certificates } from "@/data/portfolio";

export function generateStaticParams() {
  return certificates.map((certificate) => ({ slug: certificate.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const certificate = certificates.find((item) => item.slug === params.slug);
  return {
    title: certificate ? `${certificate.name} | Ahmed Abdelrheem Mankoola` : "Certificate not found",
  };
}

export default function CertificatePage({ params }: { params: { slug: string } }) {
  const index = certificates.findIndex((certificate) => certificate.slug === params.slug);
  if (index < 0) notFound();

  const certificate = certificates[index];
  const previous = certificates[(index - 1 + certificates.length) % certificates.length];
  const next = certificates[(index + 1) % certificates.length];

  return (
    <main className="relative overflow-hidden pt-20 sm:pt-24">
      <div className="pointer-events-none absolute left-[-10rem] top-24 h-[28rem] w-[28rem] rounded-full bg-cyan/10 blur-[110px]" />
      <article className="section pt-8 sm:pt-12">
        <nav aria-label="Breadcrumb" className="mb-8 flex min-w-0 items-center gap-2 text-xs text-slate-400 sm:text-sm">
          <Link className="focusable shrink-0 transition hover:text-cyan" href="/">
            Home
          </Link>
          <ChevronRight size={14} className="shrink-0" />
          <Link className="focusable shrink-0 transition hover:text-cyan" href="/#certificates">
            Certificates
          </Link>
          <ChevronRight size={14} className="shrink-0" />
          <span className="truncate">{certificate.name}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,.75fr)] lg:items-center">
          <div className="premium-panel overflow-hidden rounded-[1.5rem] p-2 sm:rounded-[2rem] sm:p-3">
            <div className="relative overflow-hidden rounded-[1.1rem] bg-slate-950/50 sm:rounded-[1.55rem]">
              <img
                src={certificate.image}
                alt={certificate.name}
                draggable={false}
                className="w-full object-contain"
              />
              <a
                href={certificate.image}
                target="_blank"
                rel="noreferrer"
                className="focusable absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink/80 px-3 py-2 text-xs font-semibold text-white backdrop-blur-xl transition hover:text-cyan"
              >
                Full image <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/[.06] px-3 py-1.5 text-xs font-bold uppercase tracking-[.16em] text-cyan">
              <Award size={14} /> {certificate.achievement ? "Achievement" : "Certificate"}
            </div>
            <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {certificate.name}
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {certificate.description}
            </p>
            <Link
              href="/#certificates"
              className="focusable mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-4 py-3 text-sm font-semibold transition hover:border-cyan/40 hover:text-cyan"
            >
              <ArrowLeft size={16} /> Back to Certificates
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-2">
          <Link
            className="focusable premium-panel group rounded-[1.35rem] p-5 transition hover:-translate-y-0.5 hover:border-cyan/30"
            href={`/certificates/${previous.slug}`}
          >
            <span className="text-xs font-semibold uppercase tracking-[.16em] text-slate-500">Previous certificate</span>
            <span className="mt-3 flex items-center gap-2 font-bold leading-snug transition group-hover:text-cyan">
              <ArrowLeft size={16} className="shrink-0" /> {previous.name}
            </span>
          </Link>
          <Link
            className="focusable premium-panel group rounded-[1.35rem] p-5 transition hover:-translate-y-0.5 hover:border-cyan/30 sm:text-right"
            href={`/certificates/${next.slug}`}
          >
            <span className="text-xs font-semibold uppercase tracking-[.16em] text-slate-500">Next certificate</span>
            <span className="mt-3 flex items-center gap-2 font-bold leading-snug transition group-hover:text-cyan sm:justify-end">
              {next.name} <ArrowRight size={16} className="shrink-0" />
            </span>
          </Link>
        </div>
      </article>
    </main>
  );
}
