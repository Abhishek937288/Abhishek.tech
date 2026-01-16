import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" border-t bg-[#f9f4f0] dark:bg-neutral-900 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          Web Developer · MERN · Next.js
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Abhishek937288"
            target="_blank"
            className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/abhishek-mankumbare-326bb020a/"
            target="_blank"
            className="text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:mankumbareabhi@gmail.com"
            className="text-zinc-600 hover:text-red-500 dark:text-zinc-400 dark:hover:text-red-400 transition"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
