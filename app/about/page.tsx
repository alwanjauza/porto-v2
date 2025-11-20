import AboutView from "@/components/views/about-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Explore the professional journey of Alwan Jauza Rosyad, from Intern to Lead Full Stack Developer specializing in Next.js and Enterprise Architecture.",
  openGraph: {
    title: "Professional Journey | Alwan Jauza Rosyad",
    description:
      "From Intern to Lead Developer. See the timeline of my career evolution.",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutView />
    </>
  );
}
