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
              src="/images/person.png"
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
              <h4
                className="font-space text-lg sm:text-xl font-extrabold tracking-tight 
bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 
bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(139,92,246,0.6)]"
              >
                Abhishek Mankumbare
              </h4>

              <p className="font-space sm:text-lg text-sm opacity-80  tracking-[-0.02em]">
                Self-Taughet Developer
              </p>
            </div>
          </div>

          <a
            href="https://drive.google.com/uc?export=download&id=1djQA3dS2y6bv_JH22AlMNDvHIUTXRrVv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-violet-500   max-sm:shadow-[0_0_30px_rgba(99,102,241,0.6)]  cursor-pointer hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] text-white px-4 py-2 rounded-lg font-semibold hover:bg-violet-700 transition">
              Download CV
            </button>
          </a>
        </div>
        <div className="pt-10">
          <p className="text-center font-space sm:text-lg opacity-80  tracking-[-0.02em]">
            I’m a self-taught developer who enjoys building things and learning
            by doing. I spend most of my time improving my skills, experimenting
            with new technologies, and working on projects that help me
            understand how things actually work.
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
