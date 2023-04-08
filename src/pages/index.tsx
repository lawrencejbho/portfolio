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
    <div
      id="main"
      className="scroll z-0 h-screen snap-y  overflow-y-scroll scroll-smooth bg-[#fafafa] text-black scrollbar overflow-x-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#4682B4] dark:bg-[#0B111E] "
    >
      <div className="absolute w-full overflow-x-hidden">
        <Header socials={socials} className="dark:bg-[#0B111E]" />
      </div>
      <div>
        <section
          id="hero"
          className="snap-start dark:bg-[#0B111E] dark:text-white "
        >
          <Hero pageInfo={pageInfo} />
        </section>

        <section
          id="about"
          className=" snap-center dark:bg-[#0B111E] dark:text-white "
        >
          <About pageInfo={pageInfo} />
        </section>

        <section id="skills" className="snap-start dark:bg-[#0B111E] ">
          <Skills skills={skills} />
        </section>

        <section
          id="portfolio"
          className="snap-start dark:bg-[#0B111E] dark:text-white "
        >
          <Projects projects={projects} />
        </section>

        <section
          id="contact"
          className="snap-center dark:bg-[#0B111E] dark:text-white "
        >
          <Contact />
        </section>
      </div>
      <footer className="absolute bottom-5 z-50 w-full  ">
        <div className=" flex items-center justify-center ">
          <div className=" flex h-9 w-9 items-center justify-center  rounded-full bg-[#4682B4]">
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
  // this is the best way to swap the indexes of the projects.  Using pop,push, shift, unshift results in errors.
  function swap(array) {
    [array[0], array[1], array[2], array[3]] = [
      array[1],
      array[3],
      array[0],
      array[2],
    ];
    return array;
  }

  const pageInfo = await fetchPageInfo();
  const skills = await fetchSkills();
  const projects = await fetchProjects();
  const socials = await fetchSocials();

  swap(projects);

  return {
    props: {
      pageInfo,
      skills,
      projects,
      socials,
    },
  };
};
