import Header from "@/components/Header";
import ThemeToggle from "@/components/ThemeToggle";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <ThemeToggle />
    </>
  );
}
