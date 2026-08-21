import { ArrowUpRight, Github } from "lucide-react";
import { TechIcons } from "./icons/TechIcons";


const projects = [
  {
    id: 1,
    title: "zerodha clone",
    description:
      "A simplified trading dashboard designed to reflect real investing workflows. It enables users to manage holdings, place buy and sell orders, and track portfolio activity over time through a clear, focused, and intuitive interface built for clarity and ease of use.",
    image: "/project/zerodhaProject.png",
    github:
      "https://github.com/Abhishek937288/Zerodha-Trading-Platform-Clone-project",
    live: "https://zerodha-trading-platform-clone.vercel.app/",
    technologies: [
      {
        name: "React",
        icon: TechIcons.React,
        url: "https://react.dev",
        iconKey: "React",
      },
      {
        name: "Node.js",
        icon: TechIcons.NodeJS,
        url: "https://nodejs.org",
        iconKey: "NodeJs",
      },
      {
        name: "Express.js",
        icon: TechIcons.Express,
        url: "https://expressjs.com",
        iconKey: "Express",
      },
      {
        name: "MongoDB",
        icon: TechIcons.MongoDB,
        url: "https://mongodb.com",
        iconKey: "MongoDB",
      },
      {
        name: "Mongoose",
        icon: TechIcons.Mongoose,
        url: "https://mongoosejs.com",
        iconKey: "Mongoose",
      },
      {
        name: "Tailwind CSS",
        icon: TechIcons.Tailwind,
        url: "https://tailwindcss.com",
        iconKey: "Tailwind",
      },
      {
        name: "TanStack Query",
        icon: TechIcons.ReactQuery,
        url: "https://tanstack.com/query",
        iconKey: "TanStackQuery",
      },
      {
        name: "Postman",
        icon: TechIcons.PostMan,
        url: "https://www.postman.com",
        iconKey: "Postman",
      },
      {
        name: "Git",
        icon: TechIcons.Git,
        url: "https://git-scm.com",
        iconKey: "Git",
      },
      {
        name: "GitHub",
        icon: TechIcons.Github,
        url: "https://github.com",
        iconKey: "GitHub",
      },
      {
        name: "WebSockets",
        icon: TechIcons.SokcetIO,
        url: "https://socket.io",
        iconKey: "WebSockets",
      },
    ],
  },
  {
    id: 2,
    title: "Stremify",
    description:
      "Stremify – A social learning platform built with the MERN stack that enables users to connect with friends, chat, and make video calls. It allows people to learn new languages together in an interactive and engaging way, share experiences, and collaborate, making language learning fun, social, and effective.",
    image: "/project/stremify.png",
    github: "https://github.com/Abhishek937288/Streamifyweb",
    live: "https://streamifyweb-umber.vercel.app",
    technologies: [
      {
        name: "React",
        icon: TechIcons.React,
        url: "https://react.dev",
        iconKey: "React",
      },
      {
        name: "Node.js",
        icon: TechIcons.NodeJS,
        url: "https://nodejs.org",
        iconKey: "NodeJs",
      },
      {
        name: "Express.js",
        icon: TechIcons.Express,
        url: "https://expressjs.com",
        iconKey: "Express",
      },
      {
        name: "MongoDB",
        icon: TechIcons.MongoDB,
        url: "https://mongodb.com",
        iconKey: "MongoDB",
      },
      {
        name: "Mongoose",
        icon: TechIcons.Mongoose,
        url: "https://mongoosejs.com",
        iconKey: "Mongoose",
      },
      {
        name: "Tailwind CSS",
        icon: TechIcons.Tailwind,
        url: "https://tailwindcss.com",
        iconKey: "Tailwind",
      },
      {
        name: "TanStack Query",
        icon: TechIcons.ReactQuery,
        url: "https://tanstack.com/query",
        iconKey: "TanStackQuery",
      },
      {
        name: "Postman",
        icon: TechIcons.PostMan,
        url: "https://www.postman.com",
        iconKey: "Postman",
      },
      {
        name: "Git",
        icon: TechIcons.Git,
        url: "https://git-scm.com",
        iconKey: "Git",
      },
      {
        name: "GitHub",
        icon: TechIcons.Github,
        url: "https://github.com",
        iconKey: "GitHub",
      },
    ],
  },
  {
    id: 3,
    title: "RAG Chatbot",
    description:
      "RAG Chatbot – An AI-powered retrieval-augmented generation platform built with Next.js and React that enables users to upload PDF documents, perform semantic search using Hugging Face embeddings, and receive intelligent answers via OpenAI-compatible LLM. Featuring secure authentication with Clerk, persistent data storage in Neon PostgreSQL using Drizzle ORM, and a modern UI built with shadcn/ui components for a seamless, full-stack chat experience.",
    image: "/images/ragchatbot.png",
    github: "https://github.com/Abhishek937288/RAG-chatbot",
    live: "https://rag-chatbot-psi-sable.vercel.app",
    technologies: [
      {
        name: "Next.js",
        icon: TechIcons.NextJs,
        url: "https://nextjs.org",
        iconKey: "NextJs",
      },
      {
        name: "React",
        icon: TechIcons.React,
        url: "https://react.dev",
        iconKey: "React",
      },
      {
        name: "TypeScript",
        icon: TechIcons.TypeScript,
        url: "https://www.typescriptlang.org",
        iconKey: "TypeScript",
      },
      {
        name: "Tailwind CSS",
        icon: TechIcons.Tailwind,
        url: "https://tailwindcss.com",
        iconKey: "Tailwind",
      },
      {
        name: "PostgreSQL",
        icon: TechIcons.PostgreSQL,
        url: "https://www.postgresql.org",
        iconKey: "PostgreSQL",
      },
      {
        name: "shadcn/ui",
        icon: TechIcons.Shadcn,
        url: "https://ui.shadcn.com",
        iconKey: "Shadcn",
      },
      {
        name: "Git",
        icon: TechIcons.Git,
        url: "https://git-scm.com",
        iconKey: "Git",
      },
      {
        name: "GitHub",
        icon: TechIcons.Github,
        url: "https://github.com",
        iconKey: "GitHub",
      },
    ],
  },
  {
    id: 4,
    title: "Tomato",
    description:
      "Tomato – A full-stack food delivery application built with React, Vite, and TypeScript on the frontend and Express, Prisma, and PostgreSQL on the backend. It features secure user authentication with email verification, intuitive menu browsing by category, seamless cart management, order placement and real-time tracking, and Stripe payment integration. Admins can efficiently manage the menu by adding, updating, and deleting dishes, while users can view their complete order history and manage ongoing orders.",
    image: "/images/Tomato.png",
    github: "https://github.com/Abhishek937288/Food-del",
    live: "https://food-del-three-liard.vercel.app",
    technologies: [
      {
        name: "React",
        icon: TechIcons.React,
        url: "https://react.dev",
        iconKey: "React",
      },
      {
        name: "TypeScript",
        icon: TechIcons.TypeScript,
        url: "https://www.typescriptlang.org",
        iconKey: "TypeScript",
      },
      {
        name: "Vite",
        icon: TechIcons.Vercel,
        url: "https://vitejs.dev",
        iconKey: "Vercel",
      },
      {
        name: "Node.js",
        icon: TechIcons.NodeJS,
        url: "https://nodejs.org",
        iconKey: "NodeJs",
      },
      {
        name: "Express.js",
        icon: TechIcons.Express,
        url: "https://expressjs.com",
        iconKey: "Express",
      },
      {
        name: "PostgreSQL",
        icon: TechIcons.PostgreSQL,
        url: "https://www.postgresql.org",
        iconKey: "PostgreSQL",
      },
      {
        name: "Prisma ORM",
        icon: TechIcons.Prisma,
        url: "https://www.prisma.io",
        iconKey: "Prisma",
      },
      {
        name: "Tailwind CSS",
        icon: TechIcons.Tailwind,
        url: "https://tailwindcss.com",
        iconKey: "Tailwind",
      },
      {
        name: "BetterAuth",
        icon: TechIcons.BetterAuth,
        url: "https://better-auth.vercel.app",
        iconKey: "BetterAuth",
      },
      {
        name: "TanStack Query",
        icon: TechIcons.ReactQuery,
        url: "https://tanstack.com/query",
        iconKey: "TanStackQuery",
      },
      {
        name: "Git",
        icon: TechIcons.Git,
        url: "https://git-scm.com",
        iconKey: "Git",
      },
      {
        name: "GitHub",
        icon: TechIcons.Github,
        url: "https://github.com",
        iconKey: "GitHub",
      },
    ],
  },
];

