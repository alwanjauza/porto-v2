"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Contact } from "@/components/contact";
import { motion } from "framer-motion";

interface ProjectViewProps {
  project: any;
  nextProject: any;
}

export function ProjectView({ project, nextProject }: ProjectViewProps) {
  const mainBg = "#F8F7F3";
  const mainText = "#323131";
  const mutedText = "#646363";
  const border = "#E6E5E1";

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <main
      className='min-h-screen selection:bg-[#323131] selection:text-[#F8F7F3]'
      style={{ backgroundColor: mainBg, color: mainText }}
    >
      <Header />

      <section className='pt-32 md:pt-48 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className='flex flex-col gap-8'
        >
          <motion.div variants={fadeUp} className='flex items-center gap-3'>
            <Link href='/' className='hover:opacity-60 transition-opacity'>
              <ArrowLeft size={18} />
            </Link>
            <span className='h-[1px] w-8 bg-[#323131]/30'></span>
            <span
              className='text-xs font-bold tracking-[0.2em] uppercase'
              style={{ color: mutedText }}
            >
              {project.category} — {project.year}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className='text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-tight max-w-[15ch]'
          >
            {project.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className='text-xl md:text-2xl leading-relaxed max-w-[45ch] mt-4'
            style={{ color: mutedText }}
          >
            {project.description}
          </motion.p>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className='w-full px-4 md:px-12 max-w-[1400px] mx-auto mb-24 md:mb-32'
      >
        <div className='relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-[2rem] shadow-2xl shadow-[#323131]/5 group'>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className='object-cover grayscale-0 md:grayscale-100 md:group-hover:grayscale-0 transition-all duration-700 ease-out'
            priority
          />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>
      </motion.section>

      <section className='px-6 md:px-12 max-w-[1400px] mx-auto mb-32'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24'>
          <div className='lg:col-span-4'>
            <div
              className='sticky top-32 flex flex-col gap-8 border-t pt-8'
              style={{ borderColor: border }}
            >
              <div>
                <span className='text-xs font-bold tracking-widest uppercase block mb-2 opacity-40'>
                  Client
                </span>
                <span className='text-lg font-medium'>
                  {project.client || "Confidential"}
                </span>
              </div>

              <div>
                <span className='text-xs font-bold tracking-widest uppercase block mb-2 opacity-40'>
                  My Role
                </span>
                <span className='text-lg font-medium'>
                  {project.role || "Lead Designer"}
                </span>
              </div>

              <div>
                <span className='text-xs font-bold tracking-widest uppercase block mb-2 opacity-40'>
                  Tech Stack
                </span>
                <div className='flex flex-wrap gap-2'>
                  {project.stack?.split(",").map((tech: string, i: number) => (
                    <span
                      key={i}
                      className='px-3 py-1 border rounded-full text-xs font-medium'
                      style={{ borderColor: border }}
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.live}
                target='_blank'
                className='mt-4 inline-flex items-center gap-2 text-sm font-medium border-b pb-1 w-fit transition-all hover:opacity-60'
                style={{ borderColor: mainText }}
              >
                Visit Live Site <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className='lg:col-span-7 lg:col-start-6 flex flex-col gap-20'>
            <div>
              <h3 className='text-3xl md:text-4xl font-serif italic mb-6'>
                The Challenge
              </h3>
              <p
                className='text-lg md:text-xl leading-relaxed'
                style={{ color: mutedText }}
              >
                {project.challenge}
              </p>
            </div>

            {project.images && project.images[0] && (
              <div className='relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 group'>
                <Image
                  src={project.images[0]}
                  alt='Detail 1'
                  fill
                  className='object-cover grayscale-0 md:grayscale-100 md:group-hover:grayscale-0 transition-all duration-300'
                />
              </div>
            )}

            <div>
              <h3 className='text-3xl md:text-4xl font-serif italic mb-6'>
                The Solution
              </h3>
              <p
                className='text-lg md:text-xl leading-relaxed mb-6'
                style={{ color: mutedText }}
              >
                {project.solution}
              </p>
            </div>

            {project.images && project.images[1] && (
              <div className='relative w-full aspect-square md:aspect-video rounded-2xl overflow-hidden bg-neutral-100 group'>
                <Image
                  src={project.images[1]}
                  alt='Detail 2'
                  fill
                  className='object-cover grayscale-0 md:grayscale-100 md:group-hover:grayscale-0 transition-all duration-300'
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section
        className='border-t py-24 md:py-32 bg-[#F2F1ED]'
        style={{ borderColor: border }}
      >
        <div className='max-w-[1400px] mx-auto px-6 md:px-12'>
          <span className='block text-xs font-bold tracking-widest uppercase mb-8 opacity-40 text-center md:text-left'>
            Next Case Study
          </span>

          <Link
            href={`/projects/${nextProject.id}`}
            className='group block relative'
          >
            <div className='flex flex-col md:flex-row md:items-center justify-between gap-8'>
              <h2 className='text-5xl md:text-7xl lg:text-9xl font-medium tracking-tight transition-opacity duration-500 group-hover:opacity-50'>
                {nextProject.title}
              </h2>

              <div className='w-24 h-24 rounded-full border border-[#323131]/20 flex items-center justify-center group-hover:bg-[#323131] group-hover:border-[#323131] transition-all duration-500'>
                <ArrowRight
                  size={32}
                  className='text-[#323131] group-hover:text-[#F8F7F3] transition-colors duration-500'
                />
              </div>
            </div>

            <div className='hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10 rounded-xl overflow-hidden shadow-2xl rotate-[-6deg]'>
              <Image
                src={nextProject.image}
                alt='Next'
                fill
                className='object-cover grayscale-0 md:grayscale-100 md:group-hover:grayscale-0 transition-all duration-300'
              />
            </div>
          </Link>
        </div>
      </section>

      <Contact />
    </main>
  );
}
