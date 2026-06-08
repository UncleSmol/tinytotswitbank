"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import logo from "@/assets/tiny-tots-logo.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programmes", label: "Programmes" },
  { href: "/admissions", label: "Admissions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  { href: "/policies", label: "Policies" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#ead9b8] bg-[#fffaf0]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-8 lg:px-10">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-3 text-lg font-black leading-tight text-[#18332f] sm:text-xl"
        >
          <Image
            src={logo}
            alt="Tiny Tots Witbank Academy logo"
            width={80}
            height={80}
            className="h-14 w-14 shrink-0 rounded-full object-contain lg:h-20 lg:w-20"
            priority
          />
          <span className="min-w-0 text-balance">
            Witbank Tiny Tots Academy
          </span>
        </Link>

        <nav className="hidden min-w-0 flex-wrap gap-2 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-[#38504b] transition hover:bg-[#f7c95f]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#ead9b8] bg-white text-[#18332f] shadow-sm transition hover:border-[#f7c95f] lg:hidden"
        >
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>
          <span className="relative h-5 w-6">
            <motion.span
              className="absolute left-0 top-0 h-0.5 w-6 rounded-full bg-current"
              animate={isMenuOpen ? { y: 9, rotate: 45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            />
            <motion.span
              className="absolute left-0 top-[9px] h-0.5 w-6 rounded-full bg-current"
              animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
            />
            <motion.span
              className="absolute left-0 top-[18px] h-0.5 w-6 rounded-full bg-current"
              animate={isMenuOpen ? { y: -9, rotate: -45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.nav
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="overflow-hidden border-t border-[#ead9b8] bg-[#fffaf0] lg:hidden"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.035, delayChildren: 0.04 } },
                closed: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
              }}
              className="mx-auto grid max-w-7xl gap-2 px-4 py-4 sm:px-8"
            >
              {links.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -8 },
                  }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="flex rounded-lg px-4 py-3 text-base font-black text-[#38504b] transition hover:bg-[#f7c95f] focus-visible:bg-[#f7c95f] focus-visible:outline-none"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
