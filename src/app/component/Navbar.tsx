"use client";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Code2, Menu, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#project", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="sticky top-0 z-50 w-full border-b border-slate-900/10 bg-[#f7f3ea]/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#070816]/80">
      <div className="mx-auto flex h-16 w-[92%] max-w-6xl items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-900/15 dark:bg-white dark:text-slate-950">
            <Code2
              className="h-5 w-5 transition-transform duration-500 hover:rotate-180"
            />
          </span>
          <span className="font-space text-lg font-bold tracking-tight">
            Abhishek
          </span>
        </a>

        <div className="flex items-center gap-2">
          <div className="hidden items-center rounded-full border border-slate-900/10 bg-white/60 p-1 shadow-sm backdrop-blur sm:flex dark:border-white/10 dark:bg-white/5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-950 hover:text-white dark:text-slate-300 dark:hover:bg-white dark:hover:text-slate-950"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-900/10 bg-white/70 text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:text-teal-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:text-teal-200"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <div className="flex items-center sm:hidden">
            <>
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <button
                    aria-label="Open menu"
                    className="grid h-10 w-10 place-items-center rounded-full border border-slate-900/10 bg-white/70 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <Menu className="h-5 w-5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="mt-2 w-44 rounded-2xl border border-slate-900/10 bg-white/95 p-2 shadow-2xl outline-none backdrop-blur dark:border-white/10 dark:bg-slate-950/95 dark:text-white"
                  align="end"
                >
                  <DropdownMenuGroup>
                    {links.map((link) => (
                      <DropdownMenuItem
                        key={link.href}
                        className="rounded-xl px-3 py-2 font-semibold outline-none transition hover:bg-slate-100 dark:hover:bg-white/10"
                      >
                        <a href={link.href}>{link.label}</a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
