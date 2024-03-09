import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { Level } from "./Level";
import { ProgressBar } from "./ProgressBar";

type Instructor = {
  name: string;
  marketingBiography: string;
  imageUrl: string;
};

type Course = {
  title: string;
  shortDescription: string;
  instructors: Instructor[];
  difficultyLevel: number;
};

type CourseCardProps = {
  course: Course;
};

function CourseCard({ course }: CourseCardProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded border border-gray-200 flex flex-col justify-between">
      <div className="px-4 py-4">
        <h3 className="text-[10px] text-gray-400 uppercase tracking-widest">
          Course
        </h3>
        <h2 className="font-semibold text-lg mt-1 mb-1">{course.title}</h2>
        <Level level={course.difficultyLevel} />
        <div className="mt-2">
          <p className="text-sm text-gray-600 font-normal">
            {course.shortDescription}
          </p>
        </div>
        <div className="flex items-center mt-1">
          <figure className="h-7 w-7">
            <img
              className="rounded-full"
              src={course.instructors[0].imageUrl}
              alt=""
            />
          </figure>
          <div className="ml-1">
            <p className="text-sm text-gray-600 font-normal">
              {course.instructors[0].name}
            </p>
            <p className="text-xs text-gray-600 font-normal">
              {course.instructors[0].marketingBiography}
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 py-2 flex items-center justify-between border-t border-gray-200">
        <ProgressBar progress={25} />
        <Button variant="primary" onClick={() => navigate("/quiz")}>
          Continue
        </Button>
      </div>
    </div>
  );
}

export { CourseCard };
