import { useState, useMemo } from "react";
import { CourseCard } from "../CourseCard/CourseCard";
import courses from "./courses.json";
import { initialItems } from "./utils";
import { Button } from "../Button/Button";

function CoursesGrid() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  // const selectedItems = items.filter((item) => item.isSelected);

  const selectedItems = useMemo(() => {
    return items.filter((item) => item.isSelected);
  }, [items]);

  console.log(selectedItems);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button variant="primary" onClick={() => setCount(count + 1)}>
        Button
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
}

export { CoursesGrid };
