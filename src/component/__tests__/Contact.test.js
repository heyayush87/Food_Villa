import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Contact component Test", () => {
  render(<Contact />);

  const inputBoxes = screen.getAllByRole("textbox");
  console.log(inputBoxes);
  //   expect(inputBoxes).toBeInTheDocument();
});
