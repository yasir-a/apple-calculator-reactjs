import { render, screen } from "@testing-library/react";
import App from "../../App";

test("renders the Calculator component", () => {
  render(<App />);
  // Check if the Calculator component is rendered
  expect(screen.getByRole("application")).toBeInTheDocument();
});
