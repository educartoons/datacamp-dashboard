import { Button } from "../Button/Button";
import { Level } from "./Level";
import { ProgressBar } from "./ProgressBar";

function CoursePreview() {
  return (
    <div className="bg-white rounded-md m-4 border border-zinc-200">
      <div className="px-5 py-5">
        <h5 className="uppercase text-[10px] lead tracking-widest font-medium text-gray-500">
          Course
        </h5>
        <h2 className="text-lg font-semibold mt-1 mb-1">
          Introduction to Python
        </h2>
        <Level level={1} />
        <div className="mt-3">
          <p className="text-sm font-normal text-gray-500 leading-5">
            Master the basics of data analysis with Python in just four hours.
            This online course will introduce the Python interface and explore
            popular packages.
          </p>
        </div>
        <div className="mt-3 flex">
          <figure className="w-9 h-9 rounded-full mr-2">
            <img
              className="w-full rounded-full"
              src="https://assets.datacamp.com/authors/avatars/000/000/006/original/hugoaboutpic.jpg?1705506415"
              alt=""
            />
          </figure>
          <div>
            <p className="text-sm text-gray-500">Hugo Bowne-Anderson</p>
            <p className="text-xs text-gray-500">Data Scientist</p>
          </div>
        </div>
      </div>
      <div className="border-t px-5 py-3 flex justify-between items-center">
        <ProgressBar progress={22} />
        <Button variant="primary">Continue</Button>
      </div>
    </div>
  );
}

export { CoursePreview };
