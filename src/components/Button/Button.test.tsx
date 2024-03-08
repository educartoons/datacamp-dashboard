import { describe, test } from "vitest";
import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("<Button />", () => {
  test("should render", () => {
    render(<Button variant="primary">test</Button>);
  });
});
