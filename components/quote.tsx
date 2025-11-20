"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";
import { Mouse, ArrowDown } from "lucide-react";

interface QuoteProps {
  text?: string;
  author?: string;
}

export function Quote({
  text = "Good design is as little design as possible.",
  author,
}: QuoteProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const words = text.split(" ");

  return (
    <section ref={containerRef} className='relative h-[300vh] bg-[#F8F7F3]'>
      <div className='sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-6 md:px-12'>
        <div className='max-w-[1200px] flex flex-wrap justify-center gap-x-[0.8em] gap-y-[0.2em] leading-tight mb-12'>
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;

            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </div>

        {author && (
          <motion.div
            style={{ opacity: scrollYProgress }}
            className='text-sm font-medium tracking-widest uppercase text-[#323131]/60 mt-8'
          >
            — {author}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 0.5, duration: 1 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          className='absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'
        >
          <Mouse className='w-6 h-6 text-[#323131]/40' />

          <ArrowDown className='w-4 h-4 text-[#323131]/40' />
        </motion.div>
      </div>
    </section>
  );
}

const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className='relative inline-block text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight'>
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;

        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const color = useTransform(progress, range, ["#E6E5E1", "#323131"]);

  return (
    <motion.span
      style={{ color }}
      className='inline-block transition-colors duration-75'
    >
      {children}
    </motion.span>
  );
};
