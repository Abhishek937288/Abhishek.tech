"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Home = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className=" w-full  ">
      <section id="home" className="w-[90%] max-w-4xl mx-auto pt-13 px-2">
        <div className="flex max-sm:flex-col max-sm:gap-3 items-center justify-between px-2">
          <div className="flex gap-6 max-sm:flex-col items-center">
            <img
              src="/images/me.jpg"
              alt=""
              className="
    sm:h-24 sm:w-24 h-30 w-30  rounded-full cursor-pointer
    transition-all duration-500 ease-out
    hover:scale-110
    hover:rotate-6
    hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]
    hover:-translate-y-1
    max-sm:shadow-[0_0_30px_rgba(99,102,241,0.6)]
    max-sm:-translate-y-1
  "
            />

            <div className="text-center">
              <h1
                className="font-space text-xl sm:text-3xl font-extrabold tracking-tight
text-slate-900 dark:text-white"
              >
                Abhishek Mankumbare
              </h1>

              <p className="font-space sm:text-lg text-sm opacity-80  tracking-[-0.02em]">
                Aspiring MERN Stack Developer
              </p>
            </div>
          </div>

          <a
            href="https://drive.google.com/file/d/1-sB-IhRaNRzin0OKWCucWoDbn-rUnSvK/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-violet-500   max-sm:shadow-[0_0_30px_rgba(99,102,241,0.6)]  cursor-pointer hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] text-white px-4 py-2 rounded-lg font-semibold hover:bg-violet-700 transition">
              Download CV
            </button>
          </a>
        </div>
        <div className="pt-10">
          <p className="text-center font-space  opacity-80  tracking-[-0.02em]">
            I’m a self-taught MERN stack developer based in India with over a
            year of hands-on experience building real-world web applications. I
            enjoy creating clean UIs and scalable backend logic. I have
            completed the **Delta Full Stack Web Development certification from
            Apna College** and am actively seeking frontend or MERN stack
            developer roles.
          </p>
        </div>
        <div className="pt-5">
          <GitHubCalendar
            username="Abhishek937288"
            colorScheme={theme === "dark" ? "dark" : "light"}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
