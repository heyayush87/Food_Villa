import { render, screen, act, fireEvent } from "@testing-library/react";
import RestaurantMenuitem from "../RestaurantMenuitem";
import { BrowserRouter } from "react-router-dom";
import MenuData from "../Mocks/MenuData.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MenuData);
    },
  });
});

test("should test cart item updation", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <RestaurantMenuitem
          item={{ title: "Recommended", itemCards: [{}, {}] }}
        />
      </BrowserRouter>
    )
  );
  const accorianHeader = await screen.findByText(/Recommended/i);

  //   console.log(accorianHeader);
  fireEvent.click(accorianHeader);
});
