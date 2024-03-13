import { useState } from "react";
import { Button } from "@root/components/Button/Button";
import { CourseCard } from "../CourseCard/CourseCard";
import courses from "./courses.json";

function CoursesGrid() {
  const [move, setMove] = useState(0);

  const handleMove = () => {
    setMove(move + 100);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleMove}>
        Mover
      </Button>
      <div
        style={{
          translate: `${move}px 0`,
          transition: "translate 1s ease",
        }}
      >
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
