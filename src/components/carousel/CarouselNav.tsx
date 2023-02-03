import CarouselNavLeft from "./CarouselNavLeft";
import CarouselNavRight from "./CarouselNavRight";

interface Props {
  subElementId: string;
  maxElements: number;
  minElements?: number;
  actualIndex: number;
  onUpdateIndex: (newIndex: number) => void;
}

const CarouselNavigator = ({
  actualIndex,
  onUpdateIndex,
  minElements,
  maxElements,
  subElementId,
}: Props) => {
  const dots = Array.apply(null, Array(maxElements));

  const getDomElement = (domIndex: number): HTMLElement | null => {
    return document.getElementById(`${subElementId}${domIndex}`);
  };

  const handleUpdateIndex = (value: number) => {
    onUpdateIndex(value);
  };

  const handleDotClick = (value: number) => {
    const htmlElement: HTMLElement | null = getDomElement(value);

    if (!htmlElement) {
      return;
    }

    htmlElement.scrollIntoView({ behavior: "smooth", block: "center" });
    handleUpdateIndex(value);
  };

  const handleScrollIntoView = (actionType: "increase" | "decrease") => {
    if (actualIndex === minElements || actualIndex === maxElements) {
      return;
    }

    const tempIndex: number =
      actionType === "increase" ? actualIndex + 1 : actualIndex - 1;
    const htmlElement: HTMLElement | null = getDomElement(tempIndex);

    if (!htmlElement) {
      return;
    }

    htmlElement.scrollIntoView({ behavior: "smooth", block: "center" });
    handleUpdateIndex(tempIndex);
  };

  return (
    <>
      {actualIndex !== 0 && (
        <CarouselNavLeft
          handleOnClick={() => handleScrollIntoView("decrease")}
          animate={actualIndex === maxElements - 1}
        />
      )}
      {actualIndex !== maxElements - 1 && (
        <CarouselNavRight
          handleOnClick={() => handleScrollIntoView("increase")}
          animate={actualIndex === 0}
        />
      )}

      <div
        className={
          "absolute bottom-5 z-20 hidden items-center space-x-2" +
          " md:bottom-10 md:flex"
        }
      >
        {dots.map((element: any, elementIndex: number) => (
          <div
            onClick={() => handleDotClick(elementIndex)}
            className={
              "carousel-dot bg-primary/60 h-5 w-5 rounded-full" +
              " hover:bg-primary hover:cursor-pointer" +
              ` ${actualIndex === elementIndex ? " active" : " h-4 w-4"}`
            }
            key={elementIndex}
          />
        ))}
      </div>
    </>
  );
};

export default CarouselNavigator;
