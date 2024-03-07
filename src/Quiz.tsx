import { useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { ListItem } from "./components/ListItem";

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

function Quiz() {
  const [indexChecked, setIndexChecked] = useState("");

  const handleChecked = (index: number) => {
    setIndexChecked(String(index));
  };

  return (
    <div className="flex items-center min-h-screen">
      <div className="bg-white max-w-3xl mx-auto border border-gray-200 rounded">
        <div className="px-6 py-6">
          <h2 className="text-lg font-semibold">{QUESTION.title}</h2>
          <p className="text-md font-light">{QUESTION.question}</p>
        </div>
        <div className="bg-gray-200 px-4 py-2 flex justify-between">
          <p className="flex items-center">
            <FaRegCircleCheck />
            <span className="font-semibold text-sm ml-2">
              Answer the question
            </span>
          </p>
          <span className="bg-yellow-400 rounded text-xs font-medium px-2 py-1">
            50px
          </span>
        </div>
        <div className="px-6 pb-3">
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
            <button className="flex items-center border-2 border-datacampBlue py-1 rounded px-4">
              <FaRegLightbulb />
              <span className="ml-1 font-medium text-sm">Take hint</span>
            </button>
            <button className="border-2 border-datacampGreen bg-datacampGreen font-medium text-sm px-4 py-1 rounded">
              Submit Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Quiz };
