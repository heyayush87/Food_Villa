import { render, screen } from "@testing-library/react";
import Header from "../Header";

import { appStore } from "../../utils/appStore";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

describe.skip("skip the header component", () => {
  test("should test the header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button"); // Ensure your logo has this alt text in the component
    expect(loginButton).toBeInTheDocument();
  });
});
