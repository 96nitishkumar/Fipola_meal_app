import { Provider } from "react-redux";
import store from "../../redux/Store";
import { BrowserRouter } from "react-router-dom";
import OrderSuccess from "../orderSuccess/OrderSuccess";
import { act, render } from "@testing-library/react";

describe("order success", () => {
  jest.useFakeTimers();
  test("pageRender", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <OrderSuccess />
        </BrowserRouter>
      </Provider>
    );
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(window.location.pathname).toBe("/");
  });
});
