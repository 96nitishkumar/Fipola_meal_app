import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/Store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeliveryAddresses from "../deliveryAddresses/DeliveryAddresses";

describe("cart test", () => {
  test("cart check", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DeliveryAddresses />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  });
});
