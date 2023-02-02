"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PageInfo } from "../../typings";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

import Profile from "../../public/profile.jpg";
import { urlFor } from "../../sanity";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [`Hi, my name is ${pageInfo[0].name}`, "coffee enthusiast"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      {/* <BackgroundCircles /> */}
      <Image
        className="relative mx-auto h-40 w-40 rounded-full object-cover"
        src={urlFor(pageInfo[0]?.heroImage).url()}
        alt="profile-image"
        width="200"
        height="200"
      />

      <div className="z-20">
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-500">
          {pageInfo[0].role}
        </h2>
        <h1 className="px-10 text-5xl font-semibold lg:text-6xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#4682B4" />
        </h1>

        <div className="pt-5">
          <a href="#about">
            <button className="heroButton">About</button>
          </a>
          <a href="#skills">
            <button className="heroButton">Skills</button>
          </a>
          <a href="#projects">
            <button className="heroButton">Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
