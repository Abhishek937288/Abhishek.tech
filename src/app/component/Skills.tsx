import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="w-full pt-15 ">
      <div className="w-[90%] max-w-4xl mx-auto sm:px-3">
        <div className="">
          <h4 className="text-2xl  sm:text-2xl text-gray-800  dark:text-gray-200  tracking-[-0.02em] font-semibold opacity-90">
            skills
          </h4>
        </div>
        <div className="flex border border-border/50 rounded-xl p-6 bg-[#f9f4f0] dark:bg-slate-800 dark:text-white sm:justify-between max-sm:flex-col gap-5 items-center mt-14">
          <div className="sm:w-[50%] w-full">
            <h4 className="text-2xl sm:text-3xl text-gray-800 dark:text-gray-200 tracking-[-0.02em] font-semibold opacity-90">
              Frontend
            </h4>
          </div>

          <div className="sm:w-[50%] w-full grid grid-cols-3 sm:grid-cols-4 gap-6 place-items-center">
            {[
              {
                name: "JavaScript",
                icon: "https://cdn.simpleicons.org/javascript",
              },
              { name: "React", icon: "https://cdn.simpleicons.org/react" },
              {
                name: "Next.js",
                icon: "https://cdn.simpleicons.org/nextdotjs",
              },
              {
                name: "Tailwind CSS",
                icon: "https://cdn.simpleicons.org/tailwindcss",
              },
              { name: "HTML5", icon: "https://cdn.simpleicons.org/html5" },
              {
                name: "CSS3",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg",
              },
              {
                name: "Bootstrap",
                icon: "https://cdn.simpleicons.org/bootstrap",
              },
              {
                name: "VS Code",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/visualstudiocode.svg",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center gap-2 group w-full"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-7 w-7 cursor-pointer transition-transform duration-300 group-hover:scale-125"
                />
                <p className="text-sm font-semibold opacity-80 text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex border border-border/50 rounded-xl p-6 bg-[#f9f4f0] dark:bg-slate-800 dark:text-white sm:justify-between max-sm:flex-col gap-5 items-center mt-14">
          <div className="sm:w-[50%] w-full ">
            <h4 className="text-2xl sm:text-3xl text-gray-800 dark:text-gray-200 tracking-[-0.02em] font-semibold opacity-90">
              Backend
            </h4>
          </div>

          <div className="sm:w-[50%] w-full grid grid-cols-3 sm:grid-cols-4 gap-6 place-items-center">
            {[
              { name: "Node.js", icon: "https://cdn.simpleicons.org/node.js" },
              {
                name: "Express.js",
                icon: "https://cdn.simpleicons.org/express",
              },
              { name: "REST API", icon: "https://cdn.simpleicons.org/postman" },
              {
                name: "JWT",
                icon: "https://cdn.simpleicons.org/jsonwebtokens",
              },
              { name: "Auth", icon: "https://cdn.simpleicons.org/auth0" },
              { name: "Git", icon: "https://cdn.simpleicons.org/git" },
              { name: "npm", icon: "https://cdn.simpleicons.org/npm" },
            ].map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center gap-2 group w-full "
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-7 w-7 cursor-pointer transition-transform duration-300 group-hover:scale-125"
                />
                <p className="text-sm font-semibold opacity-80 text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex border border-border/50 rounded-xl p-6 bg-[#f9f4f0] dark:bg-slate-800 dark:text-white sm:justify-between max-sm:flex-col gap-5 items-center mt-14">
          <div className="sm:w-[50%] w-full">
            <h4 className="text-2xl sm:text-3xl text-gray-800 dark:text-gray-200 tracking-[-0.02em] font-semibold opacity-90">
              Databases & ORMs
            </h4>
          </div>

          <div className="sm:w-[50%] w-full grid grid-cols-3 sm:grid-cols-4 gap-6 place-items-center">
            {[
              { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
              {
                name: "PostgreSQL",
                icon: "https://cdn.simpleicons.org/postgresql",
              },
              {
                name: "Mongoose",
                icon: "https://cdn.simpleicons.org/mongoose",
              },
              { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma" },
            ].map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center gap-2 group w-full"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-7 w-7 cursor-pointer transition-transform duration-300 group-hover:scale-125"
                />
                <p className="text-sm font-semibold opacity-80 text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex border border-border/50 rounded-xl p-6 bg-[#f9f4f0] dark:bg-slate-800 dark:text-white sm:justify-between max-sm:flex-col gap-5 items-center mt-14">
          <div className="sm:w-[50%] w-full">
            <h4 className="text-2xl sm:text-3xl text-gray-800 dark:text-gray-200 tracking-[-0.02em] font-semibold opacity-90">
              Tools
            </h4>
          </div>

          <div className="sm:w-[50%] w-full grid grid-cols-3 sm:grid-cols-4 gap-6 place-items-center">
            {[
              { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
              { name: "Postman", icon: "https://cdn.simpleicons.org/postman" },
              {
                name: "VS Code",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/visualstudiocode.svg",
              },
              { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel" },
              { name: "Render", icon: "https://cdn.simpleicons.org/render" },
            ].map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center gap-2 group w-full"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-7 w-7 cursor-pointer transition-transform duration-300 group-hover:scale-125"
                />
                <p className="text-sm font-semibold opacity-80 text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
