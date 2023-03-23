import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { PageInfo, Experience } from "../../typings";

import { urlFor } from "../../sanity";

import AboutPic from "../../public/about.jpg";

import Arrow from "../../public/right-arrow.png";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
};

function About({ pageInfo, experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="invisible absolute top-24 ml-10 text-2xl uppercase tracking-[20px] text-gray-500 sm:visible">
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src={AboutPic}
          className="mt-24 h-[200px] w-[200px] flex-shrink-0 rounded-full object-cover sm:h-[300px] sm:w-[300px] sm:pt-4 md:mt-0 md:h-[350px] md:w-[350px] md:rounded-lg lg:h-[500px] lg:w-[500px]"
          width="1000"
          height="1000"
          alt="about-pic"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className=" mb-10 w-full space-y-4 px-0 sm:space-y-8 md:px-10 md:pt-14"
      >
        <h4 className="flex justify-center space-x-3 font-semibold sm:text-2xl">
          <span> Systems Engineer</span>
          <Image src={Arrow} className="w-8 sm:mt-[.11rem] " />
          <span className="underline decoration-[#4682B4]">
            Software Engineer
          </span>
        </h4>

        <p className="text-xs md:text-sm  xl:text-base ">
          Hello! 👋🏼 I'm a Full Stack Software Engineer based in San Francisco.
          I'm passionate about learning new things, solving complex problems,
          and creating amazing digital experiences. In 2022, I decided to pursue
          sotware engineering full time and have since created four major
          projects on my own. Currently, I'm working with a small business in
          San Francisco as a Software Engineer to integrate and ETL their
          payment processing data to increase operational efficiency and drive
          business decisions. In my free time I like to stay fit, teach my cats
          new tricks, and play guitar.
        </p>
        <p className="text-xs md:text-sm  xl:text-base ">
          My path into software engineering is a non-conventional one. Before
          jumping in, I was a high performing cybersecurity and computer
          networking pre-sales Systems Engineer with 9 years of experience in
          the industry. After many years of working with product, sales, and
          customers, I continuously ran into a familiar mental road block. A lot
          of days I would think to myself, "Wouldn't it be nice if I could code
          up a feature really quickly" to help build a compelling demo for a
          prospective client. Or "If only I could write an appliation to help
          accelerate some of our sales initiatives" by using empirical data
          versus anecdotally reviewing our wins and losses on a quarterly basis.
          I felt like my abilities were limited by my own toolbox and the skill
          I was missing was being able to build. I decided to use my nights and
          weekends during the pandemic to learn to code in Python & Javascript.
          After a year of diving into Web Development by building websites and
          working on complex problems, I discovered my passion for software
          development. My "Aha!" moment came when I realized that I could
          finally bring all of my ideas to life.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default About;
