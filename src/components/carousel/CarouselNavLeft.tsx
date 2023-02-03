import { ChevronLeftIcon } from "@heroicons/react/24/solid";

interface Props {
  handleOnClick: () => void;
  animate: boolean;
}

const CarouselNavLeft = ({ animate, handleOnClick }: Props) => {
  return (
    <div
      className={
        "absolute left-0 z-50 flex h-full cursor-pointer items-center px-12" +
        " transition-all ease-in-out" +
        " hover:text-primary hover:animate-pulse hover:bg-transparent" +
        " md:px-36"
      }
      onClick={handleOnClick}
    >
      <ChevronLeftIcon
        className={
          "carousel-arrow__left h-10 w-10 text-[color:var(--text)]" +
          `${animate ? " animate" : ""}`
        }
      />
    </div>
  );
};

export default CarouselNavLeft;
