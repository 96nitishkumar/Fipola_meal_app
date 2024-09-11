import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/Store";
import UPIPayment from "../paymentPages/UPIPayment";

describe("testing the static page of upi Payment", () => {
  test("test render", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <UPIPayment />
        </BrowserRouter>
      </Provider>
    );
  });
});
