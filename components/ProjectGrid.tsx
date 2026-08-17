"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Layers3 } from "lucide-react";
import { projects } from "@/data/portfolio";

export function ProjectGrid() {
  const [filter, setFilter] = useState("All");
  const shown = projects.filter(
    (project) =>
      filter === "All" ||
      project.category === filter ||
      project.technologies.some((technology) =>
        technology.toLowerCase().includes(filter.toLowerCase()),
      ),
  );

  return (
    <>
      <div className="no-scrollbar -mx-1 mb-7 flex gap-2 overflow-x-auto px-1 pb-1 sm:flex-wrap">
        {["All", "Power BI", "Excel", "SQL"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`focusable shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
              filter === item
                ? "border-cyan bg-cyan text-ink shadow-[0_8px_30px_rgba(69,217,232,.18)]"
                : "border-white/10 bg-white/[.03] text-slate-300 hover:border-white/25 hover:bg-white/[.06]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((project, index) => (
            <motion.article
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ delay: index * 0.03 }}
              key={project.slug}
              className="group premium-panel overflow-hidden rounded-[1.5rem]"
            >
              <Link className="focusable relative block overflow-hidden" href={`/projects/${project.slug}`}>
                <img
                  draggable={false}
                  src={project.images[0]}
                  alt={`${project.title} preview`}
                  className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.035] sm:aspect-video"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-xl">
                  <Layers3 size={13} /> {project.category}
                </span>
                <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-cyan group-hover:text-ink">
                  <ArrowUpRight size={18} />
                </span>
              </Link>

              <div className="p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[.16em] text-cyan">{project.subtitle}</p>
                <h3 className="mt-2 text-xl font-bold leading-tight">{project.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((technology) => (
                    <span
                      className="rounded-full border border-white/10 bg-white/[.025] px-2.5 py-1.5 text-[11px] font-medium text-slate-300"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
