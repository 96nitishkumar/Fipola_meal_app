import { getByText, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/Store";
import { BrowserRouter } from "react-router-dom";
import CardPayment from "../cardPay/CardPayment";

describe("cardPay testing", () => {
  test("test the functionality", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CardPayment />
        </BrowserRouter>
      </Provider>
    );
    const text = screen.getByText("Card");
    expect(text).toBeInTheDocument();
  });
});
