import { render, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import { MOCK_DATA } from "../Mocks/Mockdata.json";
import { act } from "@testing-library/react";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve(() => {
    json: () => {
      return Promise.resolve(data);
    };
  });
});
test("should render Body Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  // Quering
  const searchbtn = screen.getByRole("button");
  // console.log(LoginBtn);
  const searchip = screen.getByTestId("searchinput");
  console.log(searchbtn);

  fireEvent.change(searchip, { target: { value: "Eatfit" } });
  fireEvent.click(searchbtn);
  const cards = screen.getAllByTestId("rescard");
  // Asserting
  // expect(searchbtn).toBeInTheDocument();
  expect(cards.length).toBe(4);
});
