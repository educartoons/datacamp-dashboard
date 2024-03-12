import { useState, useRef } from "react";
import { CoursesGrid } from "../components/CoursesGrid/CoursesGrid";

function CoursesPage() {
  const [seconds, setSeconds] = useState(0);
  const clearRef = useRef<number | null>(null);

  console.log("rendering");

  const handleStart = () => {
    clearRef.current = setInterval(() => {
      setSeconds((prevValue) => prevValue + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(clearRef.current!);
  };

  return (
    <>
      <h1>Timer</h1>
      <h2>{seconds}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>stop</button>
      <CoursesGrid />
    </>
  );
}

export { CoursesPage };
