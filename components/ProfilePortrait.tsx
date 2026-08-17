"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function ProfilePortrait({ compact = false }: { compact?: boolean }) {
  const reduceMotion = useReducedMotion();

  if (compact) {
    return (
      <div className="relative w-24 shrink-0 overflow-hidden rounded-[1.4rem] border border-cyan/25 bg-cyan/10 shadow-glow sm:w-32">
        <Image
          src="/image/profile.jfif"
          alt="Ahmed Abdelrheem Mankoola - Data Analyst"
          width={360}
          height={480}
          draggable={false}
          className="protected-image aspect-[3/4] h-full w-full object-cover object-[50%_20%]"
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 18, y: 12 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.72,
        type: "spring",
        stiffness: 90,
        damping: 18,
      }}
      className="relative mx-auto w-[min(82vw,390px)] pb-7 pt-8 sm:w-[min(58vw,420px)] lg:w-[min(31vw,440px)]"
    >
      <div className="absolute -inset-8 -z-10 rounded-[44px] bg-cyan/15 blur-3xl" />
      <div className="absolute -right-8 top-5 -z-10 h-36 w-36 rounded-full border border-cyan/15" />
      <div className="absolute -left-10 bottom-12 -z-10 h-24 w-24 rounded-full border border-white/10" />

      <motion.div
        animate={reduceMotion ? {} : { y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="premium-panel relative overflow-hidden rounded-[2rem] p-1.5 shadow-[0_30px_100px_rgba(0,0,0,.35)]"
      >
        <Image
          priority
          src="/image/profile.jfif"
          alt="Ahmed Abdelrheem Mankoola - Data Analyst"
          width={880}
          height={1173}
          draggable={false}
          className="protected-image aspect-[3/4] w-full rounded-[1.65rem] object-cover object-[50%_18%]"
        />
        <div className="pointer-events-none absolute inset-x-1.5 bottom-1.5 h-1/3 rounded-b-[1.65rem] bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
      </motion.div>

      <div className="glass absolute -left-3 top-3 flex items-center gap-2 rounded-full px-3.5 py-2 text-[11px] font-bold text-cyan shadow-xl sm:-left-7 sm:text-xs">
        <Sparkles size={14} /> Data Analyst
      </div>

      <div className="absolute -bottom-1 left-1/2 flex w-[calc(100%-1.5rem)] -translate-x-1/2 flex-wrap justify-center gap-1.5 sm:w-auto sm:flex-nowrap">
        {["Power BI", "SQL", "Excel", "Python"].map((item) => (
          <span
            className="rounded-full border border-white/10 bg-ink/90 px-2.5 py-1.5 text-[10px] font-semibold text-slate-200 shadow-lg backdrop-blur-xl sm:text-[11px]"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
