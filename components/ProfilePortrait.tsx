"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BarChart3 } from "lucide-react";

export function ProfilePortrait({ compact = false }: { compact?: boolean }) {
  const reduceMotion = useReducedMotion();
  if (compact)
    return (
      <div className="relative w-28 shrink-0 overflow-hidden rounded-2xl border border-cyan/30 bg-cyan/10 shadow-glow sm:w-36">
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
  return (
    <motion.div
      initial={{ opacity: 0, x: 18, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.72,
        type: "spring",
        stiffness: 90,
        damping: 18,
      }}
      className="relative mx-auto w-[min(78vw,400px)] pt-7 sm:w-[min(58vw,420px)] lg:w-[min(31vw,440px)]"
    >
      <div className="absolute -inset-5 -z-10 rounded-[36px] bg-cyan/20 blur-3xl" />
      <motion.div
        animate={reduceMotion ? {} : { y: [0, -7, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative overflow-hidden rounded-[28px] border border-cyan/40 bg-slate-900 p-1.5 shadow-[0_0_50px_rgba(69,217,232,.24)]"
      >
        <Image
          priority
          src="/image/profile.jfif"
          alt="Ahmed Abdelrheem Mankoola - Data Analyst"
          width={880}
          height={1173}
          draggable={false}
          className="protected-image aspect-[3/4] w-full rounded-[22px] object-cover object-[50%_18%]"
        />
      </motion.div>
      <div className="glass absolute -left-5 top-1 rounded-lg px-3 py-2 text-xs font-bold text-cyan shadow-lg">
        Data Analyst
      </div>
      <div className="glass absolute -right-4 bottom-12 flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold">
        <BarChart3 size={15} className="text-cyan" /> Insight-driven
      </div>
      <div className="absolute -bottom-4 left-8 flex gap-1.5">
        {["Power BI", "SQL", "Excel", "Python"].map((item) => (
          <span
            className="rounded border border-cyan/25 bg-ink/80 px-2 py-1 text-[10px] font-semibold text-slate-200 backdrop-blur"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
      <span className="absolute -right-5 top-1/3 h-3 w-3 rounded-full bg-cyan shadow-[0_0_16px_#45d9e8]" />
    </motion.div>
  );
}
