"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
} from "lucide-react";

const highlights = [
  { value: "1+ yr", label: "building production-ready apps" },
  { value: "3", label: "full-stack projects shipped" },
  { value: "MERN", label: "React, Node, Express, MongoDB" },
];

const stack = ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Prisma"];

const Home = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="relative w-full">
      <section
        id="home"
        className="relative mx-auto grid min-h-[calc(100vh-3.5rem)] w-[92%] max-w-6xl grid-cols-1 items-center gap-10 px-2 pb-14 pt-10 md:grid-cols-[1.08fr_0.92fr] md:pt-16"
      >
        <div className="pointer-events-none absolute -left-28 top-24 h-72 w-72 rounded-full bg-teal-300/25 blur-3xl dark:bg-teal-400/10" />
        <div className="pointer-events-none absolute -right-28 top-20 h-80 w-80 rounded-full bg-rose-300/20 blur-3xl dark:bg-fuchsia-500/10" />

        <div className="relative z-10 order-2 md:order-1 animate-reveal-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
            <Sparkles className="h-4 w-4 text-teal-500" />
            Available for MERN and Next.js roles
          </div>

          <h1 className="font-space text-5xl font-bold leading-[0.95] text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
            Building clean,
            <span className="block bg-linear-to-r from-teal-500 via-sky-500 to-rose-500 bg-clip-text text-transparent">
              memorable web apps.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg dark:text-slate-300">
            I’m Abhishek Mankumbare, a self-taught MERN stack developer in
            India. I turn ideas into fast, polished products with thoughtful UI,
            scalable backend logic, and the kind of details that make people
            want to stay.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#project"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-slate-900/20 transition duration-300 hover:-translate-y-1 hover:bg-teal-600 dark:bg-white dark:text-slate-950 dark:hover:bg-teal-200"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://drive.google.com/file/d/1-sB-IhRaNRzin0OKWCucWoDbn-rUnSvK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-900/10 bg-white/75 px-6 py-3 text-sm font-bold text-slate-900 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-teal-400 hover:text-teal-700 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:text-teal-200"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <div className="mt-9 grid grid-cols-3 gap-3">
            {highlights.map((item, index) => (
              <div
                key={item.value}
                className="animate-reveal-up rounded-2xl border border-slate-900/10 bg-white/60 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.04]"
                style={{ animationDelay: `${index * 120 + 150}ms` }}
              >
                <p className="font-space text-2xl font-bold text-slate-950 dark:text-white">
                  {item.value}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 order-1 md:order-2 animate-reveal-right">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -left-4 top-10 h-24 w-24 rounded-full border border-teal-400/30 bg-teal-400/10 animate-float-slow" />
            <div className="absolute -right-3 bottom-28 h-20 w-20 rounded-3xl border border-rose-400/30 bg-rose-400/10 animate-float-medium" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-4 shadow-2xl shadow-slate-900/15 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/30">
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white to-transparent animate-shimmer" />
              <div className="overflow-hidden rounded-[1.5rem] bg-slate-950">
                <img
                  src="/images/me.jpeg"
                  alt="Abhishek Mankumbare"
                  className="h-[420px] w-full object-cover object-center transition duration-700 hover:scale-105"
                />
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <div>
                  <h2 className="font-space text-2xl font-bold">
                    Abhishek Mankumbare
                  </h2>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-300">
                    <MapPin className="h-4 w-4 text-teal-500" />
                    India - MERN Stack Developer
                  </p>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/Abhishek937288"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-white transition hover:-translate-y-1 hover:bg-teal-600 dark:bg-white dark:text-slate-950"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abhishek-mankumbare-326bb020a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-white transition hover:-translate-y-1 hover:bg-sky-600 dark:bg-white dark:text-slate-950"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-900/10 bg-slate-950/[0.03] px-3 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <a
          href="#skills"
          aria-label="Scroll to skills"
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 rounded-full border border-slate-900/10 bg-white/70 p-3 text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:text-teal-600 md:grid dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </section>

      <section className="mx-auto w-[92%] max-w-6xl pb-10">
        <div className="animate-reveal-up overflow-hidden rounded-[1.5rem] border border-slate-900/10 bg-white/65 p-5 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-300">
                GitHub Activity
              </p>
              <h2 className="font-space text-2xl font-bold">
                Consistency in public
              </h2>
            </div>
            <span className="hidden rounded-full bg-teal-500/10 px-3 py-1 text-xs font-bold text-teal-700 sm:inline-flex dark:text-teal-200">
              Abhishek937288
            </span>
          </div>
          <div className="overflow-x-auto">
            <GitHubCalendar
              username="Abhishek937288"
              colorScheme={theme === "dark" ? "dark" : "light"}
              blockSize={12}
              blockMargin={4}
              fontSize={12}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
