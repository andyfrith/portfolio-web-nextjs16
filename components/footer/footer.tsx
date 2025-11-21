"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";
export interface SocialLink {
  platform: string;
  href: string;
  icon: React.ReactNode;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterProps {
  socialLinks?: SocialLink[];
  links?: FooterLink[];
  copyright?: string;
  className?: string;
}

const defaultSocialLinks: SocialLink[] = [
  {
    platform: "linkedin",
    href: "https://linkedin.com/in/goodapplemedia",
    icon: <Linkedin className="size-5" />,
    label: "LinkedIn",
  },
  {
    platform: "github",
    href: "https://github.com/andyfrith",
    icon: <Github className="size-5" />,
    label: "GitHub",
  },
];

export function Footer({
  socialLinks = defaultSocialLinks,
  className,
}: FooterProps) {
  const currentYear = new Date().getFullYear();
  const defaultCopyright = `© ${currentYear} Andy Frith`;

  return (
    <motion.div
      key="overview"
      className="mx-4 mt-5 md:mx-0"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <footer className={cn("w-full px-16 pb-8", className)}>
        <div className="mx-auto max-w-3xl pt-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold dark:text-white">
                  Andy Frith
                </h2>
                {/* <ShieldCheck className="size-4" />
                <span className="text-sm">He / Him / Mr / Sir / Master</span> */}
              </div>
              <div className="hidden flex-col gap-0 text-sm md:flex">
                <p>
                  Leading & empowering teams to deliver secure, high-performance
                  software solutions.
                </p>
                <p>
                  Architecting future-proof systems with AI & exceptional UX.
                </p>
                <p>Innovative UI engineer in React & JavaScript</p>
              </div>
              <div className="flex flex-col gap-0 text-sm md:hidden">
                <p>
                  Leading & empowering teams to deliver secure, high-performance
                  software solutions. Architecting future-proof systems with AI
                  & exceptional UX. Innovative UI engineer in React &
                  JavaScript.
                </p>
              </div>
            </div>

            {socialLinks && socialLinks.length > 0 && (
              <nav
                className="flex items-center gap-4"
                aria-label="Social media links"
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 transition-colors hover:text-zinc-300 dark:text-zinc-400 dark:hover:text-zinc-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </nav>
            )}
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
