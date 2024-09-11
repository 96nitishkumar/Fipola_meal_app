import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/Store";
import { BrowserRouter } from "react-router-dom";
import PaymentMethod from "../differentPaymentGateways/MultipleOptionsPayment";

describe("test the payment methods", () => {
  test("test the comp", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PaymentMethod />
        </BrowserRouter>
      </Provider>
    );
  });
});
