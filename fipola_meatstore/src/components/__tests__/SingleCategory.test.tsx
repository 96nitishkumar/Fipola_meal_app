import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/Store";
import { BrowserRouter } from "react-router-dom";
import SingleCategoryProducts from "../productsCategoryawise/SingleCategoryProducts";

describe("single category products ", () => {
  test("test the increment", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SingleCategoryProducts />
        </BrowserRouter>
      </Provider>
    );
    const increment = screen.getAllByTestId("incrementButton");
    const quantity = screen.getAllByTestId("quantityText");
    fireEvent.click(increment[0]);
    expect(quantity[0].textContent).toBe("1");
  });
  test("test the decrement", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SingleCategoryProducts />
        </BrowserRouter>
      </Provider>
    );
    const quantity = screen.getAllByTestId("quantityText");
    const decrement = screen.getAllByTestId("decrementButton");

    fireEvent.click(decrement[0]);
    expect(quantity[0].textContent).toBe("0");
  });
  test("check home", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SingleCategoryProducts />
        </BrowserRouter>
      </Provider>
    );
    const homeButton = screen.getByTestId("homeButton");
    fireEvent.click(homeButton);
    expect(window.location.pathname).toBe("/home");
  });
});
