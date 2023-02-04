import React from "react";

type Props = {};

function NavButton({ value, handleClick, currentIndex }: Props) {
  const selectedStyle = {
    backgroundColor: "#4682B4",
  };

  return (
    <div
      onClick={() => handleClick(value)}
      index={value}
      className="z-60 h-4 w-4 cursor-pointer rounded-full bg-gray-400"
      style={currentIndex === value ? selectedStyle : null}
    ></div>
  );
}

export default NavButton;
