"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Github01Icon,
  Linkedin01Icon,
  Email,
  ArrowRight01Icon,
  TelegramIcon,
} from "@hugeicons/core-free-icons";

const contactItems = [
  {
    icon: Email,
    label: "Email",
    value: "mankumbareabhi@gmail.com",
    href: "mailto:mankumbareabhi@gmail.com",
    size: "large",
    gradient: "from-blue-500/5 to-cyan-500/5",
  },
  {
    icon: Github01Icon,
    label: "GitHub",
    value: "Abhishek",
    href: "https://github.com/Abhishek937288",
    size: "small",
    gradient: "from-gray-500/5 to-slate-500/5",
  },
  {
    icon: Linkedin01Icon,
    label: "LinkedIn",
    value: "Abhishek",
    href: "https://www.linkedin.com/in/abhishek-mankumbare-326bb020a/",
    size: "small",
    gradient: "from-blue-600/5 to-blue-800/5",
  },

  {
    icon: TelegramIcon,
    label: "Telegram",
    value: "Abhishek",
    href: "https://t.me/abhishekmankumbare",
    size: "small",
    gradient: "from-blue-500/5 to-blue-600/5",
  },
];

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  return (
    <section id="contact" className="w-full pt-5 pb-5">
      <div className=" w-[90%] max-w-4xl mx-auto px-2 mb-3   ">
        <h4 className="text-2xl  sm:text-2xl text-gray-800  dark:text-gray-200  tracking-[-0.02em] font-semibold opacity-90">
          Let's Connect
        </h4>
        <p className="  sm:text-lg text-gray-800  dark:text-gray-200   tracking-[-0.02em] font-semibold opacity-80">
          Feel free to reach out me
        </p>
      </div>
      <div className="w-[90%] gap-10  max-w-4xl mx-auto pb-5 px-2 dark:border border-muted  rounded-xl">
        <div className="grid grid-cols-1 shadow-xl p-4 rounded-2xl   dark:text-white md:grid-cols-3 gap-2 md:gap-4 max-w-4xl mx-auto">
          {contactItems.map((contact, index) => {
            const isLarge = contact.size === "large";

            return (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                group relative overflow-hidden rounded-2xl border bg-linear-to-br ${contact.gradient}
                hover:shadow-lg transition-all duration-500 ease-out
                ${isLarge ? "md:col-span-2" : ""}
                ${index === 1 ? "md:col-start-3" : ""}
                ${contact.size === "small" ? "md:col-span-1" : ""}
              `}
              >
                <div className="relative p-4 md:p-6 h-full min-h-40 flex flex-col justify-between">
                  {/* Background Icon */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                    <HugeiconsIcon
                      icon={contact.icon}
                      size={isLarge ? 80 : 60}
                      className="transform group-hover:scale-110 group-hover:-translate-x-2 group-hover:-translate-y-1 transition-all duration-700 ease-out"
                    />
                  </div>

                  <div className="relative z-3">
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                      {contact.label}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {contact.value}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground/70 uppercase tracking-wider">
                      Contact
                    </span>
                    <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                      <HugeiconsIcon
                        icon={ArrowRight01Icon}
                        size={16}
                        className="text-muted-foreground/50 group-hover:text-primary transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
