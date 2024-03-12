import { useRef } from "react";
import { CoursesGrid } from "../components/CoursesGrid/CoursesGrid";

function CoursesPage() {
  const counterRef = useRef(0);

  console.log("Renderng CoursesPage");

  const handleAdd = () => {
    counterRef.current = counterRef.current + 1;
    console.log(counterRef.current);
    if (counterRef.current > 10) {
      console.log("Haz una llamada a un API");
    }
  };

  return (
    <>
      <button onClick={handleAdd}>Add + 1</button>
      <CoursesGrid />
    </>
  );
}

export { CoursesPage };
