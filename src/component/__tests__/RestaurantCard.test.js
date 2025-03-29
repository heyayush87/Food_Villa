import { render, screen } from "@testing-library/react";
import Restaurant from "../Restaurant";
import MOCK_DATA from "../Mocks/ResCardMock.json";
import "@testing-library/jest-dom";
test("Should test Restaurant props", () => {
  render(<Restaurant {...MOCK_DATA} />);

  // Quering
  const name = screen.getByText("Burger King");

  // Asserting
  expect(name).toBeInTheDocument();
});
