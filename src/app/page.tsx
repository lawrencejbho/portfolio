import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main>
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
        <Header />

        <section id="hero" className="snap-center">
          <Hero />
        </section>
      </div>
    </main>
  );
}
