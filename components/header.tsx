"use client";

import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    {
      name: "Work",
      href: "/#work",
      isActive: pathname === "/" && false,
    },
    {
      name: "About",
      href: "/about",
      isActive: pathname === "/about",
    },
    {
      name: "Contact",
      href: "#contact",
      isActive: false,
    },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled && !isOpen
          ? "bg-[#F8F7F3]/85 backdrop-blur-md border-b border-[#E6E5E1] py-4"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className='w-full max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center'>
        <Link
          href='/'
          className='text-xl font-semibold tracking-tight text-[#323131] z-[60] relative'
          onClick={() => setIsOpen(false)}
        >
          Alwan Jauza
        </Link>

        <nav className='hidden md:flex gap-8 items-center'>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors relative group ${
                item.isActive
                  ? "text-[#323131]"
                  : "text-[#323131]/70 hover:text-[#323131]"
              }`}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-0 h-[1px] bg-[#323131] transition-all duration-300 ${
                  item.isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        <button
          className='md:hidden z-[60] relative text-[#323131] w-10 h-10 flex items-center justify-center'
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial='closed'
              animate='open'
              exit='closed'
              variants={menuVariants}
              className='fixed inset-0 w-full h-[100dvh] bg-[#F8F7F3] flex flex-col items-center justify-center gap-8 md:hidden z-[50] origin-top'
            >
              <div className='flex flex-col gap-6 text-center'>
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    variants={linkVariants}
                    custom={i}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-4xl font-serif italic transition-all ${
                        item.isActive ? "text-[#323131]" : "text-[#323131]/70"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={linkVariants}
                className='absolute bottom-12 text-sm text-[#323131]/50 font-medium uppercase tracking-widest'
              >
                Surabaya, ID
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
