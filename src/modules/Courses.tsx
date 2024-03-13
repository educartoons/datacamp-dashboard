import { CoursesFilter } from "../components/CoursesFilter/CoursesFilter";
import { CoursesGrid } from "../components/CoursesGrid/CoursesGrid";
import { CoursesHeader } from "../components/CoursesHeader/CoursesHeader";

function Courses() {
  return (
    <>
      <CoursesHeader />
      <CoursesFilter />
      <CoursesGrid />
    </>
  );
}

export { Courses };
