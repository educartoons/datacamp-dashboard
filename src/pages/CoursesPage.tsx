import { ChangeEvent, useReducer } from "react";
import { CoursesGrid } from "../components/CoursesGrid/CoursesGrid";
import { Button } from "../components/Button/Button";

interface IState {
  searchtext: string;
  counter: number;
}

type Actions =
  | {
      type: "add";
    }
  | {
      type: "minus";
    }
  | {
      type: "changeSearchText";
      payload: string;
    };

const initialState = {
  counter: 0,
  searchtext: "",
};

const reducer = (state: IState, action: Actions) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "minus": {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case "changeSearchText": {
      return {
        ...state,
        searchtext: action.payload,
      };
    }

    default:
      return state;
  }
};

function CoursesPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "changeSearchText",
      payload: event.target.value,
    });
  };

  return (
    <>
      <h2>Counter {state.counter}</h2>
      <Button variant="secondary" onClick={() => dispatch({ type: "add" })}>
        Add + 1
      </Button>
      <Button variant="secondary" onClick={() => dispatch({ type: "minus" })}>
        Minus - 1
      </Button>
      <input
        onChange={handleChangeInput}
        type="text"
        value={state.searchtext}
      />
      <h3>{state.searchtext}</h3>
      <CoursesGrid />
    </>
  );
}

export { CoursesPage };
