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
        text='Good design is as little design as possible. Less, but better.'
        author='Dieter Rams'
      />

      <Projects />

      <Quote
        text='The details are not the details. They make the design.'
        author='Charles Eames'
      />

      <div className='relative'>
        <About />
        <Contact />
      </div>
    </main>
  );
}
