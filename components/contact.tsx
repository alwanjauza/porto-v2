"use client";

import { motion } from "framer-motion";
import { ArrowRight, Instagram, Linkedin, Github } from "lucide-react";

export function Contact() {
  return (
    <section
      id='contact'
      className='py-24 px-6 md:px-12 max-w-[1800px] mx-auto'
    >
      <div className='flex flex-col md:flex-row justify-between items-start md:items-end gap-12'>
        <div className='max-w-2xl'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-4xl md:text-6xl font-medium mb-8 leading-tight'
          >
            Let&apos;s work together on your next project.
          </motion.h2>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            href='mailto:alwanjrosyad.12345@gmail.com'
            className='inline-flex items-center gap-3 text-xl md:text-2xl border-b border-[#323131] pb-1 hover:opacity-60 transition-opacity'
          >
            alwanjrosyad.12345@gmail.com
            <ArrowRight size={24} />
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className='flex gap-4'
        >
          <a
            href='https://instagram.com/alwanjauza'
            target='_blank'
            rel='noopener noreferrer'
            aria-label="Visit Alwan's Instagram Profile"
            className='p-3 bg-white rounded-full border border-[#323131]/10 hover:bg-[#323131] hover:text-[#F8F7F3] transition-colors'
          >
            <Instagram size={20} />
          </a>
          <a
            href='https://linkedin.com/in/alwanjauza'
            target='_blank'
            rel='noopener noreferrer'
            aria-label="Visit Alwan's LinkedIn Profile"
            className='p-3 bg-white rounded-full border border-[#323131]/10 hover:bg-[#323131] hover:text-[#F8F7F3] transition-colors'
          >
            <Linkedin size={20} />
          </a>
          <a
            href='https://github.com/alwanjauza'
            target='_blank'
            rel='noopener noreferrer'
            aria-label="Visit Alwan's GitHub Profile"
            className='p-3 bg-white rounded-full border border-[#323131]/10 hover:bg-[#323131] hover:text-[#F8F7F3] transition-colors'
          >
            <Github size={20} />
          </a>
        </motion.div>
      </div>

      <div className='mt-24 pt-8 border-t border-[#323131]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground'>
        <p>
          © {new Date().getFullYear()} Alwan Jauza Rosyad. All rights reserved.
        </p>

        <p className='opacity-50'>Surabaya, Indonesia</p>
      </div>
    </section>
  );
}
