import { TechIcons } from "./icons/TechIcons";

const skillGroups = [
  {
    title: "Frontend",
    description: "Interfaces that feel fast, clear, and polished.",
    gradient: "from-teal-500/12 to-sky-500/10",
    items: [
      { name: "Javascript", icon: TechIcons.Javscript },
      { name: "TypeScript", icon: TechIcons.TypeScript },
      { name: "React Query", icon: TechIcons.ReactQuery },
      { name: "ShadCn", icon: TechIcons.Shadcn },
      { name: "React", icon: TechIcons.React },
      { name: "Next.js", icon: TechIcons.NextJs },
      { name: "Tailwind CSS", icon: TechIcons.Tailwind },
      { name: "HTML5", icon: TechIcons.Html },
      { name: "CSS3", icon: TechIcons.Css },
    ],
  },
  {
    title: "Backend",
    description: "APIs, auth, validation, realtime features, and services.",
    gradient: "from-rose-500/12 to-orange-500/10",
    items: [
      { name: "Node.js", icon: TechIcons.NodeJS },
      { name: "Express.js", icon: TechIcons.Express },
      { name: "JWT", icon: TechIcons.JWT },
      { name: "Auth", icon: TechIcons.BetterAuth },
      { name: "npm", icon: TechIcons.Npm },
      { name: "pnpm", icon: TechIcons.Pnpm },
      { name: "Zod", icon: TechIcons.Zod },
      { name: "Socket.IO", icon: TechIcons.SokcetIO },
    ],
  },
  {
    title: "Data",
    description: "Schema design and persistence for real products.",
    gradient: "from-emerald-500/12 to-lime-500/10",
    items: [
      { name: "MongoDB", icon: TechIcons.MongoDB },
      { name: "PostgreSQL", icon: TechIcons.PostgreSQL },
      { name: "Mongoose", icon: TechIcons.Mongoose },
      { name: "Prisma", icon: TechIcons.Prisma },
    ],
  },
  {
    title: "Tools",
    description: "The workflow pieces that keep shipping smooth.",
    gradient: "from-violet-500/12 to-fuchsia-500/10",
    items: [
      { name: "GitHub", icon: TechIcons.Github },
      { name: "Postman", icon: TechIcons.PostMan },
      { name: "VS Code", icon: TechIcons.VsCode },
      { name: "Vercel", icon: TechIcons.Vercel },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full py-16">
      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-300">
              Skills
            </p>
            <h2 className="font-space text-4xl font-bold tracking-tight sm:text-5xl">
              My build toolkit
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            A practical stack for creating responsive interfaces, secure APIs,
            real-time experiences, and deployable full-stack products.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <article
              key={group.title}
              className={`group animate-reveal-up overflow-hidden rounded-[1.5rem] border border-slate-900/10 bg-linear-to-br ${group.gradient} bg-white/60 p-5 shadow-xl shadow-slate-900/5 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-white/[0.04]`}
              style={{ animationDelay: `${groupIndex * 120}ms` }}
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-space text-2xl font-bold">{group.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {group.description}
                  </p>
                </div>
                <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-bold text-slate-700 shadow-sm dark:bg-white/10 dark:text-slate-200">
                  {group.items.length}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 rounded-2xl border border-slate-900/10 bg-white/65 p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-400/70 hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.08]"
                  >
                    <item.icon className="h-6 w-6 shrink-0" />
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
