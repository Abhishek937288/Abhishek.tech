import React from "react";

const Footer = () => {
  return (
    <footer className=" border-t bg-[#f9f4f0] dark:bg-neutral-900 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Web Developer · MERN · Next.js
        </p>

        <div className="flex items-center gap-4">
          <p className="text-sm text-zinc-500 text-center dark:text-zinc-400">© {new Date().getFullYear()} Abhishek. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
