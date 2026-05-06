"use client";

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
  return (
    <section id="contact" className="w-full py-16">
      <div className="mx-auto mb-8 w-[92%] max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-300">
          Contact
        </p>
        <h2 className="font-space text-4xl font-bold tracking-tight sm:text-5xl">
          Let&apos;s build something
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
          Open to frontend and MERN stack roles, collaborations, and product
          ideas that need careful execution.
        </p>
      </div>
      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {contactItems.map((contact, index) => {
            const isLarge = contact.size === "large";

            return (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                group relative animate-reveal-up overflow-hidden rounded-[1.5rem] border border-slate-900/10 bg-linear-to-br ${contact.gradient}
                bg-white/65 shadow-xl shadow-slate-900/5 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-white/[0.04]
                ${isLarge ? "md:col-span-2" : ""}
                ${index === 1 ? "md:col-start-3" : ""}
                ${contact.size === "small" ? "md:col-span-1" : ""}
              `}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="relative flex h-full min-h-44 flex-col justify-between p-5 md:p-6">
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                    <HugeiconsIcon
                      icon={contact.icon}
                      size={isLarge ? 80 : 60}
                      className="transform group-hover:scale-110 group-hover:-translate-x-2 group-hover:-translate-y-1 transition-all duration-700 ease-out"
                    />
                  </div>

                  <div className="relative z-10">
                    <h3 className="mb-1 text-xl font-bold transition-colors duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-200">
                      {contact.label}
                    </h3>
                    <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
                      {contact.value}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      Contact
                    </span>
                    <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                      <HugeiconsIcon
                        icon={ArrowRight01Icon}
                        size={16}
                        className="text-slate-500 transition-colors duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-200"
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
