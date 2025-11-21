"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const mainBg = "#F8F7F3";
  const mainText = "#323131";
  const mutedText = "#646363";

  return (
    <main
      className='h-screen w-full flex flex-col items-center justify-center px-6 text-center selection:bg-[#323131] selection:text-[#F8F7F3]'
      style={{ backgroundColor: mainBg, color: mainText }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className='text-8xl md:text-[10rem] font-medium tracking-tighter leading-none mb-2'>
          404
        </h1>

        <h2 className='text-2xl md:text-4xl font-serif italic mb-6'>
          Lost in the void?
        </h2>

        <p
          className='text-base md:text-lg mb-10 max-w-[400px] mx-auto leading-relaxed'
          style={{ color: mutedText }}
        >
          The page you are looking for doesn't exist or has been moved to
          another dimension.
        </p>

        <Link
          href='/'
          aria-label='Back to Home'
          className='inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95'
          style={{
            backgroundColor: mainText,
            color: mainBg,
            boxShadow: `0 4px 20px ${mainText}1A`,
          }}
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className='absolute bottom-8 text-xs font-medium tracking-widest uppercase opacity-40'
      >
        Error 404 — Page Not Found
      </motion.div>
    </main>
  );
}
