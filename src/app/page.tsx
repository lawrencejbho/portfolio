import Image from "next/image";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";

import { Experience, PageInfo, Project, Skill, Social } from "../../typings";

import Logo from "../../public/LJH.svg";

type Props = {
  pageInfo: PageInfo[];
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({
  pageInfo,
  experiences,
  projects,
  skills,
  socials,
}: Props) {
  return (
    <main>
      <div className="z-0 h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-[rgb(36,36,36)] text-white scrollbar overflow-x-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        <Header socials={socials} />

        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="about" className="snap-center">
          <About />
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

        <a href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <Image
                src={Logo}
                className="h-10 w-10 cursor-pointer rounded-full brightness-75 filter hover:brightness-100"
                alt="logo"
              />
            </div>
          </footer>
        </a>
      </div>
    </main>
  );
}

export const getInitialProps = async () => {
  const pageInfo: PageInfo[] = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // revalidate: 3600,
  };
};
