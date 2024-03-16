import { CourseCard } from "../CourseCard/CourseCard";
import courses from "./courses.json";

function CoursesGrid() {
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { CoursesGrid };
