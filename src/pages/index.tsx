import { GetStaticProps } from "next";

import Image from "next/image";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

import { PageInfo, Skill, Project, Social } from "../../typings";

import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

import { HomeIcon } from "@heroicons/react/24/solid";

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, projects, skills, socials }: Props) => {
  return (
    <div className="scroll z-0 h-screen snap-y  overflow-y-scroll scroll-smooth bg-[#fafafa] text-black scrollbar overflow-x-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#4682B4]">
      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-center">
        <Contact />
      </section>

      <footer className="sticky bottom-5 z-50 w-full">
        <div className=" flex items-center justify-center">
          <div className=" flex h-9 w-9 items-center justify-center rounded-full bg-[#4682B4]">
            <a href="#hero">
              <HomeIcon className=" w-17  h-7 cursor-pointer border-blue-300 pb-0.5 text-white brightness-75 hover:brightness-100" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  function swapIndexes(array) {
    let tmp = array.pop();
    array.unshift(tmp);
    let tmp2 = array.slice(2, 3);
    array.unshift(tmp2);
    return array;
  }

  const pageInfo = await fetchPageInfo();
  const skills = await fetchSkills();
  const projects = await fetchProjects();
  const socials = await fetchSocials();

  swapIndexes(projects);

  return {
    props: {
      pageInfo,
      skills,
      projects,
      socials,
    },
  };
};
