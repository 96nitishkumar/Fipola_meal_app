import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/Store";
import { fireEvent, render, screen } from "@testing-library/react";
import SingleOrderHistory from "../paymentPages/SingleOrderHistory";

describe("single order History in detail", () => {
  test("checking the screen", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SingleOrderHistory />
        </BrowserRouter>
      </Provider>
    );

    const backIcon = screen.getByTestId("arrowBack");
    fireEvent.click(backIcon);
    expect(window.location.pathname).toBe("/orderHistory");
  });
});
