import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Quote } from "@/components/quote";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className='bg-[#F8F7F3] text-[#323131] min-h-screen selection:bg-[#323131] selection:text-[#F8F7F3]'>
      <Header />

      <Hero />

      <Quote
        text='Simplicity is the soul of efficiency.'
        author='Austin Freeman'
      />

      <Projects />

      <Quote
        text='Make it work, make it right, make it fast.'
        author='Kent Beck'
      />

      <div className='relative'>
        <About />
        <Contact />
      </div>
    </main>
  );
}
