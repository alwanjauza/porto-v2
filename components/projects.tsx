"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data";

export function Projects() {
  const mainBg = "#F8F7F3";
  const mainText = "#323131";
  const mutedText = "#646363";
  const subtleBorder = "#E6E5E1";

  return (
    <section
      id='work'
      className='w-full py-24 md:py-32'
      style={{ backgroundColor: mainBg }}
    >
      <div className='w-full max-w-[1400px] mx-auto px-6 md:px-12'>
        <div className='mb-16 md:mb-24'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className='block text-xs font-semibold tracking-[0.2em] uppercase mb-4'
              style={{ color: mutedText }}
            >
              Selected Work
            </span>
            <h2
              className='text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight'
              style={{ color: mainText }}
            >
              Featured <span className='font-serif italic'>Projects</span>
            </h2>
          </motion.div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 md:gap-y-24'>
          {projects.map((project, index) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <ProjectCard
                project={project}
                index={index}
                colors={{ mainText, mutedText, subtleBorder }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  colors,
}: {
  project: any;
  index: number;
  colors: any;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`group cursor-pointer flex flex-col gap-6 ${
        !isEven ? "md:mt-16" : ""
      }`}
    >
      <div className='relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-[#E6E5E1]'>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className='object-cover grayscale-0 md:grayscale-100 group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105'
        />

        <div className='absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5' />

        <div
          className='absolute top-6 right-6 w-12 h-12 rounded-full bg-white flex items-center justify-center
                               opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out shadow-lg'
        >
          <ArrowUpRight size={20} className='text-black' />
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <div
          className='flex justify-between items-start border-b pb-4 transition-colors duration-300'
          style={{ borderColor: colors.subtleBorder }}
        >
          <div>
            <h3
              className='text-2xl md:text-3xl font-medium mb-1 transition-colors group-hover:opacity-70'
              style={{ color: colors.mainText }}
            >
              {project.title}
            </h3>
            <p
              className='text-sm font-medium'
              style={{ color: colors.mutedText }}
            >
              {project.category}
            </p>
          </div>
          <span
            className='text-sm font-medium'
            style={{ color: colors.mainText }}
          >
            {project.year}
          </span>
        </div>
        <p
          className='text-base leading-relaxed opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75'
          style={{ color: colors.mutedText }}
        >
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}
