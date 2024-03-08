import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ListItem, ListItemProps } from "./ListItem";

describe("<ListItem />", () => {
  const props: ListItemProps = {
    text: "Opinion, emotion, and subject.",
    index: 0,
    active: false,
    handleChecked: () => {},
  };

  test("should render", () => {
    render(<ListItem {...props} />);
  });

  test("should display the alternative text", () => {
    expect(screen.getByText("Opinion, emotion, and subject.")).toBeDefined();
  });

  test("should display PRESS text", () => {
    expect(screen.getByText("PRESS 1")).toBeDefined();
  });
});
