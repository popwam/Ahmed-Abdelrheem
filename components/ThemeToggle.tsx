"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
export function ThemeToggle() {
  const [light, setLight] = useState(false);
  useEffect(() => {
    setLight(localStorage.getItem("theme") === "light");
  }, []);
  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.dataset.theme = next ? "light" : "dark";
    localStorage.setItem("theme", next ? "light" : "dark");
  };
  return (
    <button
      onClick={toggle}
      className="focusable rounded-md border border-white/15 p-2 text-slate-300 hover:text-cyan"
      aria-label={light ? "Use dark theme" : "Use light theme"}
    >
      {light ? <Moon size={17} /> : <Sun size={17} />}
    </button>
  );
}
