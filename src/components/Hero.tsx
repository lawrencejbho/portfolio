"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

import Profile from "../../public/profile.jpg";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, my name is Lawrence", "test1", "test2"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      {/* <BackgroundCircles /> */}
      <Image
        className="relative mx-auto h-40 w-40 rounded-full object-cover"
        src={Profile}
        alt="profile-image"
      />
      <div className="z-20">
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-500">
          Software Engineer
        </h2>
        <h1 className="px-10 text-5xl font-semibold lg:text-6xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="/#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="/#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="/#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="/#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
