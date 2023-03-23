import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PageInfo } from "../../typings";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

import { urlFor } from "../../sanity";

import ProfilePic from "../../public/profile.jpg";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hello! I'm Lawrence`,
      "I like to build with code",
      "Also, a ☕️ enthusiast",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      {/* <BackgroundCircles /> */}
      <Image
        className="relative mx-auto h-40 w-40 rounded-full object-cover "
        src={ProfilePic}
        alt="profile-image"
        width="200"
        height="200"
        priority
      />

      <div className="z-20">
        <h2 className="px-2 pb-2 text-sm uppercase tracking-[15px] text-gray-500 ">
          {pageInfo?.role}
        </h2>
        <h1 className="px-8 text-5xl font-semibold md:mt-4 lg:text-6xl">
          <span className="mr-3 text-gray-800">{text}</span>
          <Cursor cursorColor="#4682B4" />
        </h1>
        <div className="mt-4">
          <a href="#about">
            <button className="heroButton">About</button>
          </a>
          <a href="#skills">
            <button className="heroButton">Skills</button>
          </a>
          <a href="#portfolio">
            <button className="heroButton">Portfolio</button>
          </a>
        </div>
      </div>
      {/* <div className="absolute pt-52 sm:pt-32 md:relative md:pt-0"> */}
    </div>
  );
}

export default Hero;
