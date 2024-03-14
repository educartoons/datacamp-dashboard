type CarouselItemProps = {
  index: number;
  item: {
    imageUrl: string;
    button: {
      text: string;
      ariaLabel: string;
    };
  };
  currentIndex: number;
  numOfItems: number;
};

const ITEM_WIDTH = 800;

function CarouselItem({
  index,
  item,
  currentIndex,
  numOfItems,
}: CarouselItemProps) {
  const computeTranslateX = () => {
    if (index === numOfItems - 1 && currentIndex < 2) {
      return ITEM_WIDTH * -1;
    }

    if (index === 0 && currentIndex > 2) {
      return ITEM_WIDTH * numOfItems;
    }

    return ITEM_WIDTH * index;
  };

  const translate = computeTranslateX();

  const opacity = currentIndex === index ? 1 : 0.2;

  const translateText = currentIndex === index ? 0 : 200;

  return (
    <div
      className="absolute w-full"
      style={{
        transition: "opacity 1s cubic-bezier(0.645, 0.045, 0.355, 1)",
        transform: `translate3d(${translate}px, 0, 0)`,
        opacity: opacity,
      }}
    >
      <a
        className="mx-auto h-[500px] w-[780px] block bg-center bg-cover relative overflow-hidden"
        href=""
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      >
        <div
          className="absolute bottom-4 left-4"
          style={{
            opacity: opacity,
            transition: "all 1s cubic-bezier(0.645, 0.045, 0.355, 1)",
            transform: `translate3d(0, ${translateText}px, 0)`,
          }}
        >
          <button className="bg-white rounded-full px-6 py-2 text-sm">
            {item.button.text}
          </button>
        </div>
      </a>
    </div>
  );
}

export { CarouselItem };
