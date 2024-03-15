import { BulbLightIcon, CircleImage } from "../SVGS/Svgs";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function CoursesHeader() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <header className="bg-datacampBlue px-6 py-6 rounded mb-4 flex justify-between items-center">
      <div className="">
        <div className="flex items-center mb-3">
          <h1 className="text-white text-xl tracking-wider">Courses</h1>
          <div className="bg-datacampGreenLight flex items-center px-2 py-1 rounded ml-2">
            <BulbLightIcon />
            <span className="text-xs leading-5">Hands-on learning</span>
          </div>
        </div>
        <p className="text-white text-sm font-normal max-w-lg">
          It’s time to roll up your sleeves—we learn best by doing. All of our
          courses are interactive, combining short videos with hands-on
          exercises.
        </p>
        <p className="text-white">{user.name}</p>
        <p className="text-white">{user.address}</p>
      </div>
      <div className="hidden md:flex relative">
        <CircleImage />
        <span className="uppercase text-datacampGreen tracking-widest text-xs absolute items-center h-full w-full flex justify-center">
          Learn
        </span>
      </div>
    </header>
  );
}

export { CoursesHeader };
