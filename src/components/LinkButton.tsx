import React from "react";
import Link from "next/link";

import { IoShareOutline } from "react-icons/io5";

type Props = {
  image: image;
  text: string;
  link: string;
};

function LinkButton({ image, text, link }: Props) {
  function copyText(e) {
    e.preventDefault();
    navigator.clipboard.writeText(link);
  }

  return (
    <div className="relative w-[calc(100%_-_4rem)]">
      <div className="absolute z-[-1] mt-2 ml-2 inline-block h-full w-full  bg-black" />

      <Link
        href={link}
        target="_blank"
        className=" group relative  flex w-full justify-center border-2 border-black bg-gray-100 py-3 hover:translate-y-1 hover:translate-x-1 hover:transform"
      >
        <span className="font-Poppins">{text}</span>
        <IoShareOutline
          className=" invisible absolute  right-0 mt-[-6px] mr-2 h-9 w-9  rounded-full border-gray-300 bg-zinc-100 object-cover p-[8px] text-2xl ease-in-out group-hover:visible group-hover:delay-[75ms] hover:bg-gray-200"
          onClick={copyText}
        />
      </Link>
    </div>
  );
}

export default LinkButton;
