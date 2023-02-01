import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main style={{ scrollBehavior: "smooth" }}>
      <div className="z-0 h-screen snap-y snap-mandatory overflow-y-scroll bg-[rgb(36,36,36)] text-white scrollbar overflow-x-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        <Header />

        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="about" className="snap-center">
          <About />
        </section>

        <section id="experience" className="snap-center">
          <Work />
        </section>

        <section id="skills" className="snap-start">
          <Skills />
        </section>

        <section id="projects" className="snap-start">
          <Projects />
        </section>

        <section id="contact" className="snap-center">
          <Contact />
        </section>
      </div>
    </main>
  );
}
