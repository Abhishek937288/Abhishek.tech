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
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!form.current) return;

  setLoading(true);

  emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form.current,
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      }
    )
    .then(
      () => {
        toast.success("Message sent successfully");
        form.current?.reset();
      },
      () => {
        toast.error("Failed to send message");
      }
    )
    .finally(() => {
      setLoading(false);
    });
};

  return (
    <section id="contact" className="w-full">
      <div className="w-[90%] gap-10 flex flex-col sm:flex-row max-w-4xl mx-auto pt-13 pb-5 px-2">
        <div className="w-full max-w-lg rounded-2xl dark:bg-slate-800 bg-[#f9f4f0] border border-white/20 shadow-xl p-6">
          <h2 className="text-3xl font-bold text-purple-600 mb-2">
            Contact Me
          </h2>
          <p className="text-gray-600 text-sm mb-6 dark:text-gray-300">
            Feel free to reach out — I’ll get back to you soon.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-white dark:bg-slate-700 dark:text-white outline-none border border-gray-300 focus:border-purple-400 transition"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-white dark:bg-slate-700 dark:text-white outline-none border border-gray-300 focus:border-purple-400 transition"
            />

            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg bg-white dark:bg-slate-700 dark:text-white outline-none border border-gray-300 resize-none focus:border-purple-400 transition"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 cursor-pointer rounded-lg bg-linear-to-r curosor-pointer from-purple-500 to-indigo-500 text-white font-medium hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        <div className="w-full rounded-2xl flex flex-col gap-3 dark:bg-slate-800 bg-[#f9f4f0] border border-white/20 shadow-xl p-6">
          {contactItems.map((contact, index) => {
            return (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
          group relative overflow-hidden rounded-2xl border bg-linear-to-br ${contact.gradient}
          hover:shadow-lg transition-all duration-500 ease-out
       
        `}
              >
                <div className="relative p-4 md:p-6 h-full min-h-20 flex flex-col justify-between">
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                    <HugeiconsIcon
                      icon={contact.icon}
                      className="group-hover:scale-110 group-hover:-translate-x-2 group-hover:-translate-y-1 transition-all duration-700"
                    />
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold mb-1">
                      {contact.label}
                    </h3>
                    <p className="text-sm opacity-80">{contact.value}</p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider opacity-60">
                      Contact
                    </span>
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      size={16}
                      className="opacity-60 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
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
