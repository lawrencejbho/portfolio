import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface Props {
  handleOnClick: () => void;
  animate: boolean;
}

const CarouselNavRight = ({ animate, handleOnClick }: Props) => {
  return (
    <div
      className={
        "absolute right-0 z-50 flex h-full cursor-pointer items-center px-12" +
        " transition-all ease-in-out" +
        " hover:text-primary hover:animate-pulse hover:bg-transparent" +
        " md:px-36"
      }
      onClick={handleOnClick}
    >
      <ChevronRightIcon
        className={
          "carousel-arrow__right h-10 w-10 text-[color:var(--text)]" +
          `${animate ? " animate" : ""}`
        }
      />
    </div>
  );
};

export default CarouselNavRight;
