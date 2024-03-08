import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ListItem, ListItemProps } from "./ListItem";

describe("ListItem", () => {
  const props: ListItemProps = {
    index: 0,
    text: "Opinion, emotion, and subject.",
    active: false,
    handleChecked: () => {},
  };
  render(<ListItem {...props} />);

  test("should display the alternative", () => {
    expect(screen.getByText("Opinion, emotion, and subject.")).toBeDefined();
    expect(screen.getByRole("radio")).toBeDefined();
  });

  test("should display a span with the text PRESS + Index", () => {
    expect(screen.getByText("PRESS 1")).toBeDefined();
  });
});
