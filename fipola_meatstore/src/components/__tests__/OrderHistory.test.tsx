import { Provider } from "react-redux";
import store from "../../redux/Store";
import { BrowserRouter } from "react-router-dom";
import OrderHistory from "../orderHistory/OrderHistory";
import { fireEvent, render, screen } from "@testing-library/react";

describe("check the order history", () => {
  test("test any ", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <OrderHistory />
        </BrowserRouter>
      </Provider>
    );
    const orderDescriptionPaper = screen.getAllByTestId("orderDescription");
    fireEvent.click(orderDescriptionPaper[0]);
    expect(window.location.pathname).toBe("/currentorder");
  });
});
