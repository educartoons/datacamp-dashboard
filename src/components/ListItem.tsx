import { MdRadioButtonUnchecked } from "react-icons/md";
import { MdRadioButtonChecked } from "react-icons/md";

type ListItemProps = {
  index: number;
  text: string;
  active: boolean;
  handleChecked: (index: number) => void;
};

const LabelClass =
  "flex justify-between w-full items-center outline outline-1 outline-gray-200 hover:outline-datacampSkyBlue hover:outline-2 px-2 py-1 mb-2 rounded";
const LabelClassActive =
  "flex justify-between w-full items-center outline outline-2 outline-datacampSkyBlue hover:outline-datacampSkyBlue hover:outline-2 px-2 py-1 mb-2 rounded";

function ListItem({ index, active, text, handleChecked }: ListItemProps) {
  return (
    <li key={index} className="font-light text-sm">
      <label
        onClick={() => handleChecked(index)}
        className={active ? LabelClassActive : LabelClass}
        htmlFor={String(index)}
        tabIndex={0}
      >
        <div className="flex justify-between items-center">
          <input
            className="opacity-0"
            type="radio"
            id={String(index)}
            checked={active}
          />
          {active ? (
            <MdRadioButtonChecked className="text-datacampSkyBlue text-base" />
          ) : (
            <MdRadioButtonUnchecked className="text-gray-300 text-base" />
          )}
          <span className="text-sm font-light ml-2">{text}</span>
        </div>
        <div>
          <span className="inline-block bg-gray-100 text-xs px-3 py-2 rounded">
            PRESS {index + 1}
          </span>
        </div>
      </label>
    </li>
  );
}

export { ListItem };
