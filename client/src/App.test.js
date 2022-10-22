import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders documentation", () => {
  render(<App />);
  const linkElement = screen.getByText(/Documentation/i);
  expect(linkElement).toBeInTheDocument();
});
