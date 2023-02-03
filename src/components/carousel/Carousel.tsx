import { ReactNode, useEffect, useState } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import CarouselNav from "./CarouselNav";

interface Props {
  children: ReactNode;
  subElementId: string;
  maxElements: number;
  minElements?: number;
}

const Carousel = ({
  minElements = 0,
  maxElements,
  children,
  subElementId,
}: Props) => {
  const [index, setIndex] = useState<number>(0);
  const [indexCurrentlyInView] = useIntersectionObserver(
    subElementId,
    maxElements
  );

  const handleUpdateIndex = (newIndex: number) => {
    setIndex(newIndex);
  };

  useEffect(() => {
    setIndex(indexCurrentlyInView);
  }, [indexCurrentlyInView]);

  return (
    <>
      <div
        className={
          "relative z-20 flex h-full w-full snap-x snap-mandatory overflow-x-scroll overflow-y-hidden" +
          " scrollbar-thumb-primary/80 scrollbar scrollbar-thin scrollbar-track-gray-400/20" +
          " scrollbar-thumb-rounded-full hover:scrollbar-thumb-primary/60 "
        }
      >
        {children}
      </div>

      <CarouselNav
        actualIndex={index}
        onUpdateIndex={handleUpdateIndex}
        subElementId={subElementId}
        maxElements={maxElements}
      />
    </>
  );
};

export default Carousel;
