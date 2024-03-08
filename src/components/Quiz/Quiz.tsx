import { useEffect, useState } from "react";
import { FaRegCircleCheck, FaRegLightbulb } from "react-icons/fa6";
import { ListItem } from "../ListItem/ListItem";
import { Button } from "../Button/Button";

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
  const [showHint, setShowHint] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);

  const handleChecked = (index: number) => {
    setIndexChecked(String(index));
  };

  const handleShowHint = () => {
    setShowHint(true);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const allowedKeys = [1, 2, 3, 4];
    if (allowedKeys.includes(Number(event.key))) {
      setIndexChecked(String(Number(event.key) - 1));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (indexChecked !== "") {
      setDisableSubmit(false);
    }
  }, [indexChecked]);

  return (
    <div className="flex items-center min-h-screen">
      <div className="bg-white w-[768px] max-w-full mx-auto border border-gray-200 rounded">
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
            <Button
              onClick={handleShowHint}
              variant="secondary"
              icon={<FaRegLightbulb />}
              data-testid="btn-hint"
            >
              Take Hint
            </Button>
            <Button variant="primary" disabled={disableSubmit}>
              Submit Answer
            </Button>
          </div>
        </div>
        {showHint && (
          <div className="px-6 bg-gray-200 py-4" data-testid="hint">
            <h5 className="font-semibold text-sm mb-2">Hint</h5>
            <p className="text-sm">
              Although true AGI (Artificial General Intelligence) is not a
              reality yet, the latest AI achievements can be deemed as examples
              halfway between AI and AGI.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export { Quiz };
