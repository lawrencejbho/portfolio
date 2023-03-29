import React from "react";
import Image from "next/image";

import ProfilePic from "../../public/profile.jpg";
import { IoShareOutline } from "react-icons/io5";

import LinkButton from "../components/LinkButton.tsx";

type Props = {};

function linktree({}: Props) {
  const contentArray = [
    { text: "Linkedin", link: "https://www.linkedin.com/in/lawrencejbho/" },
    { text: "Github", link: "https://github.com/lawrencejbho" },
    { text: "Portfolio", link: "https://www.lawrencejbho.com" },
    { text: "Instagram", link: "https://www.instagram.com/hohum631" },
  ];

  function copyText(e) {
    e.preventDefault();
    navigator.clipboard.writeText("https://www.lawrencejbho.com/linktree");
  }

  return (
    <div>
      <div className=" flex h-[100vh] justify-center bg-gradient-to-t from-blue-300 to-transparent">
        <div className="w-full max-w-[700px]">
          <div className="mt-8 flex w-[calc(100%_-_2rem)] justify-end">
            <IoShareOutline
              onClick={copyText}
              className=" h-9 w-9 cursor-pointer rounded-full border-[1px] border-gray-300 bg-zinc-100 object-cover p-[8px] pt-[.30rem] text-2xl hover:bg-zinc-200 "
            />
          </div>
          <div className=" flex flex-col items-center justify-center space-y-4">
            <Image
              className="relative mx-auto h-24 w-24 rounded-full object-cover "
              src={ProfilePic}
              alt="profile-image"
              width="200"
              height="200"
              priority
            />
            <span className="font-Poppins text-lg font-bold">Lawrence Ho</span>
          </div>
          <div className=" mt-6 flex flex-col items-center space-y-4">
            {contentArray.map((entry, index) => (
              <LinkButton key={index} text={entry.text} link={entry.link} />
            ))}
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-0 z-20 h-[15vh] w-full bg-gradient-to-t from-black to-blue-300"></div> */}
    </div>
  );
}

export default linktree;
