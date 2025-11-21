"use client";

import { Header } from "@/components/header";
import { Contact } from "@/components/contact";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    year: "Nov 2024 — Present",
    company: "PT. Maleo Teknologi Indonesia",
    role: "Full Stack Developer",
    description:
      "Responsible for developing enterprise web applications from scratch. Collaborating closely with the team to translate complex business requirements into functional features using Next.js and Django. Actively involved in solving technical challenges and ensuring system stability.",
    stack: ["Next.js", "Django", "PostgreSQL", "Tailwind CSS"],
    images: [
      "/moments/fulltime/fulltime-1.png",
      "/moments/fulltime/fulltime-2.jpeg",
      "/moments/fulltime/fulltime-3.jpeg",
      "/moments/fulltime/fulltime-4.jpeg",
    ],
  },
  {
    id: 2,
    year: "Jan 2024 — Nov 2024",
    company: "Freelance",
    role: "Full Stack Developer",
    description:
      "Delivered end-to-end web solutions for diverse clients independently. Specialized in translating client requirements into robust applications. Managed timeline estimation and full-stack implementation, reinforcing self-management and problem-solving skills.",
    stack: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
    images: [],
  },
  {
    id: 3,
    year: "Aug 2023 — Dec 2023",
    company: "PT. Maleo Teknologi Indonesia",
    role: "Full Stack Developer Intern",
    description:
      "Contributed to critical web applications in a cross-functional agile environment. Engineered robust RESTful APIs and seamless frontend interfaces using Next.js and MongoDB. Collaborated closely with senior developers to optimize application performance.",
    stack: ["Next.js", "MongoDB", "Express", "Vercel"],
    images: [
      "/moments/intern/intern-1.JPG",
      "/moments/intern/intern-6.jpeg",
      "/moments/intern/intern-2.jpg",
      "/moments/intern/intern-3.JPG",
      "/moments/intern/intern-4.JPG",
      "/moments/intern/intern-5.jpg",
    ],
  },
  {
    id: 4,
    year: "Jun 2023 — Aug 2023",
    company: "East Java Manpower Dept.",
    role: "Software Engineer Intern",
    description:
      "Spearheaded the digitalization of internal employee management through 'SIKANGEN'. Architected the backend using CodeIgniter 4 and MySQL, significantly improving administrative efficiency and data accuracy for the government department.",
    stack: ["CodeIgniter 4", "MySQL", "Bootstrap", "PHP"],
    images: [],
  },
  {
    id: 5,
    year: "Feb 2023 — Jun 2023",
    company: "Alterra Academy",
    role: "Front-End Engineering Mentee",
    description:
      "Completed an intensive engineering bootcamp focused on the React ecosystem. Mastered component-based architecture, state management, and collaborative workflows using Git, setting a strong foundation for professional development.",
    stack: ["React.js", "Redux", "Git", "REST API", "GraphQL"],
    images: [
      "/moments/alta/alta-1.jpg",
      "/moments/alta/alta-2.png",
      "/moments/alta/alta-3.png",
      "/moments/alta/alta-4.png",
    ],
  },
];

export default function AboutView() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const mainBg = "#F8F7F3";
  const mainText = "#323131";
  const mutedText = "#646363";
  const border = "#E6E5E1";

  return (
    <main
      className='min-h-screen selection:bg-[#323131] selection:text-[#F8F7F3]'
      style={{ backgroundColor: mainBg, color: mainText }}
    >
      <Header />

      <section className='pt-32 md:pt-48 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-12 items-end'>
          <div className='md:col-span-8'>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-tight mb-8'
            >
              Rapid Growth & <br />
              <span className='font-serif italic text-opacity-80'>
                Technical Excellence.
              </span>
            </motion.h1>
          </div>
          <div className='md:col-span-4 pb-2'>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-lg leading-relaxed'
              style={{ color: mutedText }}
            >
              More than just writing code, it is about building lasting
              solutions. From the early days of static web to the era of
              AI-driven development, I constantly adapt and evolve.
            </motion.p>
          </div>
        </div>
      </section>

      <section ref={containerRef} className='relative w-full pb-32'>
        <div className='max-w-[1000px] mx-auto px-6 md:px-12 relative'>
          <div
            className='absolute left-6 md:left-12 top-0 bottom-0 w-[2px]'
            style={{ backgroundColor: border }}
          />

          <motion.div
            className='absolute left-6 md:left-12 top-0 w-[2px] origin-top'
            style={{ backgroundColor: mainText, scaleY: scaleY, bottom: 0 }}
          />

          <div className='flex flex-col gap-24 pt-12'>
            {experiences.map((exp, i) => (
              <TimelineItem
                key={exp.id}
                data={exp}
                index={i}
                colors={{ mainText, mutedText, border }}
              />
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}

function TimelineItem({
  data,
  index,
  colors,
}: {
  data: any;
  index: number;
  colors: any;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className='relative pl-12 md:pl-24 group'
    >
      <span
        className='absolute left-[21px] md:left-[45px] top-2 w-3 h-3 rounded-full border-2 z-10 transition-colors duration-300 group-hover:bg-[#323131]'
        style={{ borderColor: colors.mainText, backgroundColor: "#F8F7F3" }}
      ></span>

      <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12'>
        <div className='md:col-span-3'>
          <span className='text-sm font-bold tracking-widest uppercase block mb-1 opacity-50'>
            Period
          </span>
          <h3 className='text-xl font-medium font-mono'>{data.year}</h3>
        </div>

        <div className='md:col-span-9'>
          <h2 className='text-3xl md:text-4xl font-medium mb-2'>{data.role}</h2>
          <h4 className='text-xl font-serif italic mb-6 opacity-70'>
            at {data.company}
          </h4>

          <p
            className='text-lg leading-relaxed mb-6'
            style={{ color: colors.mutedText }}
          >
            {data.description}
          </p>

          <div className='flex flex-wrap gap-2 mb-10'>
            {data.stack.map((tech: string, idx: number) => (
              <span
                key={idx}
                className='px-3 py-1 text-xs font-medium border rounded-full'
                style={{ borderColor: colors.border, color: colors.mutedText }}
              >
                {tech}
              </span>
            ))}
          </div>

          {data.images && data.images.length > 0 && (
            <div className='relative w-full'>
              <span className='block text-[10px] font-bold tracking-widest uppercase mb-3 opacity-40'>
                Moments
              </span>

              <div
                className='flex gap-4 overflow-x-auto pb-4 snap-x cursor-grab active:cursor-grabbing'
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>

                {data.images.map((img: string, imgIdx: number) => (
                  <div
                    key={imgIdx}
                    className='relative flex-shrink-0 w-[200px] md:w-[280px] aspect-[4/3] rounded-lg overflow-hidden snap-center bg-gray-200'
                  >
                    <Image
                      src={img}
                      alt={`${data.company} moment ${imgIdx + 1}`}
                      fill
                      className='object-cover grayscale-0 md:grayscale-100 md:hover:grayscale-0 transition-all duration-500 ease-out'
                    />
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
