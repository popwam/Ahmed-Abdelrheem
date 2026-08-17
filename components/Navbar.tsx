"use client";

import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const links = ["Home", "About", "Skills", "Projects", "Education", "Certificates", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className={`mx-auto flex h-14 max-w-7xl items-center justify-between rounded-full border px-3 pl-4 transition duration-300 sm:h-16 sm:px-4 sm:pl-5 ${
          scrolled || open
            ? "border-white/10 bg-ink/85 shadow-[0_12px_40px_rgba(0,0,0,.2)] backdrop-blur-2xl"
            : "border-transparent bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <Link href="/" className="focusable rounded-md text-base font-black tracking-[-.04em] sm:text-lg">
          AHMED<span className="text-cyan">.</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((item) => (
            <Link
              className="focusable rounded-full px-3 py-2 text-xs font-medium text-slate-300 transition hover:bg-white/[.05] hover:text-cyan"
              href={`/#${item.toLowerCase()}`}
              key={item}
            >
              {item}
            </Link>
          ))}
          <a
            className="focusable ml-2 inline-flex items-center gap-2 rounded-full bg-cyan px-4 py-2.5 text-xs font-bold text-ink transition hover:-translate-y-0.5"
            href="/cv/Ahmed-Abdelrheem-Mankoola-CV.pdf"
            download="Ahmed-Abdelrheem-Mankoola-CV.pdf"
          >
            <Download size={14} /> CV
          </a>
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </div>

        <button
          className="focusable grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[.04] lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-[1.6rem] border border-white/10 bg-ink/95 p-3 shadow-[0_24px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl lg:hidden"
          >
            <div className="grid gap-1 sm:grid-cols-2">
              {links.map((item) => (
                <Link
                  onClick={() => setOpen(false)}
                  className="focusable rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-200 transition hover:bg-white/[.05] hover:text-cyan"
                  href={`/#${item.toLowerCase()}`}
                  key={item}
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="mt-2 flex items-center gap-2 border-t border-white/[.07] pt-3">
              <a
                className="focusable inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-cyan px-4 py-3 text-sm font-bold text-ink"
                href="/cv/Ahmed-Abdelrheem-Mankoola-CV.pdf"
                download
              >
                <Download size={15} /> Download CV
              </a>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
