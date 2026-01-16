"use client";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Code2, Menu, Moon, MoreHorizontalIcon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="w-full flex  bg-[#f9f4f0] dark:bg-neutral-900 top-0 sticky z-5 h-12  ">
      <div className="w-[90%]  max-w-4xl mx-auto flex  justify-between   sm:gap-10  max-sm:px-3  border-b border-slate-400 dark:border-gray-500">
        <div className="flex items-center gap-10 justify-center sm:px-10">
          <div className="flex gap-2 items-center">
            <Code2
              className="
    h-7 w-7
    text-green-700 dark:text-red-800
    cursor-pointer
    transition-transform duration-500 ease-in-out
 hover:rotate-360
  "
            />
            <a
              href="#home"
              className="font-space sm:text-lg font-bold tracking-[-0.02em]"
            >
              Abhishek
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2  px-2">
          <div className=" max-sm:hidden flex items-center justify-start gap-5 px-2">
            
            <a
              href="#skills"
              className="hover:underline font-semibold opacity-90"
            >
              skills
            </a>
            <a
              href="#project"
              className="hover:underline font-semibold opacity-90"
            >
              Project
            </a>
            <a
              href="#contact"
              className="hover:underline font-semibold opacity-90"
            >
              Contact
            </a>
          </div>
          <div
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="
    cursor-pointer rounded-lg flex justify-center items-center h-[80%]
    px-2 py-1 sm:py-2
    bg-neutral-200 hover:bg-neutral-300
    dark:bg-neutral-800 dark:hover:bg-neutral-700
    transition-colors duration-300
  "
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon fill="white" color="black" />
            )}
          </div>

          <div className="sm:hidden flex items-center ">
            <>
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <button aria-label="Open menu" className="cursor-pointer">
                   
                    <Menu />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-40 px-5  bg-[#f9f4f0] py-3 mt-2 dark:bg-slate-600 dark:text-white border shadow-2xl rounded-lg "
                  align="end"
                >
                  <DropdownMenuGroup className="">
                
                    <DropdownMenuItem className=" hover:bg-slate-100 outline-none dark:hover:bg-slate-700 px-2 font-semibold opacity-90 cursor-pointer">
                      {" "}
                      <a href="#skills">skills</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="outline-none hover:bg-slate-100 dark:hover:bg-slate-700 px-2  font-semibold opacity-90 cursor-pointer">
                      <a href="#project">Projects</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="outline-none hover:bg-slate-100 dark:hover:bg-slate-700 px-2 font-semibold opacity-90 cursor-pointer">
                      <a href="#contact">Contact</a>
                    </DropdownMenuItem>
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
