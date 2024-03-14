import { useState } from "react";
import slides from "./slides.json";
import { AppleCarouseItem } from "./AppleCarouselItem";

const WIDTH = 1265;
const INITIAL_TRANSLATE = 0;

function AppleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateParent, setTranslateParent] = useState(INITIAL_TRANSLATE);

  const handleNext = () => {
    setTranslateParent(translateParent + WIDTH * -1);
    setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    setTranslateParent(translateParent + WIDTH * 1);
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <div>
      <div>
        <div
          className="w-[1265px] h-[660px] relative mx-auto"
          style={{
            transform: `translate3d(${translateParent}px, 0, 0)`,
            transition: "transform 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
          }}
        >
          {slides.map((slide, index) => (
            <AppleCarouseItem
              key={index}
              slide={slide}
              index={index}
              currentIndex={currentIndex}
              numOfItems={slides.length}
            />
          ))}
        </div>
      </div>
      <div>
        <button onClick={handlePrev}>Prev Slide</button>
        <button onClick={handleNext}>Next Slide</button>
      </div>
    </div>
  );
}

export { AppleCarousel };
