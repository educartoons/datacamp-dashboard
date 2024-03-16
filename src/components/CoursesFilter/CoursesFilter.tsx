import { useRef, useEffect, useState, ChangeEvent } from "react";
import filters from "./filters.json";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setAddress } from "@root/redux/userSlice";

const PIXEL_PER_LETTER = 7;
const PADDING_BUTTON = 16;
const GAP = 15;

function CoursesFilter() {
  const [itemsDisplayed, setItemsDisplayed] = useState(0);
  const user = useSelector((state: RootState) => state.user);
  const divRef = useRef<HTMLDivElement>(null);
  const group = filters.filterGroups.find(
    (group) => group.key === "technologies"
  );
  const tags = group!.options || [];

  const computeNumberOfItemsToDisplay = (divWidth: number) => {
    let items = 0;
    let widthUsed = 0;
    for (const tag of tags) {
      const itemWidth =
        tag.label.length * PIXEL_PER_LETTER + PADDING_BUTTON + GAP;
      if (widthUsed + itemWidth > divWidth) {
        break;
      }
      items = items + 1;
      widthUsed = widthUsed + itemWidth;
    }
    setItemsDisplayed(items);
  };

  useEffect(() => {
    const handleResize = () => {
      console.count("handleResize");
      if (divRef.current) {
        computeNumberOfItemsToDisplay(divRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div ref={divRef} className="flex gap-2 mb-3">
        {tags?.slice(0, itemsDisplayed).map((tag) => (
          <button
            key={tag.value}
            className="bg-zinc-200 font-normal text-sm rounded whitespace-nowrap px-2 py-1"
          >
            {tag.label}
          </button>
        ))}
        <button className="bg-zinc-200 font-semibold text-sm rounded whitespace-nowrap px-2 py-1">
          {tags?.length - itemsDisplayed}+
        </button>
      </div>
    </div>
  );
}

export { CoursesFilter };
