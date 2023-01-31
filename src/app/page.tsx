import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <main style={{ scrollBehavior: "smooth" }}>
      <div className="z-0 h-screen snap-y snap-mandatory overflow-scroll bg-[rgb(36,36,36)] text-white">
        <Header />

        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="about" className="snap-center">
          <About />
        </section>

        <section id="work-experience" className="snap-center">
          <Work />
        </section>

        <section id="skills" className="snap-center">
          <Skills />
        </section>

        <section id="projects" className="snap-center">
          <Projects />
        </section>
      </div>
    </main>
  );
}
