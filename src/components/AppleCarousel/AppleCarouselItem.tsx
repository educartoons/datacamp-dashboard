const WIDTH = 1265;
const INITIAL_TRANSLATE = 0;

type AppleCarouseItemProps = {
  index: number;
  currentIndex: number;
  slide: {
    imageUrl: string;
    button: {
      text: string;
    };
  };
  numOfItems: number;
};

function computeTranslate(
  index: number,
  currentIndex: number,
  numOfItems: number
) {
  if (index + 1 === numOfItems && currentIndex < 2)
    return INITIAL_TRANSLATE * -1 + WIDTH * -1;

  if (index === 0 && currentIndex > 2) return WIDTH * numOfItems;

  return -1 * INITIAL_TRANSLATE + WIDTH * index;
}

function AppleCarouseItem({
  index,
  currentIndex,
  slide,
  numOfItems,
}: AppleCarouseItemProps) {
  const translate = computeTranslate(index, currentIndex, numOfItems);
  const opacity = currentIndex === index ? 1 : 0.3;

  return (
    <div
      className="bg-white h-[660px] absolute left-0 w-full"
      style={{
        transform: `translate3d(${translate}px, 0, 0)`,
        opacity: opacity,
        transition: "opacity 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
      }}
    >
      <a
        className="w-[1250px] bg-cover bg-center h-full mx-auto block"
        href=""
        style={{
          opacity: 1,
          backgroundImage: `url(${slide.imageUrl})`,
        }}
      >
        <div>
          <button>{slide.button.text}</button>
        </div>
      </a>
    </div>
  );
}

export { AppleCarouseItem };
