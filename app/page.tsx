import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { BookCall } from "@/components/BookCall";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <BookCall />
    </>
  );
}
