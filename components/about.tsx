"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ParallaxProps {
  children: string;
  baseVelocity: number;
  className?: string;
  style?: any;
}

function ParallaxText({
  children,
  baseVelocity = 100,
  className,
  style,
}: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className='overflow-hidden m-0 whitespace-nowrap flex flex-nowrap'>
      <motion.div
        className={`flex flex-nowrap gap-8 md:gap-12 ${className}`}
        style={{ x, ...style }}
      >
        <span className='block mr-8 md:mr-12'>{children}</span>
        <span className='block mr-8 md:mr-12'>{children}</span>
        <span className='block mr-8 md:mr-12'>{children}</span>
        <span className='block mr-8 md:mr-12'>{children}</span>
      </motion.div>
    </div>
  );
}

export function About() {
  const containerRef = useRef(null);

  const mainBg = "#F8F7F3";
  const mainText = "#323131";
  const mutedText = "#646363";
  const border = "#E6E5E1";

  const services = [
    {
      title: "Full Stack Architecture",
      desc: "Next.js, Django",
    },
    {
      title: "System Optimization",
      desc: "Performance Tuning, Caching Strategies, Clean Code",
    },
    {
      title: "Backend & Database",
      desc: "Python, Node.js, PostgreSQL, MongoDB",
    },
    {
      title: "Technical Leadership",
      desc: "Code Review, Mentorship, CI/CD Pipelines",
    },
  ];

  const techStackString =
    "TypeScript Python React Next.js Django PostgreSQL Prisma Redis Docker AWS Tailwind Framer-Motion Git CI/CD REST-API";

  return (
    <section
      id='about'
      ref={containerRef}
      className='w-full py-24 md:py-32 overflow-hidden'
      style={{ backgroundColor: mainBg, color: mainText }}
    >
      <div className='w-full max-w-[1400px] mx-auto px-6 md:px-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-24'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='flex flex-col justify-between'
          >
            <div>
              <span
                className='block text-xs font-semibold tracking-[0.2em] uppercase mb-6'
                style={{ color: mutedText }}
              >
                The Philosophy
              </span>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8'>
                I transform{" "}
                <span className='font-serif italic'>complex requirements</span>{" "}
                into{" "}
                <span className='font-serif italic'>
                  elegant technical solutions.
                </span>
              </h2>

              <p
                className='text-base md:text-lg leading-relaxed mb-6'
                style={{ color: mutedText }}
              >
                In a landscape filled with bloated software, I focus on what
                matters: speed, reliability, and maintainability. I don't just
                write code; I engineer systems that last.
              </p>

              <p
                className='text-base md:text-lg leading-relaxed mb-12'
                style={{ color: mutedText }}
              >
                My approach is rooted in the belief that good software should be
                boringly stable in production, but excitingly simple to develop
                and extend.
              </p>
            </div>

            {/* Interactive Card Button */}
            <Link
              href='/about'
              className='group w-full md:w-fit flex items-center justify-between gap-8 px-8 py-5 border rounded-full transition-all duration-500 hover:bg-[#323131] hover:text-[#F8F7F3]'
              style={{ borderColor: mainText }}
            >
              <div className='flex flex-col'>
                <span className='text-sm font-bold tracking-widest uppercase opacity-60 group-hover:opacity-80'>
                  Career Path
                </span>
                <span className='text-lg font-medium'>
                  View Professional Journey
                </span>
              </div>
              <div className='w-10 h-10 rounded-full flex items-center justify-center bg-[#323131] text-[#F8F7F3] transition-transform duration-500 group-hover:bg-[#F8F7F3] group-hover:text-[#323131] group-hover:rotate-[-45deg]'>
                <ArrowRight size={18} />
              </div>
            </Link>
          </motion.div>

          <div className='flex flex-col justify-center'>
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className='group flex flex-col py-6 border-b transition-colors hover:bg-[#323131]/5 px-4 -mx-4 rounded-lg'
                style={{ borderColor: border }}
              >
                <h3 className='text-xl font-medium mb-1'>{service.title}</h3>
                <p className='text-sm font-medium' style={{ color: mutedText }}>
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-2 md:gap-4 opacity-80'>
        <ParallaxText
          baseVelocity={0.5}
          className='text-5xl md:text-7xl lg:text-9xl font-medium tracking-tighter text-transparent'
          style={{ WebkitTextStroke: `1px ${mainText}` }}
        >
          {techStackString}
        </ParallaxText>

        <ParallaxText
          baseVelocity={-0.5}
          className='text-5xl md:text-7xl lg:text-9xl font-serif italic tracking-tighter'
          style={{ color: mainText }}
        >
          {techStackString}
        </ParallaxText>
      </div>
    </section>
  );
}
