import { TechIcons } from "./icons/TechIcons";

import { Icon } from "lucide-react";

const Skills = () => {
  return (
    <section id="skills" className="w-full pt-15 ">
      <div className="w-[90%] max-w-4xl mx-auto sm:px-3">
        <div className="">
          <h4 className="text-2xl  sm:text-2xl text-gray-800  dark:text-gray-200  tracking-[-0.02em] font-semibold opacity-90">
            skills
          </h4>
        </div>
        <div className="flex flex-col gap-8 mt-14">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
            <div className="flex dark:border border-muted rounded-xl p-6  shadow-xl  dark:text-white flex-col gap-8  items-center">
              <div className="flex items-center justify-center w-full">
                <h4 className="text-2xl sm:text-4xl text-gray-800 dark:text-gray-200 tracking-[-0.02em] font-semibold opacity-90">
                  Frontend
                </h4>
              </div>

              <div className="sm:w-[90%] w-full grid grid-cols-3 sm:grid-cols-4 gap-3 place-items-center">
                {[
                  { name: "Javscript", icon: TechIcons.Javscript },
                  { name: "TypeScript", icon: TechIcons.TypeScript },
                  { name: "ReactQuery", icon: TechIcons.ReactQuery },
                  { name: "ShadCn", icon: TechIcons.Shadcn },
                  { name: "React", icon: TechIcons.React },
                  { name: "Next.js", icon: TechIcons.NextJs },
                  { name: "Tailwind CSS", icon: TechIcons.Tailwind },
                  { name: "HTML5", icon: TechIcons.Html },
                  { name: "CSS3", icon: TechIcons.Css },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center gap-2 group w-full"
                  >
                    <item.icon className="h-7 w-7 cursor-pointer transition-transform duration-300 group-hover:scale-125" />
                    <p className="text-sm font-semibold text-center opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex dark:border border-muted rounded-xl p-6    shadow-xl  dark:text-white flex-col gap-8  items-center">
              <div className="flex items-center justify-center w-full">
                <h4 className="text-2xl sm:text-3xl text-gray-800 dark:text-gray-200 tracking-[-0.02em] font-semibold opacity-90">
                  Backend
                </h4>
              </div>

              <div className="sm:w-[90%] w-full grid grid-cols-3 sm:grid-cols-4 gap-3 place-items-center">
                {[
                  { name: "Node.js", icon: TechIcons.NodeJS },
                  { name: "Express.js", icon: TechIcons.Express },
                  { name: "JWT", icon: TechIcons.JWT },
                  { name: "Auth", icon: TechIcons.BetterAuth },
                  { name: "npm", icon: TechIcons.Npm },
                  { name: "pnpm", icon: TechIcons.Pnpm },
                  { name: "Zod", icon: TechIcons.Zod },
                  { name: "SocketIO", icon: TechIcons.SokcetIO},
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center gap-2 group w-full"
                  >
                    <item.icon className="h-7 w-7 cursor-pointer transition-transform duration-300 group-hover:scale-125" />
                    <p className="text-sm font-semibold group-hover:opacity-90 opacity-0 text-center">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex dark:border border-muted rounded-xl p-6    shadow-xl  dark:text-white flex-col gap-8  items-center">
              <div className="flex items-center justify-center w-full">
                <h4 className="text-2xl sm:text-3xl text-gray-800 dark:text-gray-200 tracking-[-0.02em] font-semibold opacity-90">
                  Databases & ORMs
                </h4>
              </div>

              <div className="sm:w-[90%] w-full grid grid-cols-3 sm:grid-cols-4 gap-3 place-items-center">
                {[
                  { name: "MongoDB", icon: TechIcons.MongoDB },
                  { name: "PostgreSQL", icon: TechIcons.PostgreSQL },
                  { name: "Mongoose", icon: TechIcons.Mongoose },
                  { name: "Prisma", icon: TechIcons.Prisma },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center gap-2 group w-full"
                  >
                    <item.icon className="h-7 w-7 cursor-pointer transition-transform duration-300 group-hover:scale-125" />
                    <p className="text-sm font-semibold group-hover:opacity-90 opacity-0 text-center">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex dark:border border-muted rounded-xl p-6    shadow-xl  dark:text-white flex-col gap-8  items-center">
              <div className="flex items-center justify-center w-full">
                <h4 className="text-2xl sm:text-3xl text-gray-800 dark:text-gray-200 tracking-[-0.02em] font-semibold opacity-90">
                  Tools
                </h4>
              </div>

              <div className="sm:w-[90%] w-full grid grid-cols-3 sm:grid-cols-4 gap-3 place-items-center">
                {[
                  { name: "GitHub", icon: TechIcons.Github },
                  { name: "Postman", icon: TechIcons.PostMan },
                  { name: "VS Code", icon: TechIcons.VsCode },
                  { name: "Vercel", icon: TechIcons.Vercel },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center gap-2 group w-full"
                  >
                    <item.icon className="h-7 w-7 cursor-pointer transition-transform duration-300 group-hover:scale-125" />
                    <p className="text-sm font-semibold group-hover:opacity-90 opacity-0 text-center">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
