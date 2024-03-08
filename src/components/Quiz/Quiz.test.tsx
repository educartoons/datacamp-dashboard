import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Quiz } from "./Quiz";

describe("<Quiz />", () => {
  test("should render", () => {
    render(<Quiz />);
  });

  test("the hint box should not be displayed", () => {
    expect(screen.queryByTestId("hint")).toBeNull();
  });

  test("the hint should be displayed when user clicks on Hint button", () => {
    const hintButton = screen.getByTestId("btn-hint");

    fireEvent.click(hintButton);

    expect(screen.queryByTestId("hint")).not.toBeNull();
  });
});
