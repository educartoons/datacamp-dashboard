import { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import items from "./items.json";

const CONTAINER_WIDTH = 800;

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const handleNavigate = (idx: number) => {
    setCurrentIndex(idx);
    setTranslateX(CONTAINER_WIDTH * -1 * idx);
  };

  return (
    <div>
      <div
        className="h-[500px] w-[800px] mx-auto relative"
        style={{
          transition: "transform 1s cubic-bezier(0.645, 0.045, 0.355, 1)",
          transform: `translate3d(${translateX}px, 0, 0)`,
        }}
      >
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            index={index}
            item={item}
            currentIndex={currentIndex}
            numOfItems={items.length}
          />
        ))}
      </div>
      <div className="flex justify-center m-5">
        {Array(items.length)
          .fill(0)
          .map((_, index) => (
            <span
              key={index}
              className="h-2 w-2 rounded-full mx-2"
              onClick={() => handleNavigate(index)}
              style={{
                cursor: "pointer",
                backgroundColor:
                  currentIndex === index ? "black" : "rgba(0, 0, 0, 0.2)",
              }}
            ></span>
          ))}
      </div>
    </div>
  );
}

export { Carousel };
