import {
  BadgeCheck,
  Briefcase,
  CalendarDays,
  Code2,
  Rocket,
} from "lucide-react";

const responsibilities = [
  "Developed RESTful APIs using Node.js and Express for handling authentication and core application data.",
  "Integrated frontend with backend systems, ensuring efficient API communication and state management.",
  "Built authentication workflows and real-time features using modern web technologies.",
  "Designed and implemented a Reddit-style forum system with posts, comments, and user interactions.",
];

const Experience = () => {
  return (
    <section id="experience" className="relative w-full py-16">
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-500/10" />
      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-300">
              Experience
            </p>
            <h2 className="font-space text-4xl font-bold tracking-tight sm:text-5xl">
              Where I&apos;ve worked
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            Real product experience building APIs, auth flows, and interactive
            features as a full-stack developer.
          </p>
        </div>

        <div className="relative flex flex-col gap-8 pl-6 sm:pl-10">
          <div className="absolute bottom-4 left-2 top-4 w-px bg-linear-to-b from-teal-400/60 via-sky-400/40 to-transparent sm:left-4" />
          <div
            className="group animate-reveal-up relative overflow-hidden rounded-[1.75rem] border border-slate-900/10 bg-white/65 p-5 shadow-xl shadow-slate-900/5 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/10 md:p-8 dark:border-white/10 dark:bg-white/[0.04]"
          >
            <span className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-linear-to-br from-teal-400/15 to-sky-500/10 blur-2xl" />

            <div className="relative flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-slate-950 text-teal-300 shadow-lg shadow-slate-900/20 transition duration-300 group-hover:-rotate-6 group-hover:text-teal-200 dark:bg-white dark:text-teal-600">
                  <Briefcase className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-space text-2xl font-bold leading-tight sm:text-3xl">
                    Full Stack Developer{" "}
                    <span className="text-slate-500 dark:text-slate-400">
                      Intern → Full Time
                    </span>
                  </h3>
                  <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    <span className="inline-flex items-center gap-1.5">
                      <Code2 className="h-4 w-4 text-teal-500" />
                      MentorChamp
                    </span>
                    <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-bold text-sky-700 dark:text-sky-200">
                      Current
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 sm:items-end">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                  <CalendarDays className="h-3.5 w-3.5 text-teal-500" />
                  Internship · 3 months
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                  <Rocket className="h-3.5 w-3.5 text-rose-500" />
                  Full Time · 3 months &amp; continuing
                </span>
              </div>
            </div>

            <ul className="relative mt-7 grid grid-cols-1 gap-3 md:grid-cols-2">
              {responsibilities.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-slate-900/10 bg-white/60 p-4 text-sm leading-6 text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-400/70 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:bg-white/[0.08]"
                >
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
