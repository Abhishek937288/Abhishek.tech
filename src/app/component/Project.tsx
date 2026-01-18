import { ProjectType, Technology } from "@/types/react-github-calendar";
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
    live: "https://zerodha-trading-platform-clone-project-4.onrender.com/",
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
    live: "https://streamifyweb-2.onrender.com",
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
        icon: TechIcons.Mongoose,
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
    title: "Prolink",
    description:
      "LinkedIn Clone – A professional networking platform built with the MERN stack, allowing users to create profiles, connect with others, post updates, and engage with a social feed, replicating core LinkedIn features.",
    image: "/project/linkedIn.png",
    github: "https://github.com/Abhishek937288/Linkedin-clone",
    live: "https://linkedin-clone-3-acj1.onrender.com",
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
        name: "WebSockets",
        icon: TechIcons.SokcetIO,
        url: "https://socket.io",
        iconKey: "WebSockets",
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
];

const Project = () => {
  return (
    <section id="project" className="w-full pt-15">
      <div className="w-[90%] flex flex-col gap-10 max-w-4xl mx-auto sm:px-3">
        {projects.map((project: ProjectType) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row gap-6 items-start dark:border border-muted rounded-2xl p-3 sm:p-6  shadow-xl   dark:text-white"
          >
            <div className="w-full md:w-[45%] rounded-lg overflow-hidden relative group">
              <img
                src={project.image}
                alt=""
                className="h-60 w-full object-center"
              />

              <div
                className="absolute bottom-2 right-1 flex gap-1 
                  opacity-100 md:opacity-0 group-hover:md:opacity-100 
                  transition-opacity duration-300"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 p-2 rounded-full hover:bg-white transition"
                >
                  <Github className="sm:h-7 sm:w-7  rounded-full  text-gray-800" />
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 p-2 rounded-full hover:bg-white transition"
                >
                  <ArrowUpRight className="h-7 w-7  rounded-full  text-gray-800" />
                </a>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold capitalize">
                  {project.title}
                </h3>
                <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
                  Web App
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>{" "}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-6 place-items-center">
                {project.technologies.map((tech: Technology) => (
                  <a
                    key={tech.name}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 group w-full"
                  >
                    {(() => {
                      const Icon = tech.icon;
                      return (
                        <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                      );
                    })()}

                    <p className="text-xs font-semibold opacity-0  group-hover:opacity-100 text-center">
                      {tech.name}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
