"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  };

  const mainBg = "#F8F7F3";
  const mainText = "#323131";
  const mutedText = "#646363";
  const subtleBorder = "#E6E5E1";

  return (
    <section
      className='relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center pt-24 pb-12 md:py-0'
      style={{ backgroundColor: mainBg, color: mainText }}
    >
      <div className='w-full max-w-[1400px] mx-auto px-6 md:px-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-20'>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className='order-1 md:order-2 flex justify-center md:justify-end'
          >
            <div className='relative w-full max-w-[180px] md:max-w-[380px] aspect-[3/4] md:aspect-[4/5]'>
              <div
                className='absolute top-10 -right-10 w-3/4 h-3/4 rounded-full blur-3xl -z-10 opacity-60'
                style={{ backgroundColor: subtleBorder }}
              />
              <div
                className='relative w-full h-full overflow-hidden rounded-[2rem] border shadow-2xl group'
                style={{
                  borderColor: `${mainText}0D`,
                  boxShadow: `0 4px 30px ${mainText}0A`,
                }}
              >
                <Image
                  src='/hero/hero-image.png'
                  alt='Portrait'
                  fill
                  sizes='(max-width: 768px) 50vw, 400px'
                  className='object-cover transition-transform duration-1000 grayscale-100 md:group-hover:grayscale-0'
                  priority
                />
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
              </div>
            </div>
          </motion.div>

          <div className='order-2 md:order-1 flex flex-col justify-center'>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className='mb-4 md:mb-6 flex items-center gap-3'
            >
              <span
                className='w-8 h-[1px]'
                style={{ backgroundColor: `${mainText}33` }}
              ></span>{" "}
              <span
                className='text-xs font-semibold tracking-[0.2em] uppercase'
                style={{ color: mutedText }}
              >
                Full Stack Engineer
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className='text-3xl sm:text-5xl lg:text-7xl font-medium leading-[1.1] tracking-tight mb-4 md:mb-8'
              style={{ color: mainText }}
            >
              Engineering <br />
              performance with <br />
              <span className='italic font-serif'>radical simplicity.</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
              className='text-sm sm:text-base md:text-lg mb-6 md:mb-10 max-w-[44ch] leading-relaxed'
              style={{ color: mutedText }}
            >
              Building scalable web applications where clean code drives
              efficiency. I prioritize system stability, maintainability, and
              removing unnecessary complexity.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.4 }}
              className='flex flex-wrap items-center gap-3 md:gap-4'
            >
              <a
                href='#work'
                className='px-5 py-3 md:px-8 md:py-4 rounded-full text-sm font-medium hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-lg'
                style={{
                  backgroundColor: mainText,
                  color: mainBg,
                  boxShadow: `0 4px 15px ${mainText}1A`,
                }}
              >
                View Selected Work
              </a>

              <a
                href='#contact'
                className='px-5 py-3 md:px-8 md:py-4 border rounded-full text-sm font-medium hover:bg-opacity-5 transition-all duration-300'
                style={{
                  borderColor: subtleBorder,
                  color: mainText,
                  backgroundColor: `${mainText}0D`,
                }}
              >
                Let&apos;s Collaborate
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className='absolute bottom-4 md:bottom-8 left-6 md:left-12 hidden min-[400px]:flex items-center gap-4'
      >
        <div
          className='w-[1px] h-8 md:h-12'
          style={{ backgroundColor: `${mainText}33` }}
        />
        <ArrowDown
          size={18}
          className='animate-bounce'
          style={{ color: mutedText }}
        />
      </motion.div>
    </section>
  );
}
