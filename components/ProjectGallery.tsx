"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { ImageLightbox } from "./ImageLightbox";

export function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    setActive(0);
  }, [images]);

  const previous = () => setActive((current) => (current - 1 + images.length) % images.length);
  const next = () => setActive((current) => (current + 1) % images.length);

  return (
    <section className="mt-12" aria-label="Project screenshots">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow mb-2">Visual walkthrough</p>
          <h2 className="text-2xl font-bold sm:text-3xl">Dashboard gallery</h2>
        </div>
        {images.length > 1 && (
          <span className="hidden text-sm text-slate-400 sm:block">
            {String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
        )}
      </div>

      <div className="premium-panel overflow-hidden rounded-[1.5rem] p-2 sm:rounded-[2rem] sm:p-3">
        <div className="relative overflow-hidden rounded-[1.1rem] bg-slate-950/60 sm:rounded-[1.55rem]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.button
              key={images[active]}
              type="button"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.24 }}
              className="focusable group block w-full cursor-zoom-in"
              onClick={() => setLightboxIndex(active)}
              aria-label={`Open screenshot ${active + 1}`}
            >
              <img
                draggable={false}
                src={images[active]}
                alt={`${title} screenshot ${active + 1}`}
                className="aspect-[16/10] w-full object-contain sm:aspect-video"
              />
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink/80 px-3 py-2 text-xs font-semibold text-white backdrop-blur-xl">
                <Maximize2 size={14} /> Expand
              </span>
            </motion.button>
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={previous}
                className="focusable absolute left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-ink/75 text-white backdrop-blur-xl transition hover:border-cyan/50 hover:text-cyan sm:left-4 sm:h-12 sm:w-12"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={next}
                className="focusable absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-ink/75 text-white backdrop-blur-xl transition hover:border-cyan/50 hover:text-cyan sm:right-4 sm:h-12 sm:w-12"
                aria-label="Next screenshot"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>
      </div>

      {images.length > 1 && (
        <div className="no-scrollbar mt-4 flex snap-x gap-2 overflow-x-auto pb-1 sm:gap-3">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show screenshot ${index + 1}`}
              aria-current={active === index}
              className={`focusable relative w-24 shrink-0 snap-start overflow-hidden rounded-xl border p-1 transition sm:w-32 ${
                active === index
                  ? "border-cyan bg-cyan/10"
                  : "border-white/10 bg-white/[.03] hover:border-white/25"
              }`}
            >
              <img
                src={src}
                alt=""
                draggable={false}
                className="aspect-video w-full rounded-lg object-cover"
              />
            </button>
          ))}
        </div>
      )}

      <ImageLightbox
        images={images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex}
        label={`${title} screenshot`}
      />
    </section>
  );
}