const Project = () => {
  return (
    <section id="project" className="relative w-full py-16">
      <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-500/10" />
      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-600 dark:text-rose-300">
              Projects
            </p>
            <h2 className="font-space text-4xl font-bold tracking-tight sm:text-5xl">
              Selected work
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            Full-stack builds focused on useful workflows, auth, data, realtime
            features, and responsive product interfaces.
          </p>
        </div>

        <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group animate-reveal-up overflow-hidden rounded-[1.75rem] border border-slate-900/10 bg-white/65 p-3 shadow-xl shadow-slate-900/5 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/10 md:grid md:grid-cols-[0.92fr_1.08fr] md:gap-6 md:p-5 dark:border-white/10 dark:bg-white/[0.04]"
            style={{ animationDelay: `${index * 130}ms` }}
          >
            <div className="relative h-72 w-full overflow-hidden rounded-[1.25rem] bg-slate-950 md:h-full md:max-h-64 md:self-center">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/75 via-slate-950/10 to-transparent opacity-70" />

              <div
                className="absolute bottom-4 right-4 flex gap-2 opacity-100 transition duration-300 md:opacity-0 md:group-hover:opacity-100"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  className="grid h-11 w-11 place-items-center rounded-full bg-white/95 text-slate-950 shadow-lg transition hover:-translate-y-1 hover:bg-teal-200"
                >
                  <Github className="h-5 w-5" />
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live demo`}
                  className="grid h-11 w-11 place-items-center rounded-full bg-white/95 text-slate-950 shadow-lg transition hover:-translate-y-1 hover:bg-teal-200"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-7 p-3 md:p-2">
              <div>
              <div className="flex items-center justify-between">
                <h3 className="font-space text-3xl font-bold capitalize">
                  {project.title}
                </h3>
                <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-white dark:bg-white dark:text-slate-950">
                  Web App
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <a
                    key={tech.name}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-900/10 bg-white/70 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-400 dark:border-white/10 dark:bg-white/5"
                    title={tech.name}
                  >
                    <tech.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
