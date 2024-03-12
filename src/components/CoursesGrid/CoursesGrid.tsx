import { memo } from "react";
import { CourseCard } from "../CourseCard/CourseCard";
import courses from "./courses.json";

type CoursesGridProps = {
  user: string;
  handleChangeUser: () => void;
};

const CoursesGrid = memo(({ user }: CoursesGridProps) => {
  console.log("rendering CoursesGrid", user);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
});

export { CoursesGrid };
