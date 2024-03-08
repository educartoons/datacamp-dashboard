import { useEffect, useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { ListItem } from "./components/ListItem";
import { Button } from "./components/Button";
import { IconType } from "react-icons";

const QUESTION = {
  title: "Elements of a sentiment analysis problem",
  question:
    "What are the three typical elements of a sentiment analysis system?",
  alternatives: [
    "Opinion, emotion, and subject.",
    "Opinion, subject, and opinion holder",
    "Emotion, polarity, and opinion.",
    "Opinion, subject, and polarity",
  ],
};

const BulbIcon = (
  <svg viewBox="0 0 18 18" aria-hidden="true" height="16" role="img" width="16">
    <path
      fill="currentColor"
      d="M9 0a7 7 0 014.95 11.95l-.001-.001c-.794.795-.949 1.1-.949 2.051a1 1 0 01-2 0c0-1.548.396-2.325 1.535-3.467l.04-.037a5 5 0 10-7.11.037C6.605 11.675 7 12.453 7 14a1 1 0 01-2 0c0-.951-.155-1.256-.949-2.051A7 7 0 019 0zm0 7a1 1 0 011 1v6a1 1 0 01-2 0V8a1 1 0 011-1zm0 11c-1.657 0-3-.895-3-2h6c0 1.105-1.343 2-3 2z"
      fillRule="evenodd"
    ></path>
  </svg>
);

function Quiz() {
  const [indexChecked, setIndexChecked] = useState("");

  const handleChecked = (index: number) => {
    setIndexChecked(String(index));
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const allowedKeys = ["1", "2", "3", "4"];
    if (allowedKeys.includes(event.key)) {
      setIndexChecked(String(Number(event.key) - 1));
    }
  };

  const handleClick = () => {
    console.log("click");
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex items-center min-h-screen">
      <div className="bg-white w-[768px] max-w-full mx-auto border border-gray-200 rounded">
        <div className="px-6 pt-6 pb-3">
          <h2 className="text-lg font-semibold mb-2">{QUESTION.title}</h2>
          <p className="text-sm font-light">{QUESTION.question}</p>
        </div>
        <div className="bg-gray-200 px-4 py-2 flex justify-between">
          <p className="flex items-center">
            <FaRegCircleCheck />
            <span className="font-semibold text-sm ml-2">
              Answer the question
            </span>
          </p>
          <span className="bg-yellow-400 rounded text-xs font-medium px-2 py-1">
            50 XP
          </span>
        </div>
        <div className="px-4 pb-3">
          <p className="text-lg font-semibold mt-4 mb-2">Possible Answers</p>
          <p className="font-light text-xs text-gray-700 mb-1">
            Select one answer
          </p>
          <div>
            <ul>
              {QUESTION.alternatives.map((alternative, index) => (
                <ListItem
                  index={index}
                  text={alternative}
                  active={String(index) === indexChecked}
                  handleChecked={handleChecked}
                />
              ))}
            </ul>
          </div>
          <div className="flex justify-between mt-8">
            <Button variant="secondary" icon={BulbIcon} onClick={handleClick}>
              Take Hint (-50 XP)
            </Button>
            <Button variant="primary" disabled={true}>
              Submit Answer
            </Button>
          </div>
        </div>
        <div className="bg-gray-200 px-4 py-4">
          <h5 className="text-sm font-semibold mb-2">Hint</h5>
          <div>
            <p className="text-sm">
              Although true AGI (Artificial General Intelligence) is not a
              reality yet, the latest AI achievements can be deemed as examples
              halfway between AI and AGI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Quiz };
